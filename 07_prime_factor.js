const arr_num=[6,4,9,5]
function prim(n) {
    let count = 0; 
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count += 1;
        }
    }
    if (count == 2) {
        return true
    } else {
        return false
    }
}
function prim_fact(n){
    let primefact=[];

    for(let i=0;i<=n;i++){
        if(prim(i)){
            primefact.push(i)
            
        }
    }
    return primefact;
}

let ob={}
arr_num.map(e=>{
    ob[e]=prim_fact(e)
})
console.log(ob)