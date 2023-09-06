// Write a function that takes an array of objects with a name and age property and returns
// an object where the keys are the age and the values are arrays of objects with that age.
// Use the Map object to accomplish this.
const people =[{name:'vetri',age:23},{name:'moorthi',age:24},{name:'arthi',age:22}]
let ob={}
s=people.map(e=>{
    ob['age']=[e.age]
})
console.log(s)