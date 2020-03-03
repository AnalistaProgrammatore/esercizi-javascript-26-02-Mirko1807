const filterBase = (v, callback) => {
    callback(v)
}
const filterReduce = (v, callback) => {
    v.reduce(callback)
}
const reducer = (a, x) => {
    if (a < 5) console.log(a)
    if (x < 5) console.log(x)
}
let condition = (v) => {
    for (let i = 0; i < v.length; i++)
        if (v[i] > 5) console.log(v[i])
}
V = [1, 2, 3, 4, 5, 6]
filterBase(V, condition)
filterReduce(V, reducer)
