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



// Yep, kaneki 😎 You're studying the Node.js module system, and your notes are basically correct. Let me clean up the concepts so you understand why each thing works.

// In Node.js, there are two major module systems:

// 1. CommonJS — older style

// const { sum, sub } = require("./second.js");


// sum(4, 4);
// sub(4, 4);

// And in second.js:

// function sum(a, b) {
//   return a + b;
// }


// function sub(a, b) {
//   return a - b;
// }


// module.exports = { sum, sub };

// Here:

// require("./second.js")

// means:

// "Load the code exported by second.js into this file."

// Node.js wraps each CommonJS module in a function internally. That's why you may hear about the IIFE-like wrapper. More precisely, 
// Node wraps it in a module function so variables inside one file don't automatically become global.

// 2. ES Modules — modern import/export

// second.mjs:

// export function sum(a, b) {
//   return a + b;
// }


// export function sub(a, b) {
//   return a - b;
// }

// first.mjs:

// import { sum, sub } from "./second.mjs";


// console.log(sum(4, 4));
// console.log(sub(4, 4));

// The .mjs extension tells Node:

// "Treat this file as an ES Module."

// But there's an easier way 👀

// You don't need .mjs.

// You can use normal .js files and tell Node that your project uses ES Modules.

// Create:

// {
//   "type": "module"
// }

// inside package.json.

// Then:

// project/
// ├── package.json
// ├── first.js
// └── second.js

// second.js:

// export function sum(a, b) {
//   return a + b;
// }

// first.js:

// import { sum } from "./second.js";


// console.log(sum(3, 8));

// Now you're using the modern ES Module system.





                      //Lecture 2


// | CJS (CommonJS)                                  | ESM (ES Modules)                                    |
// | ----------------------------------------------- | --------------------------------------------------- |
// | Older Node.js module system                     | Modern JavaScript module system                     |
// | Uses `require()`                                | Uses `import`                                       |
// | Uses `module.exports`                           | Uses `export`                                       |
// | Example: `const x = require("./x")`             | Example: `import x from "./x.js"`                   |
// | Not automatically strict mode                   | Automatically strict mode                           |
// | Common in older Node.js projects                | Common in modern Node.js, React, Next.js            |
// | `.js` commonly works by default                 | `.mjs` or `.js` with `"type": "module"`             |
// | `require()` can generally be used conditionally | `import` statements are normally statically defined |
    //  non strict mode                                         strict mode


    // when we export file from folder but there is multiple file then according to rule of node js it will take index.js file



//     Single processor

// A single-processor system means the computer has one CPU/processor available for executing tasks.
//  but it can do multiple tasks using context-switching, so task are running concurrently not parlarly

// What is a dual-core processor?

// A dual-core CPU has two processing cores inside one physical processor.
// now for 2 task it will run in parallism for more task again contest switching

// What is an Octa-core processor?

// Octa = 8, so an octa-core processor has 8 CPU cores.



// When a program runs, it needs RAM. The OS has to decide how to put programs into RAM efficiently. That's where paging and fragmentation come in.

// First: What is fragmentation?

// Fragmentation = memory gets wasted because of the way memory is allocated.

// There are two major types:

// Type	Meaning
// Internal fragmentation	Wasted space inside an allocated block
// External fragmentation	Free memory exists, but it's scattered into small gaps
// External fragmentation

// Imagine RAM like this:

// RAM
// ┌──────┬──────┬──────┬──────┬──────┐
// │  A   │ FREE │  B   │ FREE │  C   │
// └──────┴──────┴──────┴──────┴──────┘

// Suppose we have:

// FREE = 2 MB
// FREE = 3 MB

// Total free memory:

// 2 + 3 = 5 MB

// But suppose a program needs 4 MB of continuous memory.

// It might not fit because the free memory is split into separate pieces.

// That's external fragmentation.

// Internal fragmentation

// Suppose the OS gives a process a 10 MB block, but the process only needs 8 MB.

