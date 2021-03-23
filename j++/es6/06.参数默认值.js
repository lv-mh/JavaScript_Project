function add(a,b=10){
   console.log(a+b)
}

add(1)


function cc({name="b",age}){
    console.log(name)
    console.log(age)
}

cc({
   /*  name:"a", */
    age:15
})