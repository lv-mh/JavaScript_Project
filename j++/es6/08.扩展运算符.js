const t = [1,3,4,6]

function c(){
    console.log(arguments)
}

c(t)

c(...t)