//es5获取实参方式
function data(){
    console.log(arguments)
}

data("a");

function data1(...args){
    console.log(args)
}

data1("a");

const k = [0,1]
const j = [1,2]

console.log(...k,...j)