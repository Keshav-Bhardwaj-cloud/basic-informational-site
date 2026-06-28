# Basic Node.js Informational Site

A simple informational website built with Node.js using the built-in HTTP and File System modules.

## 📌 About

This project was built as part of The Odin Project's Node.js curriculum.

The goal was to understand how a web server works before learning Express.

Instead of using a framework, the server is built using Node's core modules.

## ✨ Features

- Serves multiple HTML pages
- Home page
- About page
- Contact page
- Custom 404 page
- Basic URL routing
- Reads HTML files using the File System module

## 🛠 Technologies Used

- Node.js
- HTTP Module
- File System (`fs`)
- HTML

## 📂 Project Structure

```
project/
│
├── index.js
├── index.html
├── about.html
├── contact.html
├── 404.html
├── package.json
└── README.md
```

## 🚀 How to Run

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate into the project

```bash
cd <project-folder>
```

### Start the server

```bash
node index.js
```

### Open in your browser

```
http://localhost:3000
```

## 📚 What I Learned

While building this project, I learned:

- How Node.js creates an HTTP server
- How browsers communicate with servers
- How routing works using `req.url`
- How to serve different HTML files
- How to use the File System module (`fs`)
- How to return custom 404 pages
- Basic debugging of Node.js applications

## 🎯 Future Improvements

- Replace manual routing with Express.js
- Add CSS styling
- Serve static assets (CSS and images)
- Improve error handling
