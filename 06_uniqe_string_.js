const a=['apple','mango','orange','apple','mango']
s=a.map((e,i,arr)=>{
    if(arr.indexOf(e)===i){
        return e
    }

});
console.log(s);


//------------not complete-----