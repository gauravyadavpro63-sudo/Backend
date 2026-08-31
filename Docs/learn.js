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


    // libeuv


//     Yep, Kaneki 😄 — libuv is a very important piece underneath Node.js.
//  Once you understand it, Node's “asynchronous” behavior makes WAY more sense.

// libuv is a C library that Node.js uses to handle asynchronous I/O and the event loop.

// In simple words:

// libuv helps Node.js do things without blocking the main JavaScript thread.


// Why didn't Node wait for readFile() to finish?

// Because Node.js hands the I/O work to its underlying system mechanisms, with libuv playing a major role in coordinating asynchronous operations, and JavaScript can continue executing.

// Think of the architecture roughly like:

//         Your JavaScript
//               ↓
//            Node.js
//               ↓
//             libuv
//               ↓
//      Operating System
//               ↓
//        File / Network / etc.
// What does libuv actually handle?

// Some major things are:

// 🔄 Event loop
// 📁 File-system operations
// 🌐 Network I/O
// ⏱️ Timers
// 🧵 Thread pool for certain operations
// ⚙️ Other OS-level asynchronous operations



// if js is running in browser then all these things is handles by browser itself


// ECMA script


// CMAScript (ES) is the standard/specification that defines how JavaScript should work.

// Think of it like a rulebook.

// ECMAScript
//    ↓
// Defines the language rules
//    ↓
// JavaScript engines implement those rules
//    ↓
// Chrome / Firefox / Node.js / etc.
// So what's the difference between JavaScript and ECMAScript?

// A simple way to remember it:

// ECMAScript is the specification; JavaScript is an implementation/language based on that specification.

// For example, ECMAScript specifies things like:

// let
// const
// var


// function
// class


// Promise
// Map
// Set


// async / await


// modules

// It describes how these features should behave.

// Then JavaScript engines implement those rules.

// For example:

// Environment	JavaScript engine
// Chrome	V8
// Edge	V8
// Firefox	SpiderMonkey
// Safari	JavaScriptCore
// Node.js	V8


// Yep 😄 you're looking at Node.js's fs.readFile().

// fs.readFile("/data.json", "utf-8", (err, resp) => {
    
// });

// Let's break it down:

// fs = File System module in Node.js.

// fs.readFile(...)

// means:

// "Node.js, please read this file from the computer."

// The arguments are:

// fs.readFile(
//     "/data.json",      // 1. file path
//     "utf-8",           // 2. encoding
//     (err, resp) => {}  // 3. callback
// );

// The callback receives two things:

// (err, resp)

// err → contains an error if something went wrong.

// resp → contains the file's contents if reading succeeded.

// For example:

// const fs = require("fs");


// fs.readFile("data.json", "utf-8", (err, resp) => {
//     if (err) {
//         console.log(err);
//         return;
//     }


//     console.log(resp);
// });

// If data.json contains:

// {
//   "name": "Kaneki"
// }

// then:

// resp

// will contain that data as a string:

// '{ "name": "Kaneki" }'

// And here's where this connects directly to your previous question about libuv:

// fs.readFile()
//      ↓
// Node.js
//      ↓
// libuv / OS filesystem handling
//      ↓
// File is read
//      ↓
// callback gets executed
//      ↓
// (err, resp)

// So fs.readFile() is a classic example of asynchronous I/O in Node.js.
//  It doesn't make JavaScript sit there waiting for the file to finish reading. 🔥




// Absolutely, Kaneki 😄. This is one of those things that becomes really
//  easy once you understand what the callback actually is.

// Look at your code:

// fs.readFile("data.json", "utf-8", (err, resp) => {
//     console.log(resp);
// });

// The important thing is:

// (err, resp) => {
//     console.log(resp);
// }

// This is simply a function.

// You're passing that function to readFile().

// Think of it like this

// You could write:

// function done(err, resp) {
//     console.log(resp);
// }


// fs.readFile("data.json", "utf-8", done);

// That's exactly the same basic idea.

// You're saying:

// "Hey readFile, go read this file. When you're finished, call this function."

// That's why it's called a callback.

// What happens internally?

// Imagine:

// fs.readFile("data.json", "utf-8", callback);

// Node starts the file operation.

// JavaScript
//     ↓
// fs.readFile()
//     ↓
// "Okay, I'll read this file."
//     ↓
// JavaScript continues doing other work

// When the file has been read:

// File reading finished
//         ↓
// Node gets the result
//         ↓
// Node calls your callback
//         ↓
// callback(err, resp)

// So this:

// (err, resp) => {
//     console.log(resp);
// }

// doesn't execute immediately when you pass it.

// It gets called later.



// how to create server


// Yep, Kaneki 😎 Let's nail client vs server first. This is the foundation of backend.

// Think of it like this:

//              INTERNET
//                 │
//         ┌───────┴────────┐
//         ↓                ↓
//      CLIENT           SERVER
//    (your browser)   (another computer)
// 🧑‍💻 Client

// The client is the device/software that requests something from a server.

// For web development, your browser is usually the client.

// For example, when you open:

// youtube.com

// your browser says:

// "Server, give me YouTube's webpage."

// Or when React does:

// fetch("/api/products")

// the browser is acting as the client and requesting products.

// Other examples of clients:

// Chrome
// Firefox
// Mobile apps
// React frontend
// Postman
// Another backend server
// 🖥️ Server

// A server is a computer/program that waits for requests and responds to them.

// For example:

// Client
//   |
//   | "Give me users"
//   ↓
// Server
//   |
//   | talks to database
//   ↓
// Database
//   |
//   | users
//   ↓
// Server
//   |
//   | sends users
//   ↓
// Client

// A Node.js backend could be the server.

// For example:

// app.get("/users", (req, res) => {
//     res.json([
//         { name: "Mio" },
//         { name: "Alex" }
//     ]);
// });

// When the client requests:

// GET /users

// the server executes that code and sends the response.

// 🔥 The key difference

// Don't think:

// Client = frontend
// Server = backend

// That's usually true in our web-development context, but the deeper definition is:

// Client = requester

// Server = provider/respondent

// For example:

// React ───────→ Node.js
// client          server
//                  │
//                  ↓
//               MongoDB

// And here's a cool thing: your laptop can be both a client and a server.

// When you're developing:

// Browser
//    ↓
// localhost:5173
//    ↓
// Vite server

// Your browser is the client, while Vite is acting as a server.

// Later, when you run:

// localhost:3000

// with Node/Express, your Node process becomes the server.

// So next we should understand what exactly happens when the
//  client sends a request to the server — that's where HTTP comes in. 🚀





// IP address and port number


// Yep, Kaneki 😄 Let’s make this super clear because IP address + port number is one of those networking basics that becomes really important for backend.

// Think of a computer/server like a building:

// IP address = building's address
// Port number = specific room/door inside that building

// For example:

// 192.168.1.10:3000

// Here:

// 192.168.1.10 → IP address
// 3000 → Port number
// 🏠 IP address

// An IP address identifies a device on a network.

// Example:

// 192.168.1.10

// It tells the network roughly:

// "Send this data to this particular machine."

// Your laptop, phone, server, etc. can have an IP address.

// 🚪 Port number

// A single computer can run many applications/services at the same time.

// For example:

// Computer
// │
// ├── Port 80    → HTTP server
// ├── Port 443   → HTTPS server
// ├── Port 3000  → React/Node application
// ├── Port 5432  → PostgreSQL
// └── Port 22    → SSH

// The port tells the computer:

// "Which application should receive this data?"

// So:

// 192.168.1.10:3000

// means:

// Go to computer 192.168.1.10, then deliver
//  the request to whatever application is listening on port 3000.

// 🌐 When you run a backend

// Suppose you create an Express server:

// app.listen(3000);

// Your server is listening on:

// localhost:3000

// localhost usually means your own computer.

// So when you open:

// http://localhost:3000

// the request goes:

// Browser
//    ↓
// localhost (your computer)
//    ↓
// Port 3000
//    ↓
// Your Node/Express server

// And this is why you'll see things like:

// http://localhost:5173

// for Vite, and commonly:

// http://localhost:3000

// for a Node/Express backend.

// One important distinction: IP address identifies 
// the machine; port identifies the service/application on that machine. 🔥




// TTP and HTTPS are protocols used for communication between a client and a server.

// Think of it like this:

// Browser (Client)
//       ↓
//    HTTP/HTTPS
//       ↓
// Server
// HTTP

// HTTP = HyperText Transfer Protocol

// It's a set of rules that says how the browser and server communicate.

// For example, when you visit:

// http://example.com

// your browser sends an HTTP request to the server:

// "Hey server, give me the webpage."

// The server sends back an HTTP response:

// "Sure, here is the webpage."

// So:

// Client ─── HTTP Request ───→ Server
// Client ←── HTTP Response ─── Server
// HTTPS

// HTTPS = HTTP Secure

// It's basically HTTP with encryption using TLS.

