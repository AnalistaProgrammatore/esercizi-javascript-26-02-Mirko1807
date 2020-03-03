const everyBase = (v, callback) => {
    let b = callback(v)
    return b
}
const everyReduce = (v, callback) => {
    return v.reduce(callback)
}
const reducer = (a, x) => {

    if (a < 6) a = true
    else return false
    if (x < 6) a = true
    else return false
    return a
}
let condition = (v) => {
    let a = false
    for (let i = 0; i < v.length; i++)
        if (v[i] > 5) a = true
        else return false
    return a
}
V = [6, 2, 3, 4, 5, 6]
let b = everyBase(V, condition)
let d = everyReduce(V, reducer)

console.log(b, d)

