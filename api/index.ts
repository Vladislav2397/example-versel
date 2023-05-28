import express from 'express';

const app = express()

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! native api`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.json({ item: `item with slug ${slug}` });
});

module.exports = app