// With normal HTTP, someone who can observe the network traffic may be able to read the data.

// With HTTPS:

// Browser
//    ↓
// 🔐 Encrypted communication
//    ↓
// Server

// The data is encrypted while traveling between the client and server.

// That's why websites handling things like passwords, payments, and personal information use HTTPS.

// HTTP vs HTTPS
// HTTP	HTTPS
// Not encrypted	Encrypted
// Less secure	Much more secure
// http://	https://
// Usually port 80	Usually port 443

// So when you see:

// https://google.com

// you can think:

// HTTPS
//   ↓
// Secure communication
//   ↓
// Google's server

// And connecting this to what we just learned:

// https://example.com:443
//         │          │
//         │          └── Port
//         └───────────── Domain → IP address

// The browser ultimately needs an IP address + 
// port, while HTTP/HTTPS defines how the conversation happens.

// And one tiny but important correction to keep in your
//  head: HTTPS doesn't mean the website itself is trustworthy. It means the connection is encrypted/authenticated with TLS. 🔐



// Ahhh 😄 you mean “why does HTTPS have a port?”

// Because HTTPS is a network service, and the computer needs to know which port to use to reach that service.

// Imagine your server is a building:

// Server IP
//    │
//    ├── 🚪 Port 22  → SSH
//    ├── 🚪 Port 80  → HTTP
//    ├── 🚪 Port 443 → HTTPS
//    └── 🚪 Port 5432 → PostgreSQL

// When you type:

// https://example.com

// the browser knows:

// "This is HTTPS, so I'll connect to port 443 by default."

// So it's effectively:

// https://example.com:443
//                   ↑
//                 port

// You normally don't see :443 because 443 is the standard/default port for HTTPS.

// Similarly:

// http://example.com

// means:

// http://example.com:80
//                   ↑
//                 port

// because 80 is the standard port for HTTP.

// Why does it need a port at all?

// Because one server can run MANY services.

// For example:

//               SERVER
//                 │
//         ┌───────┼────────┐
//         ↓       ↓        ↓
//       :80     :443     :22
//        │        │        │
//       HTTP    HTTPS     SSH

// The IP address finds the computer, while the port finds the service on that computer.

// So the important chain is:

// Domain → IP → Port → Service

// And then HTTP/HTTPS defines the communication rules with that service. 🔥



// Yep, Kaneki 😄 WebSocket is a really important concept once you understand HTTP.

// The easiest way to understand it is by comparing it with normal HTTP.

// HTTP: request → response

// With normal HTTP, the client usually asks the server for something:

// Browser ──── Request ────→ Server
// Browser ←─── Response ──── Server

// For example:

// GET /messages

// Server:

// Here are your messages.

// The connection doesn't stay around just so the server can randomly send you new data.

// WebSocket: continuous connection 🔄

// WebSocket creates a persistent, two-way connection between the client and server.

// Browser ═══════════════════ Server
//           WebSocket

// Now both sides can send data whenever they need to:

// Browser ─────────→ Server
// Browser ←───────── Server
// Browser ─────────→ Server
// Browser ←───────── Server

// The server doesn't have to wait for the browser to ask again.

// WebSocket: continuous connection 🔄

// WebSocket creates a persistent, two-way connection between the client and server.

// Browser ═══════════════════ Server
//           WebSocket

// Now both sides can send data whenever they need to:

// Browser ─────────→ Server
// Browser ←───────── Server
// Browser ─────────→ Server
// Browser ←───────── Server

// The server doesn't have to wait for the browser to ask again.

// Real-world example: chat app

// Imagine you're chatting with someone.

// With ordinary HTTP, the browser might repeatedly ask:

// Browser → "Any new messages?"
// Server  → "No."


// Browser → "Any new messages?"
// Server  → "No."


// Browser → "Any new messages?"
// Server  → "YES! Here's a message."

// That's inefficient.

// With WebSocket:

// Browser ═══════════════ Server
//           connection
//              │
//              │
//              ← "New message!"
//              │
//              → "Okay!"
//              │
//              ← "Another message!"

// The server can immediately push information to the browser. ⚡

// Where is WebSocket useful?

// Things that need real-time communication, such as:

// 💬 Chat applications
// 🎮 Multiplayer games



// Socket = communication endpoint

// HTTP = communication protocol

// WebSocket = persistent two-way communication protocol 🔥


// Yep, Kaneki 😄❤️ Your code is correct. You've just created your first basic Node.js HTTP server.

// const http = require("http");


// const server = http.createServer((req, res) => {
//     res.end("Heelo coder army");
// });


// server.listen(400, () => {
//     console.log("i am listeninng at port 400");
// });

// Here's exactly what's happening:

// const http = require("http");

// You're importing Node's built-in HTTP module. You don't need to install it with npm.

// Then:

// const server = http.createServer((req, res) => {

// createServer() creates an HTTP server.

// Whenever someone sends a request to your server, this callback runs:

// (req, res) => { ... }
// req = request coming from the client
// res = response you're going to send to the client

// Then:

// res.end("Heelo coder army");

// You're saying:

// Send "Heelo coder army" to the client and finish the response.

// Finally:

// server.listen(400, () => {

// This tells Node:

// Start listening for incoming connections on port 400.

// So your browser can access:

// http://localhost:400

// And the flow is:

// Browser
//    │
//    │ HTTP Request
//    ↓
// localhost:400
//    │
//    ↓
// Node HTTP Server
//    │
//    ↓
// (req, res) => { ... }
//    │
//    ↓
// res.end("Heelo coder army")
//    │
//    ↓
// Browser displays:
// Heelo coder army

// And this callback:

// () => {
//     console.log("i am listeninng at port 400");
// }

// runs once the server successfully starts listening.

// One tiny thing: 400 works perfectly, but developers commonly use ports like 3000,
// 4000, 5000, 8080, etc. So you could use:

// server.listen(4000, () => {
//     console.log("Server listening on port 4000");
// });

// Also, your "Heelo" and "listeninng" are just spelling mistakes in the displayed text/log — they don't affect how the server works. 😄

// You're at the exact point where you can start understanding request → response → routes 
// → methods → headers → status codes. That's the fun backend stuff. 🚀



// Yep Kaneki 😄 — you mean Monolithic vs Microservices architecture.

// Think of it as one big application vs many small applications.

// 🏢 Monolithic Architecture

// Everything is built as one application.

// For example, an e-commerce app:

//              E-Commerce App
//         ┌─────────────────────┐
//         │  User/Auth          │
//         │  Products           │
//         │  Orders             │
//         │  Payments           │
//         │  Notifications      │
//         └─────────────────────┘
//                   │
//                Database

// The frontend/backend modules may be logically separated in code, but they 
// are deployed as one unit.

// If you change the payment module, you generally rebuild/redeploy the whole application.

// Advantages:

// Easier to build initially
// Easier to debug
// Simple deployment
// Good for small/medium projects

// Disadvantages:

// Codebase can become huge
// One problematic component can affect the whole application
// Scaling only one feature is difficult
// Large teams can step on each other's work
// 🧩 Microservices Architecture

// The application is divided into independent services.

//        E-Commerce System


//  ┌──────────┐   ┌──────────┐
//  │ User     │   │ Product  │
//  │ Service  │   │ Service  │
//  └──────────┘   └──────────┘
//        │              │
//        └──────┬───────┘
//               │
//         ┌──────────┐
//         │ API      │
//         │ Gateway  │
//         └──────────┘
//               │
//      ┌────────┼─────────┐
//      ↓        ↓         ↓
//  ┌────────┐ ┌────────┐ ┌────────────┐
//  │ Order  │ │Payment │ │Notification│
//  │Service │ │Service │ │Service     │
//  └────────┘ └────────┘ └────────────┘

// Each service is basically a separate application responsible for one business
//  capability.

// For example:

// User Service → users/authentication
// Product Service → products
// Order Service → orders
// Payment Service → payments
// Notification Service → emails/SMS/etc.

// They communicate through APIs or messaging systems.

// 🔥 Main difference
// Monolithic	Microservices
// One application	Many independent services
// Usually one deployment	Services can deploy independently
// Simpler	More complex
// Easier initially	Harder initially
// Scaling entire app is common	Scale individual services
// Usually one main codebase	Multiple codebases/services
// Good for smaller systems	Useful for large/complex systems
// Easy example

// Imagine a restaurant 🍔.

// Monolithic:
// One chef does everything — burgers, pizza, drinks, desserts.

// Microservices:
// One chef handles burgers, another handles pizza, another handles desserts.
//  They work independently but together produce the complete order.

// And one important thing: microservices aren't automatically better. 😄

// For a small MERN project, building 10 microservices would probably just give you
//  10 problems instead of one. Start monolithic, understand the fundamentals, and use 
//  microservices when the system actually benefits from that
//   separation.


// CRUD stands for Create, Read, Update, Delete — the four basic operations you perform on data in an application.

