let s = Symbol();
console.log(s,typeof s)

let a1 = Symbol("t")
let a2 = Symbol("t")
console.log(a1===a2)

let s4 = Symbol.for('2ewerwef')
console.log(s4,typeof s4)
let s5 = Symbol.for('2ewerwef')
console.log(s4===s5)

let game = {}
let methods = {
    up:Symbol(),
    down:Symbol()
},

