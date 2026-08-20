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


const http=require("http")

const server=http.createServer((req,res)=>{
    // res.end("Heelo coder army")
    if(req.url==="/"){
        res.end("helo coder army");
    }
    else if(req.url=="/contact"){
        res.end("this is contact page")
    }
    else {
        res.end("not found")
    }

})

server.listen(400,()=>{
    console.log("i am listeninng at port 400")
})