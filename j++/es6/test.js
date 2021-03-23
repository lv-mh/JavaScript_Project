// const obj = new Object();
// Object.defineProperty(obj,"t",{
//     value:"test"
// })
// console.log(obj.t)

// function fn(){
//     console.log("a")
    
// }
// var a = new fn()
// var b = fn()

// console.log(b)
// console.log(a)

//const arr = new Array(4);
//const arr = Array.apply(null, new Array(4));
//const arr = [1,2,3]
// arr.map(function(item,i){
//     console.info(i)
// })
//const obj = {a:1,b:2}
//arr.map((elem, index) => index)
//console.info({ ...obj });
//console.info('..................................')

// function add(x) {
//     var sum = x;
//     var tmp = function (y) {
//     sum = sum + y;
//     return tmp;
//     };
//     tmp.toString = function () {
//     return sum;
//     };
//     return tmp;
//     }
//     console.log(add(1)(2)(3).toString); //6
//     console.log(add(1)(2)(3)(4)); //10


//     var add = function(a) {
//         var sum = a;
//         var addMore = function(b) {
//             sum += b;
//             return addMore;
//         };
    
//         addMore.toString = function() {
//             return sum;
//         };
    
//         return addMore;
//     };
    
//     console.log(add(1)(2)(3)(4));      //function 10
//     var a = add(1)(2)(3)(4).toString();  //10
//     console.log(a)

// var arr1 = [[0, 1], [2, 3], [4, 5]];
// var arr2 = arr1.reduce(function (a, b) { return a.concat(b)} );
// console.log(arr2);

// console.log([0, 1].concat(1));


/* function multiPolygon2polygons (multiPolygon){
    if(multiPolygon.type !== 'MULTIPOLYGON'){
        return
    }
    var polygons = [];
    multiPolygon.coordinates.forEach((item)=>{
        var polygon = {
            type: "Polygon",
            coordinates: []
        };
        polygon.coordinates = item;
        polygons.push(polygon)
    });
    return polygons;
} */

class BaseView {
    layout() {
        console.log("BaseView Layout");
    }
}

/* class BusinessView extends BaseView  {
    layout() {
        super.layout();
        this._layoutForm();
        this._layoutMap();
    }

    _layoutForm() {
        // ....
    }

    _layoutMap() {
        // ....
    }
} */

const _layoutMap = Symbol();
class MapView extends BaseView {
    layout() {
        super.layout();
        /* this._layoutMap(); */
        this[_layoutMap]();
    }

    [_layoutMap]() {
        console.log("MapView layout map");
    }
    /*  _layoutMap() {
        console.log("MapView layout map");
    } */
}

const _layoutForm = Symbol();
const _layoutMap = Symbol();
class BusinessView extends MapView {
    

    layout() {
        super.layout();
        this[_layoutForm]();
        this[_layoutMap]();
    }

    [_layoutForm]() {
        // ....
    }

    [_layoutMap]() {
        console.log("BusinessView layout map");
    }
}

var busin = new BusinessView();
busin.layout()

let a