// Think of a users table:

// Operation	Meaning	Example
// Create	Add new data	Register a new user
// Read	Get existing data	Show user profile
// Update	Modify data	Change user's name
// Delete	Remove data	Delete user account

// In a REST API, CRUD commonly maps like this:

// CREATE  → POST
// READ    → GET
// UPDATE  → PUT / PATCH     {patch: when update single field  put: when update all field}
// DELETE  → DELETE

// For example, with /users:

// POST   /users       → Create a user
// GET    /users       → Get all users
// GET    /users/123   → Get user 123
// PUT    /users/123   → Update user 123
// DELETE /users/123   → Delete user 123

// A simple flow in a web app is:

// React frontend
//       ↓
// API request
//       ↓
// Backend
//       ↓
// Database

// Example: when you submit a registration form:

// Form → POST /users → Backend → Database
//                               ↓
//                          User created

// And when you open the users page:

// Frontend → GET /users → Backend → Database
//                                   ↓
//                               User data
//                                   ↓
// Frontend ← JSON response

// So basically, CRUD = everything you normally need to manage stored data. 
// It's a fundamental concept for MERN/Next.js backend development. 🚀


// Bro, Express.js is a backend framework for Node.js. Think of it as a tool 
// that makes building APIs and web servers with
//  Node much easier.

// Without Express, Node.js can handle HTTP requests using its built-in http module,
// but the code gets messy pretty quickly.


// Nodemon is a development tool for Node.js that automatically restarts your server whenever you change your code. 🔥


// Postman is a tool developers use to test APIs/backend servers without needing to build a frontend first. 😎

// Yep, Kaneki 😎 let's break this down piece by piece.

// app.get("/", (req, res) => {
//     res.send({ name: "rohit" });
// });

// This is creating a GET API route in Express.

// 1. app.get()
// app.get(...)

// You're telling Express:

// "When someone sends a GET request, check this route."

// 2. "/"
// app.get("/")

// "/" means the root route.

// If your server is running on:

// http://localhost:3000

// then / means:

// http://localhost:3000/

// So when you visit that URL, this route runs.

// 3. (req, res)

// These are objects provided by Express.

// (req, res) => {

// req = request

// It contains information about what the client sent to your server.

// For example:

// req.params
// req.query
// req.body
// req.headers

// res = response

// You use it to send something back.

// res.send(...)
// 4. res.send({name:"rohit"})

// You're sending this object back:

// {
//     name: "rohit"
// }

// Because you're sending an object, Express will send it as a JSON response.

// So if you make a GET request to:

// GET http://localhost:3000/

// the server responds with:

// {
//   "name": "rohit"
// }
// The whole flow 🧠
// GET /
//   ↓
// Express finds app.get("/")
//   ↓
// (req, res) function executes
//   ↓
// res.send({name:"rohit"})
//   ↓
// Server sends JSON response

// And importantly, there is no database involved here. You're simply hard-coding an object and returning it.

// You can think of this as your first tiny API:

// GET /  →  { "name": "rohit" }

// That's basically the foundation of what you'll build into much bigger backend APIs later. 🚀



// Exactly, kaneki 😄 — Postman is basically pretending to be the frontend/client when you're testing a backend API.

// Think of the normal flow:

// Frontend → Backend → Database

// For example, your React frontend might do:

// fetch("http://localhost:4000/users", {
//   method: "POST",
//   body: JSON.stringify({
//     name: "Kaneki",
//     age: 20
//   })
// });

// But while the frontend isn't ready, you can use Postman:

// Postman → Backend → Database

// You manually send the same HTTP request from Postman:

// POST http://localhost:4000/users

// {
//   "name": "Kaneki",
//   "age": 20
// }

// The backend doesn't really care whether the request came from React, Postman, a mobile app, or another server.
//  It receives an HTTP request and processes it.

// So Postman is useful for:

// Testing GET, POST, PUT, PATCH, DELETE
// Sending JSON/body data
// Testing authentication headers/tokens
// Checking backend responses
// Finding backend bugs before connecting the frontend

// A really useful way to think about it:

// Postman is a manual frontend/client simulator for API testing.

// Once your backend works perfectly in Postman, your frontend's job is largely to send those same requests programmatically. 🔥


// If you're talking about a frontend POST and a backend POST route, they're usually two sides of the same request:

// Frontend
//    |
//    | POST /users
//    | { name: "Kaneki" }
//    ↓
// Backend
//    |
//    | app.post("/users", ...)
//    ↓
// Database
//    |
//    | save data
//    ↓
// Backend sends response
//    ↓
// Frontend

// For example, frontend sends:

// fetch("http://localhost:4000/users", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "Kaneki"
//     })
// });

// Backend receives it:

// app.post("/users", (req, res) => {
//     console.log(req.body);

//     // save req.body to database

//     res.send("User saved");
// });

// So POST itself does not automatically mean "save data."

// POST means roughly:

// "I'm sending data to the server for the server to process."

// Very often, that processing is creating/saving something in a database, which is why you'll commonly see POST used for creating data.



JSON and JavaScript objects look similar, but they are not the same.

// Feature	                           JSON	                      JavaScript Object
// Format                 	Data interchange format    	      JavaScript data structure
// Keys	             Must be in double quotes	           Quotes are optional for valid identifiers
// Strings	              Must use double quotes	        Can use single quotes, double quotes, or template literals
// Comments	              Not allowed	               Allowed in JavaScript code
// Functions	            Not allowed	                  Allowed
// undefined	               Not allowed	                Allowed
// Trailing commas	                 Not allowed	        Allowed (in modern JavaScript)
// Date, RegExp, Map, Set	      Not supported	                Supported as JavaScript objec


// Yep, Kaneki 😄 — think of JSON as a box used to carry data between different parts of an application.

// For example, imagine your frontend sends a login request.

// FRONTEND
//    ↓
// JavaScript Object
//    ↓ JSON.stringify()
// JSON
//    ↓
// HTTP Request
//    ↓
// BACKEND
//    ↓ JSON.parse()
// JavaScript Object

// Let's see it step by step.

// 1. Frontend has a JavaScript object
// const user = {
//   name: "Kaneki",
//   age: 20
// };

// This is a JS object, not JSON.

// 2. Convert object → JSON

// When sending it through an API, you commonly convert it:

// const jsonData = JSON.stringify(user);

// Now:

// JS Object
// {
//    name: "Kaneki",
//    age: 20
// }

//         ↓ JSON.stringify()

// JSON
// {
//    "name": "Kaneki",
//    "age": 20
// }

// Technically, jsonData is a string containing JSON, which is important.

// 3. Send JSON through HTTP

// For example:

// fetch("/api/user", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(user)
// });

// The data travels roughly like:

// Browser
//    │
//    │ HTTP POST
//    │
//    │ {"name":"Kaneki","age":20}
//    ↓
// Backend Server
// 4. Backend receives the JSON

// Express can parse the incoming JSON:

// app.use(express.json());

// Then:

// app.post("/api/user", (req, res) => {
//     console.log(req.body);
// });

// req.body becomes a JavaScript object:

// {
//   name: "Kaneki",
//   age: 20
// }

// So conceptually:

//              INTERNET
//                 │
//                 │
// Frontend        │        Backend
//                 │
// JS Object       │
//    ↓            │
// JSON.stringify  │
//    ↓            │
// JSON string ───────────→ JSON
//                           ↓
//                     JSON.parse()
//                           ↓
//                      JS Object

// And when the backend sends data back:

// Backend JS Object
//        ↓
// JSON
//        ↓
// HTTP Response
//        ↓
// Frontend
//        ↓
// JSON.parse()
//        ↓
// Frontend JS Object

// One BIG thing to remember:

// JSON isn't really the database or the "place" where data lives. It's mainly a format for representing and transferring data.



// Yep Kaneki 😄 — this is one of the most important Express concepts. The easiest way to understand it is:

// app.get() = “When someone sends a GET request to this specific route, do this.”

// app.use() = “For every request that matches this path, run this middleware.”

// Let's go deep.

// 1. app.get()
// app.get("/book", (req, res) => {
//     res.send("Books");
// });

// This means:

// HTTP method = GET
// Route       = /book

// So:

// GET /book

// ➡️ callback runs.

// But:

// POST /book

// ❌ This app.get() does not handle it.

// And:

// GET /books

// ❌ Doesn't match /book.

// So app.get() is specifically about a GET request + a route.

// 2. app.use()

// Now:

// app.use("/book", (req, res) => {
//     res.send("Book middleware");
// });

// app.use() is middleware.

// It doesn't care only about GET.

// For example:

// GET  /book
// POST /book
// PUT  /book
// DELETE /book

// All can enter this middleware.

// Also, path matching is generally prefix-based.

// So:

// /book
// /book/123
// /book/hello
// /book/123/reviews

// can all match:

// app.use("/book", ...)

// That's a HUGE difference.

// The easiest comparison

// Imagine your server receives:

