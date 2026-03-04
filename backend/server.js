const express=require('express')
const cors=require('cors')
const builder=require('./dockerBuilder')

const app=express()

app.use(cors())
app.use(express.json())

app.post('/build',async(req,res)=>{

const {language,framework,database,services}=req.body

console.log("Build Request:",req.body)

try{

await builder.buildImage(language,framework,database,services)

res.json({
message:"✅ Docker Image Built Successfully"
})

}

catch(err){

console.log(err)

res.json({
message:"❌ Docker Build Failed"
})

}

})

app.listen(5001,()=>{

console.log("Backend running on port 5001")

})