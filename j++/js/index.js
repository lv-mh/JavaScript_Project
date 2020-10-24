// var fav = "盲僧"
// function shows(){
//     console.log(this.fav)
// }

// shows()

var name = 'xiao wang', age = 17;
var obj = {
    name: 'xiao zhang',
    objAge: this.age,
    myfun: function (fm, t) {
        console.info(this.name + "年龄" + this.age + " 从" + fm + "到" + t)
    }
}
var db = {
    name: "mr lv",
    age: '30'
}

//obj.myfun()
obj.myfun.apply(db, ["上海", "bj"])
obj.myfun.call(db, "上海", "bj")
obj.myfun.bind(db, "上海", "bj")()
obj.myfun.apply(db, ["上海", "bj"])
obj.myfun.call(db, "上海", "bj")
obj.myfun.bind(db, ["上海", "bj"])()

function add(a, b) {
    console.info(this)
    console.info(a + b);
}
function sub(a, b) {
    console.info(this)
    console.info(a - b);
}

add.call(sub, 3, 1);


function Sister() {
    this.age = 18;
    this.sayAge = function () {
        console.info("Age:" + this.age);
    }
    this.yaya = function () {
        //document.write("yaya.....");
    }
}
function Brother() {
    this.age = 25;
    this.sayAge = function () {
        console.info("Age:" + this.age);
    }
    this.hoho = function () {
        //document.write("hoho.....")
    }
}
var sis = new Sister();
var bro = new Brother();
sis.sayAge.call(bro);

// let bar = { a: 1, b: 2 };
// let baz = { ...bar };
//console.info(baz)
// var add = function(a) {
//     var sum = a;
//     var addMore = function(b) {
//         sum += b;
//         return addMore;
//     };

//     addMore.toString = function() {
//         return sum;
//     };

//     return addMore;
// };

// console.log(add(1)(2)(3)(4));      //function 10
// var a = add(1)(2)(3)(4).toString();  //10
// console.log(a)


function add(x) {
    var sum = x;
    var tmp = function (y) {
    sum = sum + y;
    return tmp;
    };
    tmp.toString = function () {
    return sum;
    };
    return tmp;
    }
    console.log(add(1)(2)(3)); //6
    console.log(add(1)(2)(3)(4)); //10