// GET /book/123

// With:

// app.get("/book", handler);

// ❌ Doesn't match /book/123.

// But:

// app.use("/book", handler);

// ✅ Matches because /book is the beginning of /book/123.

// Why do we use app.use()?

// Mostly for middleware and mounting routers.

// For example:

// app.use(express.json());

// This means:

// For incoming requests, use the JSON-parsing middleware.

// Or:

// app.use("/book", bookRouter);

// This is extremely common.

// Suppose bookRouter contains:

// bookRouter.get("/", (req, res) => {
//     res.send("All books");
// });

// bookRouter.get("/:id", (req, res) => {
//     res.send("One book");
// });

// Then:

// app.use("/book", bookRouter);

// combines the paths.

// So:

// /book + /

// becomes:

// /book

// and:

// /book + /:id

// becomes:

// /book/:id

// That's why you'll see this pattern everywhere in Express.

// One more important difference: next()

// Middleware usually looks like:

// app.use((req, res, next) => {
//     console.log("Request came");

//     next();
// });

// next() means:

// “I'm done. Continue to the next middleware/route.”

// For example:

// app.use((req, res, next) => {
//     console.log("Middleware 1");
//     next();
// });

// app.get("/book", (req, res) => {
//     console.log("Route");
//     res.send("Books");
// });

// Request:

// GET /book

// Flow:

// Request
//    ↓
// app.use()
//    ↓
// next()
//    ↓
// app.get("/book")
//    ↓
// Response
// Think of it like this 🧠

// app.get() is a destination:

// app.get("/book", ...)

// “When the user GETs /book, handle the request here.”

// app.use() is a checkpoint/filter:

// app.use("/book", ...)

// “Whenever a request passes through /book, let this middleware/router handle/process it.”

// So remember:

// app.get()  → specific HTTP method + route
// app.post() → specific HTTP method + route
// app.put()  → specific HTTP method + route
// app.delete() → specific HTTP method + route

// app.use()  → middleware / router / common processing
//              and usually prefix-based path matching

// And one subtle but VERY important thing: app.use() itself doesn't 
// automatically mean "send a response." It's commonly used to process 
// something and then call next(). If it sends res.send() without next(), the request 
// usually stops there.


// Chrome is the browser.
// Your React/HTML/JS application running inside Chrome is the frontend.

// So when you do:

// await fetch("http://localhost:5000/book");

// your frontend JavaScript is telling the browser:

// "Hey browser, please send an HTTP request to my backend."

// Let's break the whole thing down.

// 1. You have two separate programs

// Imagine:

// FRONTEND                         BACKEND

// React / HTML / JS                Node + Express
// running in Chrome                running on port 5000

//       ↓                                  ↑
//       |                                  |
//       └──────── HTTP request ────────────┘

// Your frontend might be running at:

// http://localhost:5173

// Your backend might be running at:

// http://localhost:5000

// They are two different servers/programs.

// 2. What does fetch() actually do?

// Suppose your React frontend has:

// const response = await fetch("http://localhost:5000/book");

// The JavaScript running in your frontend asks the browser:

// "Send a GET request to localhost:5000/book."

// The browser then actually performs the network communication.

// So the flow is:

// YOUR REACT CODE
//      |
//      | fetch()
//      ↓
// BROWSER
//      |
//      | HTTP GET /book
//      ↓
// EXPRESS BACKEND

// So yes, the browser performs the actual network request, but the frontend is the one instructing it to do so.

// 3. Why can't React just directly access Bookstore?

// This is VERY important.

// Your backend has:

// const Bookstore = [
//     { id: 1, name: "kaneki", author: "gaurav" },
//     { id: 2, name: "princess", author: "anshika" }
// ];

// Your React code cannot do:

// console.log(Bookstore);

// because Bookstore exists inside the Node.js backend process.

// You have:

// BACKEND PROCESS
// ────────────────────────
// Bookstore
// Express
// Node.js
// Port 5000

// and separately:

// FRONTEND
// ────────────────────────
// React
// JavaScript
// HTML
// CSS
// Port 5173

// They don't share variables.

// This won't work:

// // React
// console.log(Bookstore); // ❌

// because React has no idea what Bookstore is.

// So you need communication.

// That's what fetch() is for.

// 4. fetch() creates the bridge

// Your frontend:

// const response = await fetch("http://localhost:5000/book");

// creates this communication:

//                  HTTP
// FRONTEND  ─────────────────→ BACKEND
// React                         Express
//                               |
//                               ↓
//                           Bookstore
//                               |
// FRONTEND  ←───────────────────┘
//                  JSON

// The backend responds:

// res.send(Bookstore);

// The browser receives that response.

// Then your frontend can read it:

// const data = await response.json();

// console.log(data);

// Now React has a copy of the data.


// Bro, in your Express/backend context, query usually means information you send to the server through the URL to tell 
// it what you want.

// There are actually a few meanings of "query," but you're probably talking about a query parameter.

// For example:

// http://localhost:3000/book?id=5



//    middleware



// Bro, API stands for Application Programming Interface.

// But the expansion isn't nearly as important as understanding what it actually does. 😄

// In your Express learning, think of an API as a way for one program to communicate with another program.

// For example, imagine you have:

// Frontend (React)
//        ↓
//       API
//        ↓
// Backend (Express)
//        ↓
//    Database

// Your React frontend might say:

// "Give me all the books."

// It sends a request:

// GET /books

// Your Express backend has an API endpoint:

// app.get("/books", (req, res) => {
//     res.json(Bookstore);
// });

// The backend sends the data back:

// [
//   {
//     "id": 1,
//     "name": "Harry Potter",
//     "author": "J.K. Rowling"
//   }
// ]

// So the API is basically the communication interface between your frontend and backend.

// Think of it like a waiter 🍽️

// Imagine a restaurant:

// You              → Customer
// Frontend         → Customer

// Waiter            → API

// Kitchen            → Backend
// Database           → Storage

// You don't walk into the kitchen and directly grab food.

// You tell the waiter:

// "I want a burger."

// The waiter takes your request to the kitchen.

// The kitchen prepares it.

// The waiter brings it back.

// Similarly:

// React
//   ↓
// GET /books
//   ↓
// API
//   ↓
// Express
//   ↓
// Database
//   ↓
// Express
//   ↓
// JSON response
//   ↓
// React
// Your Express routes are API endpoints

// For example:

// app.get("/books", ...)
// app.post("/books", ...)
// app.patch("/books", ...)
// app.delete("/books/:id", ...)

// These can form your Book API.

// You could have:

// GET    /books       → get all books
// GET    /books/5     → get book 5
// POST   /books       → create a book
// PATCH  /books/5     → update book 5
// DELETE /books/5     → delete book 5

// And your frontend communicates with them using fetch():

// const response = await fetch("http://localhost:3000/books");

// const books = await response.json();

// So when you were asking earlier "what is frontend doing with fetch?", this is the connection:

// Frontend
//    │
//    │ fetch()
//    ▼
// API endpoint
//    │
//    ▼
// Express backend
//    │
//    ▼
// Database

// One important distinction:

// API ≠ backend.

// The backend is the whole server-side system.

// The API is the interface/endpoints that allow other programs to communicate with that backend.

// So when someone says:

// "Connect the frontend to the API"

// they basically mean:

// "Make the frontend send HTTP requests to the backend's endpoints and use the responses." 🚀



// Yes bro, in this version:

// app.use("/user", 
//     (req, res) => { 
//         res.send("hi"); 
//     }, 

//     (req, res) => { 
//         res.send("heelooo ji"); 
//     } 
// );

// Suppose you visit:

// /user

// Express runs the first handler:

// (req, res) => { 
//     res.send("hi"); 
// }

// That sends the response:

// hi

// And the request is considered finished.

// The second handler:

// (req, res) => { 
//     res.send("heelooo ji"); 
// }

// will NOT run, because the first handler never calls next().

// So the output you see is:

// hi

// There is no error in this exact code.

// The important thing is that res.send() does not automatically mean "jump to the next handler." 
// It sends the response and ends the request.

// But look what would happen here:

// (req, res, next) => {
//     res.send("hi");
//     next();
// }

// Now next() tells Express:

// "I'm done with my middleware; continue."

// So Express enters the second handler, which tries:

// res.send("heelooo ji");

// But a response has already been sent. 💥 That causes the familiar:

// Error: Cannot set headers after they are sent to the client

// So think of it like:

// res.send()
//    ↓
// "Response is finished"

// next()
//    ↓
// "Go to the next middleware"\


// app.use("/user",[r1,r2,r3,r4])    we can wrap in array two 


// Middleware is software that sits between two systems or components, acting as a bridge that handles communication, processing, 
// or common functionality before a request reaches its final destination.

// A simple way to think about it:

// Client → Middleware → Application → Database
//            ↑
//     Checks, modifies,
//     or routes requests
// Real-world analogy

