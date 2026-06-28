import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  console.log("Requested URL:", req.url); 
  let filePath = '';

  // 1. Use === for comparison
  if (req.url === '/') {
    filePath = 'index.html';
    console.log(req.url);
  } else if (req.url === '/about') {
    filePath = 'about.html';
    console.log(req.url);
  } else if (req.url === '/contact') {
    filePath = 'contact.html';
    console.log(req.url);
  } else {
    filePath = '404.html';
    console.log(req.url);
  }

  // 2. Move readFile INSIDE the server function
  // 3. Now 'res' is accessible here
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});





