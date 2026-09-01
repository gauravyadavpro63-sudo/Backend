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




// // book store project 
// const Bookstore=[
//     {id:1,
//         name:"kaneki",
//         author:"gaurav",

//     },
//     {
//         id:2,
//         name:"princess",
//         author:"anshika"
//     },
//     {
//         id:3,
//         name:"metamorphism",
//         author:"frenz kafka"
//     }
    

// ]

// const express=require("express");
// const app=express();

// app.use(express.json());

// // app.get("/book",(req,res)=>{
// //     res.send(Bookstore);
// // })

// app.get("/book",(req,res)=>{
//    const books= Bookstore.filter(info=>info.author===req.query.author)
//     res.send(books);
// })
// app.get("/book/:id",(req,res)=>{
// const id= Number(req.params.id)
// const book=Bookstore.find(info=>info.id===id);
// res.send(book);
// })


// app.post("/book",(req,res)=>{
// Bookstore.push(req.body);
// res.send("data saved succesfully");
// })

// app.patch("/book",(req,res)=>{
//     const book= Bookstore.find(info=>info.id===req.body.id);
//     if(req.body.author){
//     book.author=req.body.author;
//     }
//     if(req.body.name){
//         book.name=req.body.name;
//     }

//     res.send("patch  updated");
// })

// app.put("/book",(req,res)=>{
//     const book=Bookstore.find(info=>info.id===req.body.id);
//      book.author=req.body.author;
//      book.name=req.body.name;
//      res.send("put updated")
// })
// app.delete("/book/:id",(req,res)=>{
//     const id=Number(req.params.id);
//     const index=Bookstore.findIndex(info=>info.id===id);
//     Bookstore.splice(index,1);
//     res.send("data deleted")
// })


// app.listen(5000,()=>{
//     console.log("listenig to port 5000")
// })











//    MIDDLEWARE
// const express=require("express")
// const app=express();

// routehandler
// app.use("/user",(req,res,next)=>{
//     console.log("1")
// // res.send("hii")
// next()     // call the next function but wont run because only one res per req  happen
// console.log(2);
// },
// (req,res)=>{
//     console.log(3);
//     res.send("heelooo ji")
// } 
// )
//  output: 1,3,2


// app.listen(3000,()=>{
//     console.log("listening at port 3000");
// })

// app.use("/user",[r1,r2,r3,r4])    we can wrap in array two 



                                                          // project
//project


//  const express = require("express");
//  const app=express();


//  app.use(express.json());

//   const foodItems=[
//     {id:1,name:"burger",type:"non-veg",price:3300},
//     {id:2,name:"chicken",type:"non-veg",price:300},
//     {id:3,name:"ice-cream",type:"non-veg",price:2300},
//     {id:4,name:"dosa",type:"non-veg",price:300},
//     {id:5,name:"cococola",type:"non-veg",price:3300},
//     {id:6,name:"paties",type:"non-veg",price:300},
//     {id:7,name:"paneer",type:"non-veg",price:3020},
//     {id:8,name:"water",type:"non-veg",price:3030},
//     {id:9,name:"daal chawal",type:"non-veg",price:3300},
//     {id:10,name:"raita",type:"non-veg",price:3400},
//   ]

//   const cartItems=[];
//   app.get("/food",(req,res)=>{
//     res.status(200).send(foodItems);
//   })

//   app.post("/admin",(req,res)=>{
//     //add items in fooditems
//     //authentication karna padega ki ye admin hai ya nhi
//     //dummy code
//     const token="sdfdsf";
//     const Access=token==="sdfdsf"?1:0;
//     if(Access){
//         foodItems.push(req.body);
       
//         res.status(201).send("items added successfully");
//     }
//     else{
//         res.status(401).send("items cant be added");
//     }
//   })

//   app.delete("/food/:id",(req,res)=>{
//     const id=Number(req.params.id);
//     const index=foodItems.findIndex(items=>items.id===id);
//      if(index===-1){
//         res.status(404).send("not found");
//      }
//      else{
//         foodItems.splice(index,1);
//         console.log(foodItems);
//         res.status(200).send("deleted succesfully");
//      }
//   })


// app.patch("/admin",(req,res)=>{
//   const food=foodItems.find(items=>items.id===req.body.id);
//   food.price=req.body.price;
//   res.send("patch succesfull");
// })


// app.post("/user/:id",(req,res)=>{
//   const id=Number(req.params.id);
//   const item=foodItems.find(items=>items.id===id);
//   if(item){
//    cartItems.push(item);
//    res.send("added to cart")
//   }
//   else{
//     res.status(404).send("not added")
//   }
// })
// app.get("/cart",(req,res)=>{
//   res.send(cartItems);
// })





  // ERROR HANDLING IN MIDLEWARE


  

// app.get("/user",(req,res)=>{
//   try{
//   JSON.perse("dfasd");    //this will throw error so we need to handle that
//   res.send("heelo coders")
//   }
//   catch(err){
// res.send("some error occured")
//   }
// })



//  app.listen(3000,()=>{
//     console.log("listening at port 3000");
//  })




  // DATABASE




import express from "express";
import main from "./database.js"
import User from "./user.js"
const app=express();

// CRUD  OPERATION

app.use(express.json());
app.get("/info",async (req,res)=>{
 const  ans=await User.find({});
res.send(ans);
})


app.post("/info", async (req,res)=>{
  try{
  await User.create(req.body);
  res.send("added succesfully");
  }
  catch(err){
    res.send(err);
  }
})

app.delete("/info",async (req,res)=>{
  await User.deleteOne({name:"aditya"})
  res.send("deleted");
})

app.patch("/info",async(req,res)=>{
  const result=await User.updateOne({name:"anshika"},{age:100,city:"pata nhi"});
  res.send("updated succesfully");
})




main()
.then(async()=>{
  console.log("connected to db")
  app.listen(3000,()=>{
    console.log("listening to port 3000");
  })



// const result= await User.find({name:"Rohit"});
// console.log(result);
})
.catch((err)=>console.log(err));

hlo 




  