// Imagine you're entering an office building:

// You = the client
// Receptionist/security desk = middleware
// Employee you're visiting = the application

// Before you reach the employee, the receptionist might:

// Check your ID (authentication)
// Verify you're allowed in (authorization)
// Log your visit (logging)
// Give you directions (routing)

// That's exactly what middleware does for software requests.

// Middleware in web development

// When a user sends a request to a web server, middleware can:

// Authenticate users
// Check permissions
// Log requests
// Validate data
// Handle errors
// Compress responses
// Add security headers
// Limit request rates (rate limiting)

// For example:

// Request
//    │
//    ▼
// Authentication Middleware
//    │
//    ▼
// Logging Middleware
//    │
//    ▼
// Validation Middleware
//    │
//    ▼
// Route Handler
//    │
//    ▼
// Response
// Example (Express.js)
// const express = require("express");
// const app = express();

// // Middleware
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next(); // Pass control to the next middleware
// });

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

// app.listen(3000);

// Here:

// A request arrives.
// The middleware logs the request.
// next() passes control to the route handler.
// The route handler sends the response.


// mw->mw->mw->request handler


// Bro, app.use() is one of the most important things to understand in Express. Let's make it crystal clear. 😄

// app.use() basically means:

// "For requests that reach this point, run this middleware."

// For example:

// app.use((req, res, next) => {
//     console.log("Middleware running");
//     next();
// });

// When a request comes in:

// Browser
//    ↓
// GET /book
//    ↓
// app.use()
//    ↓
// Middleware runs
//    ↓
// next()
//    ↓
// Next matching middleware/route
// Why is it called use()?

// Because you're telling Express:

// "Use this function in the request-processing pipeline."

// For example:

// app.use(express.json());

// means:

// "Use Express's JSON-processing middleware for incoming requests."

// Or:

// app.use((req, res, next) => {
//     console.log(req.method);
//     next();
// });

// means:

// "Use this function as middleware."

// app.use() can also have a path

// For example:

// app.use("/user", (req, res, next) => {
//     console.log("User middleware");
//     next();
// });

// Now this middleware runs for requests beginning with /user.

// So:

// /user
// /user/profile
// /user/123
// /user/settings

// can pass through that middleware.

// But:

// /book
// /product

// won't match /user.

// The BIG difference from app.get()

// Compare:

// app.use("/user", middleware);

// with:

// app.get("/user", handler);

// app.use() is generally for middleware and can match a path prefix.

// app.get() is specifically a GET route.

// Think:

// app.use()
//    ↓
// "Run this middleware when appropriate."

// app.get()
//    ↓
// "If this is a GET request to this route, handle it."

// And that's why you commonly see:

// app.use(express.json());

// app.use((req, res, next) => {
//     console.log("Request received");
//     next();
// });

// app.get("/book", (req, res) => {
//     res.send("Books");
// });

// The request flows through the middleware first, and then reaches the route. ❤️


// Admin access (administrator access) is the highest level of permission in a computer system, 
// application, network, or online service. Someone with admin access can manage the system and control what other users 
// are allowed to do.

// For example, an administrator can typically:

// Create, edit, or delete user accounts.
// Change passwords or reset user credentials.
// Install or uninstall software.
// Change system settings and security policies.
// Access files and data that regular users may not be able to see.
// Assign or remove permissions for other users.
// Configure networks, servers, or application settings.
// Example

// Imagine a company uses a shared project management tool:

// Regular user: Can view and update tasks assigned to them.
// Manager: Can create projects and assign tasks.
// Administrator (admin): Can add or remove users, change company-wide settings, manage billing, and control everyone's permissions.
// Why admin access matters

// Because admins have extensive control, it's important to:

// Grant admin access only to trusted people.
// Use strong passwords and multi-factor authentication (MFA).
// Follow the principle of least privilege, meaning users should only have the permissions they need to do their jobs.

// In short, admin access means having elevated privileges that allow you to manage and control a system beyond what a 
// standard user can do.

// Today 7:40 PM
// so website will show different ui for admin

// Yep, exactly, Kaneki 😄

// A website can show a different UI depending on whether the logged-in user is an admin or a normal user.

// For example, imagine an e-commerce website:

// Normal user sees:

// 🛍️ Products
// 🛒 Cart
// 📦 My Orders
// 👤 My Profile

// Admin sees:

// 📊 Admin Dashboard
// 📦 Manage Products
// 👥 Manage Users
// 🧾 Manage Orders
// 📈 Analytics
// ⚙️ Settings

// The important part is that admin access isn't just about showing a different UI. The backend must also check the user's permissions.

// For example:

// User logs in
//       ↓
// Backend identifies user
//       ↓
// Checks role
//       ↓
//    ┌───────────────┐
//    │               │
//  USER            ADMIN
//    ↓               ↓
// User UI        Admin UI

// In a React/Next.js application, you might have something conceptually like:

// if (user.role === "admin") {
//     return <AdminDashboard />;
// }

// return <UserDashboard />;

// But 🚨 you should not rely only on this frontend check.

// Someone could manually call an API like:

// DELETE /api/users/123

// So the backend should also check:

// Request → Backend → Is user admin?
//                        ↓
//                  Yes → allow
//                  No  → reject

// So think of it as:

// Role = who the user is
// Permission = what that role is allowed to do
// Admin UI = interface designed for those permissions

// This is probably especially relevant to the admin panel you're working toward—the admin panel is essentially a separate 
// interface for users who have 
// elevated permissions.



// An HTTP status code is a 3-digit number returned by a web server to indicate the result of an HTTP request.

// 1xx — Informational: Request received/processing.
// 2xx — Success: 200 OK, 201 Created, 204 No Content.
// 3xx — Redirection: 301 Moved Permanently, 302 Found, 304 Not Modified.
// 4xx — Client error: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests.
// 5xx — Server error: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout.

// If you give me a specific status code (for example, 404 or 502), I can explain exactly what it means and how to fix it.

// throw new Error("Something went wrong");

// Think of it as:

// "Stop what you're doing and report this error."

// For example:

// app.get("/user/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const item = foodItems.find(item => item.id === id);

//   if (!item) {
//     throw new Error("Food item not found");
//   }

//   res.send(item);
// });

// If the item isn't found:

// throw new Error("Food item not found");

// creates an Error object whose message is:

// "Food item not found"

// Then Express can pass it to your error-handling middleware:

// app.use((err, req, res, next) => {
//   console.log(err.message);

//   res.status(500).send("Something went wrong");
// });

// So the flow is:

// throw new Error("Food item not found")
//               ↓
//         Error object created
//               ↓
//          Express catches it
//               ↓
//    (err, req, res, next)
//               ↓
//        Error middleware
// throw vs return

// This is an important distinction:

// return res.send("Error");

// ➡️ Sends a response and stops the route.

// throw new Error("Error");

// ➡️ Creates an error and transfers control to error handling.

// And you can customize the error:

// const err = new Error("User not found");
// err.status = 404;

// throw err;

// Then:

// app.use((err, req, res, next) => {
//   res.status(err.status || 500).send(err.message);
// });

// So the little pattern to remember is:

// throw new Error("message") → create error → throw it → error middleware handles it. 🧠🔥


// Yep, Kaneki 😄 These two are related, but they do different jobs.

// throw new Error()

// This creates an error and throws it.

// throw new Error("User not found");

// You're basically saying:

// "Something went wrong here. Stop and send this error upward."

// Example:

// app.get("/user/:id", (req, res) => {
//   const user = users.find(u => u.id === Number(req.params.id));

//   if (!user) {
//     throw new Error("User not found");
//   }

//   res.send(user);
// });
// try...catch

// try...catch is used to handle an error.

// try {
//   // code that might fail
// } catch (err) {
//   // handle the error
// }

// Example:

// try {
//   const data = JSON.parse("hello");
// } catch (err) {
//   console.log(err.message);
// }

// Here JSON.parse() throws an error, and catch catches it.

// How they work together

// You can think of it as:

// throw
//   ↓
// "Something went wrong!"
//   ↓
// catch
//   ↓
// "I'll handle it."

// For example:

// try {
//   const user = users.find(u => u.id === 10);

//   if (!user) {
//     throw new Error("User not found");
//   }

//   console.log(user);
// } catch (err) {
//   console.log(err.message);
// }

// The throw raises the error.

// The catch handles the error.

// In Express 🚀

// You often see this pattern:

// app.get("/user/:id", (req, res, next) => {
//   try {
//     const user = users.find(
//       u => u.id === Number(req.params.id)
//     );

//     if (!user) {
//       throw new Error("User not found");
//     }

//     res.send(user);
//   } catch (err) {
//     next(err);
//   }
// });

// app.use((err, req, res, next) => {
//   res.status(500).send(err.message);
// });

// So remember:

// throw new Error() = generate/raise an error

// try...catch = catch and handle an error

// They're not alternatives exactly — you can use them together. 🧠



