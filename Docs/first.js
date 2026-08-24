// require("./second.js")  
//common js module
// it will wrape the second.js in IIFE function(auto call the function)

// so to get sum(3,8) we need to export it
// const {sum,sub}=require("./second.js")

// sum(4,4);
// sub(4,4);


// console.log("i am first")


// ye purane tarike hai  ab import export use hota hai but used in industry

// so to use import and export write first.mjs second.mjs
// or make a package.json and write "type": "module"

// const fs=require("fs")
// fs.readFile("./file.json","utf-8",(error,response)=>{
//     console.log(response);
    
// })

// how to create server in Node.js


// const http=require("http")

// const server=http.createServer((req,res)=>{
//     // res.end("Heelo coder army")
//     if(req.url==="/"){
//         res.end("helo coder army");
//     }
//     else if(req.url=="/contact"){
//         res.end("this is contact page")
//     }
//     else {
//         res.end("not found")
//     }

// })

// server.listen(400,()=>{
//     console.log("i am listeninng at port 400")
// })


// Express 

// const express=require("express");
// const app=express();

// #order important for routing
// app.use("/co?nt+ac*t",(req,res)=>{   
//     // {?:makes o optional  +:t kitne bar bhi repeat ho skata hai  *:c ke baad kuch bhi a sakta hai magar end t se hona chiye}
//     res.send("I am contact")
// })

// app.use("/dashboard/:id",(req,res)=>{   
//     // {params}
//     console.log(req.params)
//     // res.send("this is dashboard")
//     res.send("name :"+req.params.id);
// })



// app.use("/",(req,res)=>{
//     res.send("hello coder army and clan");
// })



// app.listen(400,()=>{
//     console.log("listening to port 4000");
// })



// app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send({name:"rohit"});
// })

// app.post("/",(req,res)=>{
//     res.send("data saved succesfully");
//     console.log(req.body);
// })

// app.listen(400,()=>{
//     console.log("listening to port 4000");
// })




// book store project 
const Bookstore=[
    {id:1,
        name:"kaneki",
        author:"gaurav",

    },
    {
        id:2,
        name:"princess",
        author:"anshika"
    },
    {
        id:3,
        name:"metamorphism",
        author:"frenz kafka"
    }
    

]

const express=require("express");
const app=express();

app.use(express.json());

app.get("/book",(req,res)=>{
    res.send(Bookstore);
})

app.get("/book/:id",(req,res)=>{
const id= Number(req.params.id)
const book=Bookstore.find(info=>info.id===id);
res.send(book);
})


app.post("/book",(req,res)=>{
Bookstore.push(req.body);
res.send("data saved succesfully");
})

app.listen(5000,()=>{
    console.log("listenig to port 5000")
})