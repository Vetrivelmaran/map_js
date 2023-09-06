a=['apple','orange','apple','lemon']
let ob ={}
a.map(e=>{
  ob[e]=(ob[e]+1)||1  
})
console.log(ob)