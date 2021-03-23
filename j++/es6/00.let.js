/* for (let i = 0; i <10; i++) {
    
}
console.log(i); */

/* a = [];
for (var i = 0; i < 10; i++) {
    a[i]=function(){
        console.log(i);
    }
    
}


a[6]();
console.log(); */


/* // var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2; */

/*  if (true) {
    // TDZ开始
    //tmp = 'abc'; // ReferenceError
    console.log(typeof tmp); // ReferenceError
  
    let tmp; // TDZ结束
    console.log(tmp); // undefined
  
    tmp = 123;
    console.log(tmp); // 123
  } 

  console.info(typeof undeclared_variable)  */


//var x = x;

// 报错
/* let x = x; */

/* let [foo = true] = [];
console.info(foo) // true */

/* function f() {
    console.log('aaa');
  }
  
  let [x = f()] = [1];

  console.log(x) */


/* let x;
if ([1][0] === undefined) {
  x = f();
} else {
  x = [1][0];
}
console.log(x) */

let a = 1
let a = 2