// ┌────────────────────┐
// │    Process = 8 MB  │
// ├────────────────────┤
// │   Wasted = 2 MB    │
// └────────────────────┘

// That unused 2 MB is inside the allocated block.

// That's internal fragmentation.

// Now: What is paging?

// Paging is a memory-management technique that helps avoid external fragmentation.

// The basic idea is:

// Instead of requiring a process to occupy one continuous area of RAM, divide it into small fixed-size pieces.

// These pieces are called:

// Process → Pages

// RAM → Frames

// For example:

// Process
// ┌──────┬──────┬──────┬──────┐
// │Page 0│Page 1│Page 2│Page 3│
// └──────┴──────┴──────┴──────┘

// RAM:

// ┌──────┬──────┬──────┬──────┬──────┬──────┐
// │Frame0│Frame1│Frame2│Frame3│Frame4│Frame5│
// └──────┴──────┴──────┴──────┴──────┴──────┘

// The pages don't have to be next to each other.

// For example:

// Page 0 → Frame 3
// Page 1 → Frame 0
// Page 2 → Frame 5
// Page 3 → Frame 2

// A page table keeps track of this mapping.

// Page Table


// Page 0 → Frame 3
// Page 1 → Frame 0
// Page 2 → Frame 5
// Page 3 → Frame 2

// So the process looks like it has continuous memory, while physically its pages can be scattered throughout RAM.

// Why does paging help?

// Without paging:

// Process needs 4 MB continuous space


// RAM:
// [2 MB free][Process][3 MB free]


// Total free = 5 MB
// But no single 4 MB block ❌

// With paging:

// Process:
// [Page][Page][Page][Page]


// RAM:
// [Frame][A][Frame][B][Frame][Frame]
//         ↑       ↑       ↑
//        Page    Page    Page

// The pages can occupy different frames.

// So external fragmentation is largely eliminated.

// But paging can cause internal fragmentation

// Suppose the page size is 4 KB.

// A program needs:

// 10 KB

// It needs 3 pages:

// Page 1 = 4 KB
// Page 2 = 4 KB
// Page 3 = 2 KB used + 2 KB unused

// So:

// Total allocated = 12 KB
// Actual needed   = 10 KB
// Wasted          = 2 KB

// That's internal fragmentation.


// Sure, kaneki 😎 Let's keep it simple first, then connect it to the CPU concepts you were asking about.

// Thread

// A thread is the smallest unit of execution within a process.

// Think of a process as a program, and a thread as a worker executing that program's instructions.

// For example:

// Chrome (Process)
//    │
//    ├── Thread 1
//    ├── Thread 2
//    └── Thread 3

// The threads belong to the same process and can share resources such as memory.

// Single-threaded

// A program is single-threaded when it has one main thread executing its work.

// Process
//    │
//    └── Thread 1

// JavaScript is commonly described as single-threaded because its main JavaScript execution happens on one main thread.

// Multithreaded

// A program is multithreaded when it uses multiple threads to perform work.

// Process
//    │
//    ├── Thread 1 → Task A
//    ├── Thread 2 → Task B
//    ├── Thread 3 → Task C
//    └── Thread 4 → Task D

// If the machine has multiple CPU cores, multiple threads can potentially execute in parallel.

// Difference
// Single-threaded	Multithreaded
// One main thread	Multiple threads
// One execution path at a time	Multiple execution paths
// Simpler to manage	More complex
// JavaScript's main execution model	Used by many server/applications
// Can use async techniques to avoid waiting	Can perform work concurrently/parallel
// Don't confuse these 👀
// CPU Core       → Hardware
// Thread         → Execution unit
// Process        → Running program
// Single-thread  → One main execution thread
// Multithread    → Multiple execution threads

// And this is the important connection to what we discussed earlier:

// JavaScript is single-threaded, but Node.js itself can use multiple threads internally for certain operations. That's why saying “Node.js can never use multiple threads” would be incorrect.


