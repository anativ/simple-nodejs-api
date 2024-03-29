const http = require('http');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3001; // Heroku will set the PORT environment variable
console.log('port', port);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
