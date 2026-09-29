/**
 * Tiny teaching API: serves static files and a /api/lessons endpoint.
 * Run: npm start  →  open http://localhost:3000
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');

const LESSONS = [
  { id: 1, title: 'HTML structure & semantic tags', level: 'beginner', minutes: 20 },
  { id: 2, title: 'CSS layout: flexbox & grid', level: 'beginner', minutes: 25 },
  { id: 3, title: 'DOM events & fetch()', level: 'intermediate', minutes: 30 },
  { id: 4, title: 'Node HTTP basics', level: 'intermediate', minutes: 30 },
  { id: 5, title: 'React component sketch', level: 'next-step', minutes: 35 },
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === '/api/lessons') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(JSON.stringify({ ok: true, count: LESSONS.length, lessons: LESSONS }));
    return;
  }

  let filePath = url.pathname === '/' ? '/index.html' : url.pathname;
  filePath = path.normalize(filePath).replace(/^(\.\.[/\\])+/, '');
  const abs = path.join(PUBLIC, filePath);

  if (!abs.startsWith(PUBLIC)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(abs, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }
    const ext = path.extname(abs);
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Web fundamentals demo → http://localhost:${PORT}`);
  console.log(`API sample            → http://localhost:${PORT}/api/lessons`);
});
