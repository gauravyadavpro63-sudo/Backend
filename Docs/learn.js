// Node.js
// --------

// • Node.js is a JavaScript runtime environment.
// • It allows JavaScript to run outside the browser.
// • It uses Google's V8 JavaScript engine.
// • It is commonly used to build backend/server-side applications.

// Browser:
// JavaScript → Browser → V8 → Output

// Node.js:
// JavaScript → Node.js → V8 → Computer/Server
// V8 compiles JavaScript into optimized machine code.

// Node.js can provide access to:
// • Files
// • HTTP/networking
// • Environment variables
// • Operating system features
// • Databases through libraries

// Important:
// Node.js ≠ backend.
// Node.js is a runtime used to build backend applications.

// Example:
// console.log("Hello from Node.js");

// Run:
// node app.js



// Frontend (React)
//       ↓
//    Request
//       ↓
// Backend (Node + Express)
//       ↓
//    Database
//       ↓
// Backend processes result
//       ↓
// Frontend gets response


// Why doesn't frontend directly access database?

// Frontend → Backend → Database

// 1. SECURITY
//    Database credentials should remain private.
//    Frontend code is visible to users.

// 2. AUTHORIZATION
//    Backend decides what a user is allowed to access/change.

// 3. BUSINESS LOGIC
//    Backend handles application rules such as:
//    • checking stock
//    • calculating prices
//    • processing orders
//    • validating users

// 4. DATA CONTROL
//    Backend can filter sensitive information before sending it
//    to the frontend.

// 5. REUSABILITY
//    Multiple frontends (web, Android, iOS) can use the same backend API.

// Analogy:
// Frontend = Customer
// Backend = Waiter
// Database = Kitchen

// The backend acts as a controlled middle layer between
// the frontend and database.

// Typical flow:
// React → HTTP Request → Node/Express → Database
// Database → Node/Express → HTTP Response → React



// Why did JavaScript move to the backend?

// Originally:
// JavaScript → Browser only

// Backend was commonly built with:
// PHP, Java, Python, Ruby, C#, etc.

// 2008:
// Google Chrome introduced the V8 JavaScript engine.
// V8 made JavaScript execution very fast.

// 2009:
// Ryan Dahl created Node.js using Google's V8 engine.

// Node.js allowed JavaScript to run outside the browser,
// including on servers.

// Main advantages:

// 1. Same language on frontend and backend
//    Frontend → JavaScript
//    Backend  → JavaScript

// 2. Fast JavaScript execution through V8.

// 3. Asynchronous/non-blocking I/O makes Node.js well suited
//    for network and I/O-heavy applications.

// 4. Huge npm ecosystem provides many reusable packages.

// Important:
// Node.js did NOT create JavaScript.
// It provides an environment for running JavaScript outside
// the browser.

// Timeline:
// JavaScript → V8 → Node.js → JavaScript on servers



