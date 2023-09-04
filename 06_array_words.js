const a=['apple','orange','apple','bannana','watermelon','bannana','vetri']
const ob={}
s=a.map(e=>{
    if(ob[e]){
        ob[e]=ob[e]+1;
    }
    else{
        ob[e]=1
    }g
    return ob                                                      
})
// console.log(ob)
console.log(s)