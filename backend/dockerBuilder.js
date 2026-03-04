const {exec}=require('child_process')
const path=require('path')

exports.buildImage=function(language,framework,database,services){

return new Promise((resolve,reject)=>{

const templatePath=path.join(__dirname,'../templates',language,framework)

const imageName=`custom-${language}-${framework}`

const command=`docker build -t ${imageName} ${templatePath}`

console.log("Running:",command)

exec(command,(error,stdout,stderr)=>{

if(error){

console.log(stderr)

reject(error)

}

console.log(stdout)

resolve()

})

})

}