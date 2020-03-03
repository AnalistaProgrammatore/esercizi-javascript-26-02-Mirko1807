const someBase = (v, callback) => {
    let b = callback(v)
    return b
}
const someReduce = (v, callback) => {
    return v.reduce(callback)
}
const reducer = (a, x) => {

    if (a < 5) return true
    if (x < 5) return true
    return false
}
let condition = (v) => {
    for (let i = 0; i < v.length; i++)
        if (v[i] > 5) return true
    return false
}
V = [6, 2, 3, 4, 5, 6]
let b = someBase(V, condition)
let d = someReduce(V, reducer)
console.log(b, d)



