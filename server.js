const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const geoip = require('geoip-lite');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Load translations
const translations = {
  es: JSON.parse(fs.readFileSync(path.join(__dirname, 'locales/es.json'), 'utf8')),
  en: JSON.parse(fs.readFileSync(path.join(__dirname, 'locales/en.json'), 'utf8')),
};

// Spanish-speaking country codes (ISO 3166-1 alpha-2)
const ES_COUNTRIES = new Set([
  'AR','BO','CL','CO','CR','CU','DO','EC','ES','GQ',
  'GT','HN','MX','NI','PA','PE','PR','PY','SV','UY','VE',
]);

// Gzip all responses
app.use(compression());
app.use(cookieParser());

// Language detection middleware
app.use((req, res, next) => {
  // Skip for static assets and lang-switch route
  if (req.path.startsWith('/public') || req.path.startsWith('/lang')) return next();

  let lang = req.cookies.lang;

  if (!lang) {
    // Try IP geolocation
    const rawIp = (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
      || req.socket.remoteAddress
      || '';
    // Normalize IPv4-mapped IPv6 (::ffff:x.x.x.x)
    const ip = rawIp.replace(/^::ffff:/, '');
    const geo = geoip.lookup(ip);
    if (geo) {
      lang = ES_COUNTRIES.has(geo.country) ? 'es' : 'en';
    }
  }

  if (!lang) {
    // Fallback: Accept-Language header
    const acceptLang = (req.headers['accept-language'] || '').toLowerCase();
    lang = acceptLang.startsWith('es') ? 'es' : 'en';
  }

  res.locals.lang = lang;
  res.locals.t = translations[lang] || translations.es;
  next();
});

// EJS templating
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static assets — 1 year cache for versioned assets
app.use(
  '/public',
  express.static(path.join(__dirname, 'public'), {
    maxAge: '1y',
    immutable: true,
    etag: false,
  })
);

// Language switch route
app.get('/lang/:code', (req, res) => {
  const code = ['es', 'en'].includes(req.params.code) ? req.params.code : 'es';
  res.cookie('lang', code, {
    maxAge: 365 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax',
  });
  const referer = req.headers.referer || '/';
  res.redirect(referer);
});

// Pages
app.get('/', (req, res) => res.render('index', { page: 'inicio' }));
app.get('/productos', (req, res) => res.render('productos', { page: 'productos' }));
app.get('/nosotros', (req, res) => res.render('nosotros', { page: 'nosotros' }));
app.get('/distribuidores', (req, res) => res.render('distribuidores', { page: 'distribuidores' }));
app.get('/logistica', (req, res) => res.render('logistica', { page: 'logistica' }));

app.listen(PORT, () => {
  console.log(`Craks running → http://localhost:${PORT}`);
});
