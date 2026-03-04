function buildImage(){

const language = document.getElementById("language").value;

const framework = document.getElementById("framework").value;

const database = document.getElementById("database").value;

const services=[];

document.querySelectorAll('input[type="checkbox"]:checked')
.forEach(cb => services.push(cb.value));

const output=document.getElementById("output");

output.innerHTML+="\nStarting Docker Build...\n";

fetch("http://localhost:5001/build",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

language,

framework,

database,

services

})

})

.then(res=>res.json())

.then(data=>{

output.innerHTML+="\n"+data.message+"\n";

})

.catch(err=>{

output.innerHTML+="\nError : "+err+"\n";

});

}