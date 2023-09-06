const food =[
    {name:'idly',
category:'brekfirst',
},
{
    name:'tee',
    category:'snakes'
},
{   name:'dary milk',
    category:'choclate'
    
}
]
let ob ={}
food.map(e=>{
    ob[e.category]=e
})
console.log(ob)