// Exactly, Kaneki 😄 Let's trace this code slowly because this is basically the standard Express error-handling pattern.

// Your code has two parts:

// The route
// The error-handling middleware
// 1. The route
// app.get("/user/:id", (req, res, next) => {

// The next function is important because it allows you to pass something to the next middleware.

// Suppose you request:

// /user/10

// Then:

// req.params.id

// is:

// "10"

// So:

// Number(req.params.id)

// becomes:

// 10

// Then:

// const user = users.find(
//   u => u.id === Number(req.params.id)
// );

// searches for that user.

// 2. If the user doesn't exist
// if (!user) {
//   throw new Error("User not found");
// }

// Suppose .find() returns:

// undefined

// Then !user is true.

// So:

// throw new Error("User not found");

// creates an error and throws it.

// 3. catch catches that error

// Because the throw is inside try:

// try {
//    // ...
// } catch (err) {
//    next(err);
// }

// the error goes into:

// err

// So conceptually:

// throw new Error("User not found")
//                 ↓
//               catch
//                 ↓
//         err = Error object

// Now:

// next(err);

// means:

// "Express, I have an error. Pass it to the error-handling middleware."

// 4. Express finds the error middleware

// This middleware:

// app.use((err, req, res, next) => {
//   res.status(500).send(err.message);
// });

// has 4 parameters:

// err
// req
// res
// next

// Because it has err as the first parameter, Express recognizes it as error-handling middleware.

// The err here is the same error you passed with:

// next(err);

// Therefore:

// err.message

// is:

// User not found

// And the client receives:

// User not found

// with status:

// 500
// The complete flow 🧠
// GET /user/10
//       ↓
// find user
//       ↓
// user doesn't exist
//       ↓
// throw new Error("User not found")
//       ↓
// catch(err)
//       ↓
// next(err)
//       ↓
// Express looks for error middleware
//       ↓
// (err, req, res, next)
//       ↓
// res.status(500).send(err.message)

// One small improvement: "User not found" is normally a 404, not a 500.

// You could do:

// if (!user) {
//   const err = new Error("User not found");
//   err.status = 404;
//   throw err;
// }

// Then:

// app.use((err, req, res, next) => {
//   res.status(err.status || 500).send(err.message);
// });

// Now a missing user gives 404, while unexpected errors can still give 500. 👍



//         DATABASE



// A database is a place where an application stores and organizes data so it can be saved, searched, updated, and deleted easily.

// Think of it like a digital storage room 🗄️.

// For example, imagine your college website stores student information:

// Students
// ------------------------------------------------
// ID     Name       Age     Course
// 1      Rahul      20      B.Tech
// 2      Aman       21      B.Tech
// 3      Priya      20      BCA

// This information can be stored in a database.

// When you log in to a website, the website might do something like:

// You enter login details
//         ↓
// Frontend
//         ↓
// Backend
//         ↓
// Database checks your information
//         ↓
// Backend sends result
//         ↓
// Frontend shows the result

// There are different kinds of databases.

// SQL databases store data mainly in tables:

// MySQL
// PostgreSQL
// SQL Server
// Oracle

// NoSQL databases can store data in more flexible structures:

// MongoDB
// Firebase Firestore
// Redis

// For your MERN learning, you'll commonly see:

// MongoDB = Database
// Express = Backend framework
// React = Frontend
// Node.js = Backend runtime

// So, very simply:

// Database = a system used by applications to permanently store and manage data. 💾



// DBMS = Database Management System.

// A DBMS is software that lets you create, store, organize, retrieve, update, and delete data in a database.

// Think of it like this:

// Database
//    ↓
// Contains the actual data

// DBMS
//    ↓
// Software that manages that data

// For example, suppose you have a student database:

// ID    Name    Course
// 1     Rahul   B.Tech
// 2     Aman    B.Tech
// 3     Priya   BCA

// You don't usually manipulate the database files directly. You use a DBMS to work with them.

// For example, with SQL:

// SELECT * FROM students;

// The DBMS processes that command and gives you the student records.

// Some popular DBMSs are:

// MySQL
// PostgreSQL
// Oracle Database
// Microsoft SQL Server
// MongoDB (NoSQL database system)
// SQLite
// Database vs DBMS

// Database → the organized collection of data.

// DBMS → the software that manages that data.

// A simple analogy:

// Books          = Database
// Librarian      = DBMS
// You            = Application/User

// The librarian helps you find, add, remove, and organize books. Similarly, a DBMS manages data in a database. 📚💾

// SQL (Structured Query Language) is a language used to communicate with relational databases.



// Sure, Kaneki 😄 This is an important distinction, especially if you're learning SQL + MongoDB.

// Structured database

// A structured database stores data in a fixed, organized format—usually tables with rows and columns.

// Example: SQL database

// id	name	age	city
// 1	Kaneki	20	Lucknow
// 2	Rahul	21	Delhi

// Every row follows the same structure: id, name, age, city.

// Examples:

// MySQL
// PostgreSQL
// Oracle
// SQL Server

// You generally define the structure/schema beforehand.

// CREATE TABLE users (
//     id INT,
//     name VARCHAR(50),
//     age INT
// );
// Unstructured database

// Unstructured data doesn't follow a fixed table-like structure.

// For example, you could have documents like:

// {
//   "name": "Kaneki",
//   "age": 20
// }

// and another document:

// {
//   "name": "Rahul",
//   "skills": ["JavaScript", "React"],
//   "github": "rahul123"
// }

// They don't necessarily have exactly the same fields.

// This kind of flexible document-based storage is commonly associated with NoSQL databases, such as MongoDB.

// Simple difference 🧠
// Structured	Unstructured / flexible NoSQL
// Tables	Documents / collections
// Rows & columns	JSON-like documents
// Fixed schema	Flexible schema
// SQL	Usually database-specific query APIs
// MySQL, PostgreSQL	MongoDB, CouchDB
// Great for highly organized relationships	Great when data structure changes frequently

// One small correction that's worth knowing: “NoSQL” doesn't literally mean all data is unstructured. NoSQL databases can store 
// structured, semi-structured, or other forms of data. MongoDB, for example, is better described as document-oriented with a flexible 
// schema.

// Think of it like:

// SQL → Excel-like tables 📊
// MongoDB → folders containing flexible JSON-like documents 📄



// Good question, Kaneki 😄 — and the real answer is: videos can be stored in a database, 
// but usually we don't store the actual video there.

// Imagine you have a website where users upload profile videos.

// Instead of putting the entire 500 MB video inside your database, you usually do this:

// User
//  ↓
// Backend
//  ↓
// Video Storage
//  ├── video.mp4
//  └── image.jpg

// Database
//  └── stores information about the files
//       ├── filename
//       ├── URL
//       ├── userId
//       └── upload date

// So the database might contain:

// {
//   "userId": 123,
//   "videoUrl": "https://storage.example.com/videos/abc.mp4",
//   "uploadedAt": "2026-08-26"
// }

// while the actual video is stored in file/object storage.

// Why? Mainly because videos are large files. Databases are generally optimized for querying and managing structured 
// information, while object storage is designed for storing and serving large files efficiently.

// For example, a typical application might use:

// PostgreSQL/MySQL/MongoDB → metadata
// Amazon S3 / Google Cloud Storage / Azure Blob Storage → actual video

// But can a database store the video itself?

// Yes. Some databases support storing binary data using things like BLOBs (Binary Large Objects).

// For example:

// Database
// └── users table
//     └── video BLOB
//         └── [actual video data]

// It's just usually not the preferred architecture for large videos because storage, backups, database size,
//  and serving large files can
//  become inefficient.

// So remember this simple rule:

// Database → information ABOUT the file
// Object/File storage → the actual file

// That's why when you upload a video to something like YouTube, the database can remember who uploaded it, its title, description, URL, etc., while specialized storage systems hold the
//  huge video file itself. 🎥🗄️


// Absolutely, Kaneki 😄 ACID is one of the most important concepts in DBMS. It describes the properties that make a 
// database transaction reliable and safe.

// ACID = Atomicity + Consistency + Isolation + Durability

// Think about a bank transfer:

// You transfer ₹500 from Account A to Account B.

// 1. Atomicity — "All or Nothing" ⚛️

// A transaction should either happen completely or not happen at all.

// Suppose:

// A = ₹1000
// B = ₹500

// Transfer ₹500:

// A → -₹500
// B → +₹500

// If money is deducted from A but the system crashes before adding it to B, that's a problem.

// Atomicity ensures the whole transaction is rolled back:

// Either:
// A = ₹500, B = ₹1000

// OR:
// A = ₹1000, B = ₹500

// Never a half-completed transaction.

// 2. Consistency — "Valid State → Valid State" ✅

// The database must always follow its rules and constraints.

// For example, if a database says:

// Account balance cannot be negative

// then a transaction shouldn't leave the database with:

// Balance = -₹500

// So:

