console.info(parseInt('1a',16))

let hello = '\u{41}\u{42}\u{43}';
console.info(hello)

const s = new Set();

[2, 3, 5, 4, 5, 2, 2, 6, 8, 6].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}

var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1);  //删除第一项
console.log(colors);  //green,blue
console.log(removed);  //red，返回数组中值包含一项

removed = colors.splice(1, 0, "yellow", "orange");  //从位置1开始插入两项
console.log(colors);  //green,yellow,organge,blue
console.log(removed);  //返回的是一个空数组

removed = colors.splice(1, 1, "red", "purple");  //插入两项，删除一项
console.log(colors);  //green,red,purple,orange,blue
console.log(removed);  //yellow, 返回的数组中只包含一

console.log('111'==111)
console.log('111'===111)

function countb(str){
  var arr = str.split('');
  var count = 0
  for (let i = 0; i< arr.length; i++) { 
     if(arr[i].charCodeAt(0)<=255){
        count +=1;
     }else{
        count +=2;
     }
    }

    return count;
}

console.info(countb("你好"))