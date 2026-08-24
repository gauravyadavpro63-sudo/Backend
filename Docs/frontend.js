
 const response=await fetch("afosf");


const response1 =await fetch("https//api.example.com/data",{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({name:'john',age:30})
});


const response2 =await fetch("https//api.example.com/data",{
    method:'PATCH',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({age:30})
});