// Before transaction → Valid database
// After transaction  → Valid database
// 3. Isolation — "Transactions Don't Interfere" 🔒

// Multiple transactions can happen at the same time.

// Imagine two people trying to withdraw money from the same account simultaneously.

// Isolation makes sure one transaction doesn't see or interfere with another transaction's incomplete work in an unsafe way.

// Conceptually:

// Transaction A ────────┐
//                       │ Database
// Transaction B ────────┘

// The database manages their execution so the result remains correct.

// 4. Durability — "Once Committed, It's Saved" 💾

// Once the database says:

// Transaction COMMITTED ✅

// the data should remain saved even if the server crashes immediately afterward.

// For example:

// Transfer ₹500
//      ↓
// COMMIT ✅
//      ↓
// Server crashes 💥
//      ↓
// Database restarts
//      ↓
// Transfer is still there ✅
// Easy way to remember 🧠

// A — Atomicity: All or nothing
// C — Consistency: Rules remain valid
// I — Isolation: Transactions don't mess with each other
// D — Durability: Committed data stays saved

// So for your DBMS/SQL learning, remember:

// ACID makes database transactions reliable.



// Yeah Kaneki 😄 — MongoDB has some advantages over SQL databases, especially when you're building modern web apps.

// The biggest difference is:

// SQL → tables + rows + fixed schema
// MongoDB → collections + documents + flexible schema

// Here are the main advantages of MongoDB:

// Flexible schema 🧩
// In SQL, a table usually has a defined structure:
// Users
// id | name | email | age

// MongoDB documents can have different fields:

// {
//   "name": "Kaneki",
//   "email": "abc@gmail.com"
// }

// Another document could have:

// {
//   "name": "John",
//   "email": "john@gmail.com",
//   "age": 21,
//   "skills": ["React", "Node"]
// }

// You don't have to alter a table every time your data structure changes.

// Works naturally with JSON 🚀
// MongoDB stores data as BSON, which is very similar to JSON.

// That's convenient with JavaScript/Node.js:

// const user = {
//   name: "Kaneki",
//   skills: ["React", "Node", "MongoDB"]
// };

// So MongoDB fits very naturally into the MERN stack.

// Good for rapidly changing applications ⚡
// If you're developing a startup/product where the data model keeps changing, MongoDB can be easier.

// For example:

// Today:
// User → name, email

// Later:
// User → name, email, profilePicture, skills, socialLinks

// Adding new fields is straightforward.

// Great for hierarchical/nested data 🌳

// MongoDB can store nested objects directly:

// {
//   "name": "Kaneki",
//   "address": {
//     "city": "Lucknow",
//     "country": "India"
//   }
// }

// In a relational database, you might separate this into multiple tables depending on the design.

// Easy horizontal scaling 📈
// MongoDB supports sharding, allowing data to be distributed across multiple servers.

// This can be useful when applications become extremely large.

// Good performance for certain workloads ⚡
// MongoDB can be very fast when you're mostly retrieving complete documents and your data fits 
// naturally into the document model.

// But here's the important part:

// MongoDB isn't simply "better than SQL."

// SQL databases are often better when you have:

// lots of relationships between data
// complex joins
// strict data consistency
// financial transactions
// highly structured data

// For example, banking systems often benefit heavily from relational databases.

// A simple way to remember it:

// SQL:

// "My data has a strong, structured relationship."

// MongoDB:

// "My data is more flexible and document-oriented."

// For your MERN/Next.js learning, MongoDB is definitely worth learning, but you should also understand SQL because 
// real-world software engineering uses both. 😄



// Kaneki, think of scaling like handling more users on your website 🚀

// Vertical Scaling = Scale Up ⬆️

// You make one server more powerful.

// Before:
// Server
// CPU: 4 cores
// RAM: 8 GB

// After:
// Server
// CPU: 16 cores
// RAM: 64 GB

// You upgrade the existing machine.

// Example:

//         More powerful
//             ↓
// Users → [ SERVER ]

// Advantages:

// Simple to implement
// No need to manage multiple servers
// Easier architecture

// Disadvantage:

// There's a hardware limit
// If that server goes down, your app may go down 😬
// Powerful servers can become expensive
// Horizontal Scaling = Scale Out ➡️

// Instead of making one server stronger, you add more servers.

//              ┌── Server 1
// Users → Load ├── Server 2
//         Balancer
//              └── Server 3

// If traffic increases:

// Server 1
// Server 2
// Server 3
// Server 4  ← Just add another server

// Advantages:

// Can handle huge traffic
// Better reliability
// No single server has to handle everything
// Easier to keep adding capacity

// Disadvantages:

// More complex
// Requires load balancing and coordination between servers
// Easy analogy 🍕

// Vertical scaling: Hire one worker and give them a faster computer and better equipment.

// Horizontal scaling: Hire more workers.

// MongoDB is known for supporting horizontal scaling through sharding, where data can be distributed across multiple machines.

// So remember:

// Vertical = Bigger machine ⬆️
// Horizontal = More machines ➡️


// The load balancer acts like a traffic manager 🚦, Kaneki.

// Imagine 1,000 users send requests to your website:

//         Users
//           ↓
//      [Load Balancer]
//        ↙    ↓    ↘
//    Server1 Server2 Server3

// The load balancer decides which server should handle each request.

// For example:

// User 1 → Server 1
// User 2 → Server 2
// User 3 → Server 3
// User 4 → Server 1
// User 5 → Server 2

// Without a load balancer, maybe everyone accidentally sends requests to one server:

// 1000 Users → Server 1 💀
//               Server 2 😴
//               Server 3 😴

// With a load balancer:

// 1000 Users
//      ↓
// Load Balancer 🚦
//  ↙    ↓    ↘
// 333   333   334 requests
//  ↓     ↓      ↓
// S1    S2     S3

// It can also check if a server is down:

//               ❌ Server 1 (down)
// Users → Load Balancer
//               ↓
//          Server 2 ✅
//          Server 3 ✅

// So it stops sending traffic to the failed server and redirects requests to healthy ones.

// Simple flow:

// Browser
//    ↓
// Load Balancer
//    ↓
// Chooses an available server
//    ↓
// Server processes request
//    ↓
// Response → User

// So basically: Load Balancer = traffic police for servers 🚦😄

// It distributes requests so no single server gets overloaded.


// Where the scaling difference becomes interesting 🚀

// Imagine you have 10 servers.

// With a relational database, you might use read replicas:

//                  ┌── Read Replica 1
//                  │
// App → Database ───┼── Read Replica 2
//                  │
//                  └── Read Replica 3

// Writes generally go to the primary, while reads can be distributed to replicas.

// MongoDB can also use replica sets:

//              Primary
//              /     \
//             ↓       ↓
//         Secondary Secondary

// Writes normally go to the primary, while secondaries replicate the data.

// And when the dataset itself becomes too large, MongoDB can shard:

//                  MongoDB
//                     ↓
//           ┌─────────┼─────────┐
//           ↓         ↓         ↓
//        Shard 1   Shard 2   Shard 3
//        data A    data B    data C\





// Sure, Kaneki 😄 CAP theorem is one of those DBMS concepts that sounds scary but is actually pretty simple once you visualize it.

// CAP theorem is about distributed systems — systems where your data is spread across multiple servers.

// Imagine:

//         Application
//              ↓
//        ┌─────┴─────┐
//        ↓           ↓
//     Server A     Server B

// The three letters mean:

// C — Consistency
// A — Availability
// P — Partition Tolerance

// C — Consistency

// Every user should see the same/latest data.

// Suppose you change:

// Balance = ₹1000

// After updating it to:

// Balance = ₹500

// you don't want another server to still tell the user:

// Balance = ₹1000

// Consistency means the system gives you the correct, consistent view of the data.

// A — Availability

// Every request should receive a response.

// Even if something goes wrong with part of the system:

// Server A ❌
// Server B ✅

// the system should still respond using the available server.

// So:

// Availability = "Don't leave the user hanging."

// P — Partition Tolerance

// This is the most confusing one.

// Imagine your servers communicate through a network:

// Server A ←──── Network ────→ Server B

// Suddenly the network connection breaks:

// Server A  ❌❌❌  Server B

// This is a network partition.

// Partition tolerance means your system continues operating despite that communication failure.

// The important part 🚨

// CAP theorem says:

// When a network partition happens, a distributed system has to choose between Consistency and Availability.

// So you get:

//              CAP
//             /   \
//            C     A
//             \   /
//               P

// During a partition:

// P + C  → Consistent but may reject/delay some requests

// P + A  → Available but may temporarily return different data

// You can't guarantee C + A + P simultaneously during a network partition.

// Example

// Imagine:

// Bank server A       Bank server B
//      ₹1000              ₹1000

// The network breaks:

// Bank A  ❌❌❌  Bank B

// A customer withdraws ₹800 through Server A.

// Server A now knows:

// ₹200

// But Server B still thinks:

// ₹1000

