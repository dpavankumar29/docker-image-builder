const express=require('express')

const app=express()

app.get('/',(req,res)=>{

res.send("Express App Running Inside Docker")

})

app.listen(9000,()=>{

console.log("Server running")

})