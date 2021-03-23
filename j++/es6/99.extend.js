function Person(name) {
    this.name = name;
    this.sum = function(){
        console.info(this.name)
    }
}

Person.prototype.age = 10;

function Per(){
    this.name = 'ker';
}

Per.prototype = new Person();
var per1 = new Per();
console.info(per1.name)


function fun(){}
console.info(typeof fun) 

var newFun = new fun()
console.info(typeof newFun) 