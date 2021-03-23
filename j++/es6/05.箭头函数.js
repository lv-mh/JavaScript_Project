/* let fun = (a,b)=>{
    console.log(a+b)
}
fun(1,2) */


global.name = "AA"
const SCHOOL = {
    name:"GG"
}
function getname(){
    console.log(this)
    console.log(this.name)
}

let getname2 = ()=>{
    console.log(this)
    console.log(this.name)
}
exports = module.exports =global



getname()
getname2()


let a = b=>{
    console.log(b)
}

a("q")

let b = b=>console.log(b)
b("q")