// If Server B continues accepting withdrawals, you could get inconsistent balances.

// So the system could choose:

// Consistency:
// "Sorry, we can't process this request right now."

// OR

// Availability:
// "Process the request even though we can't currently confirm what the other server knows."

// That's the CAP trade-off.

// One-line memory trick 🧠

// C = Same data
// A = Always respond
// P = Survive network failure

// And the key exam/interview sentence:

// CAP theorem says that in the presence of a network partition, a distributed system cannot guarantee both consistency
// //  and availability at the same time.


// Because computers naturally work with offsets, kaneki 👀

// Imagine an array:

// int arr[5] = {10, 20, 30, 40, 50};

// The array starts at some memory address, say:

// arr starts at address 1000

// Each int takes 4 bytes:

// arr[0] → address 1000
// arr[1] → address 1004
// arr[2] → address 1008

// The important idea is:

// address of arr[i] = starting_address + i × size_of_element

// So for arr[0]:

// 1000 + 0 × 4 = 1000

// For arr[1]:

// 1000 + 1 × 4 = 1004

// That's why 0-based indexing is natural: the index represents the offset from the starting position.

// If arrays were 1-based, the computer would conceptually need:

// address = starting_address + (index - 1) × size

// So you'd always have that extra -1.

// Basically:

// Index 0 means "move 0 positions from the beginning."

// That's why languages like C, C++, Java, and JavaScript use 0-based indexing. Some languages, though,
//  chose 1-based indexing because it can feel more natural to humans.]



// we dont use linear search in database because of many reasons we use B+ Tree 



// why  b+ tree is used  for searching in database

// Kaneki, databases use a B+ Tree mainly because it makes searching, inserting, deleting, and especially disk access very efficient.

// The biggest reason is this:

// Databases usually cannot keep all data in RAM. Data lives on SSD/HDD in chunks called pages/blocks. Reading from disk is much more expensive than comparing a few numbers.

// Imagine this sorted data:

// 1 2 3 4 5 6 7 8 9 10 ... millions of values

// A normal binary search tree might look like:

//         50
//        /  \
//      25    75
//     / \    / \

// Each node has only about 2 children. So for millions of records, the tree can become relatively tall.

// A B+ Tree node can contain many keys and children:

//              [20 | 40 | 60 | 80]
//            /    |    |    |    \
//        ...     ...  ...  ...    ...

// Suppose one database page can store:

// [10 | 20 | 30 | 40 | 50 | 60 | 70 | ...]

// and pointers to many children.

// So one node might have 100, 500, or even more children, depending on page size and key sizes.

// That means the tree height stays tiny.

// For example:

// Level 1:        1 root
//                    |
// Level 2:       500 nodes
//                    |
// Level 3:    250,000 nodes
//                    |
// Level 4: 125,000,000 entries

// So to find a record among potentially hundreds of millions, the database might need only a few page accesses:

// Root page
//    ↓
// Internal page
//    ↓
// Internal page
//    ↓
// Leaf page → Found

// That's why it's awesome for databases.

// leaf node point to memory location in ssd

// 1. Start at Root

//         [50 | 200]
//              |
//              ↓

// 2. Follow correct child

//         [100 | 150]

//              ↓

// 3. Reach leaf

//         [101 | pointer]
//                |
//                ↓

// 4. Use pointer to locate actual row

//         DATABASE PAGE
//         ┌─────────────────┐
//         │ ID: 101         │
//         │ Name: Kaneki    │
//         │ Age: 20         │
//         └─────────────────┘


// B tree can not implement range query but b+ tree can because all leaf node are connected to each other


// BSON

// BSON means Binary JSON. It is mainly associated with MongoDB.

// Think of normal JSON:

// {
//   "name": "Kaneki",
//   "age": 20,
//   "skills": ["DSA", "React"]
// }

// MongoDB stores documents in a BSON-like binary format, which supports more data types than standard JSON.

// For example:

// JSON types:
// String
// Number
// Boolean
// Array
// Object
// null

// BSON additionally supports database-friendly types such as:

// ObjectId
// Date
// Binary data
// Decimal128
// Regular Expression
// Timestamp

// So in MongoDB:

// {
//   _id: ObjectId("..."),
//   name: "Kaneki",
//   age: 20,
//   createdAt: Date(...)
// }

// The basic idea is:

// Your JavaScript object / JSON
//           ↓
//       BSON format
//           ↓
//  MongoDB stores/processes it

// One important thing though: BSON is not simply “JSON converted directly into binary.”
//  It has its own structured format, including type information and field lengths, which helps MongoDB
//   efficiently work with different data types.

// So:

// JSON is a text data format. BSON is a binary document format used by MongoDB.

// y.

// ################################  MANGODB  ##########################################################

//  what is cluster 


// Yep bro 😄 — in MongoDB, a cluster basically means the group of MongoDB servers that work together to store and manage your data.

// Think of it like this:

// MongoDB Cluster
//        │
//        ├── Server 1
//        ├── Server 2
//        └── Server 3

// But there are two common meanings you should know:

// 1. MongoDB Atlas Cluster

// If you're using MongoDB Atlas, when you create a database, Atlas gives you a cluster. It's the environment where your databases and collections live.

// Cluster
//    │
//    ├── Database: swadisht
//    │      ├── users
//    │      ├── restaurants
//    │      └── orders
//    │
//    └── Database: test
//           └── products

// So:

// Cluster → Database → Collection → Document

// For example:

// Cluster
//   ↓
// swadisht database
//   ↓
// restaurants collection
//   ↓
// {
//    "name": "Pizza Hub",
//    "city": "Kanpur"
// }

// 2. Cluster for high availability/scaling

// A cluster can also consist of multiple MongoDB servers.

// For example:

//              MongoDB Cluster
//                    │
//           ┌────────┼────────┐
//           ↓        ↓        ↓
//        Primary  Secondary Secondary

// The Primary handles writes, while Secondaries replicate the data and can help with availability/read workloads depending on configuration.

// So don't think cluster = database.

// A simple mental model:

// 🏢 Cluster = building
// 🗄️ Database = room
// 📁 Collection = cabinet
// 📄 Document = file inside the cabinet

// That's the basic hierarchy you want in your head before going deeper into MongoDB.


// Bro 😄 MongoDB Compass is basically a GUI (Graphical User Interface) for MongoDB.

// Instead of using MongoDB commands in the terminal, Compass lets you see and manage your database visually.

// For example, imagine your MongoDB structure:

// Cluster
//    ↓
// Database: college
//    ↓
// Collection: students
//    ↓
// Documents

// In MongoDB Compass, you can click through all of this visually:

// 📦 See your databases
// 📁 See collections
// 📄 View and edit documents
// 🔍 Search/filter data
// ➕ Insert new documents
// ✏️ Update documents
// ❌ Delete documents
// 📊 View indexes and analyze queries

// For example, instead of writing:

// db.students.find()

// Compass can show you the students collection and its documents in a visual interface.

// Think of it like:

// MongoDB Shell = typing commands yourself ⌨️
// MongoDB Compass = managing MongoDB with a visual app 🖱️

// For learning, I'd recommend using both. First learn the actual MongoDB commands, then use Compass to visually inspect what your commands did.

// It's super useful when you're building your Node.js/Express backend, Kaneki 🔥



// Yep bro 😄 this is the basic MongoDB hierarchy. Get this clear and MongoDB becomes much easier.

// MongoDB Cluster
//       ↓
//    Database
//       ↓
//   Collection
//       ↓
//   Document
//       ↓
//     Field

// Think of it like a normal storage system:

// Database → stores related data.

// Example:

// college

// Collection → similar to a table in SQL.

// students

// Document → one individual record. MongoDB stores documents as BSON.

// {
//   name: "Kaneki",
//   age: 20,
//   course: "BTech"
// }

// Field → a single piece of information inside a document.

// name: "Kaneki"
// age: 20
// course: "BTech"

// Here:

// name → field
// "Kaneki" → field value
// age → field
// 20 → field value

// So if we have:

// students

// Collection:

// students
//  ├── Document 1
//  │    ├── name: "Kaneki"
//  │    ├── age: 20
//  │    └── course: "BTech"
//  │
//  ├── Document 2
//  │    ├── name: "Ayan"
//  │    ├── age: 21
//  │    └── course: "BCA"
//  │
//  └── Document 3
//       ├── name: "Rahul"
//       ├── age: 20
//       └── course: "BTech"
// SQL vs MongoDB
// SQL	MongoDB
// Database	Database
// Table	Collection
// Row	Document
// Column	Field

// One important difference: MongoDB documents don't have to all contain exactly the same fields.

// For example:

// // Document 1
// {
//   name: "Kaneki",
//   age: 20
// }

// // Document 2
// {
//   name: "Ayan",
//   age: 21,
//   city: "Kanpur"
// }

// That's one of the reasons MongoDB is called a flexible-schema NoSQL database. 🔥


