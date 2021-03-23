
// for(let a of "foo"){
//     console.info(a);
// }

// function tcount(){
//     console.count();
//     return null;
// }

// tcount();
// tcount();
// tcount();

// console.dir({f1:"a",f2:"v"});

// console.warn("a");

// let a = ['a','b','c','d'];
// a.pop()
// a.pop()
// console.info(a);
function multiply(input) {
    return new Promise(function (resolve, reject) {
        console.info('calculating ' + input + ' x ' + input + '...');
        setTimeout(resolve, 500, input * input);
    });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        console.info('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input + input);
    });
}

var p = new Promise(function (resolve, reject) {
    console.info('start new Promise...');
    resolve(123);
});

// p.then(multiply)
//  .then(add)
//  .then(multiply)
//  .then(add)
//  .then(function (result) {
//     console.info('Got value: ' + result);
// });

function runAsync1(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("s1");
            resolve("ss1")
        })
    })
}

function runAsync2(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("s2");
            resolve("ss2")
        })
    })
}


function runAsync3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("s3");
            resolve("ss3")
        })
    })
}

// Promise.all([runAsync1(),runAsync2(),runAsync3()]).then(function(data){
//     console.log(data)
// })

var color = 'green';
var test8 = { 
    color:'blue',
    getcolor:function(){
        var color='red';
        console.log(this.color)
    }
};

var getcolor = test8.getcolor;
getcolor();
test8.getcolor();

