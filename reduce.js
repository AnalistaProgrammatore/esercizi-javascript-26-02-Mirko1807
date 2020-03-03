const reduceBase = (v, callback, a) => {
    let b = callback(v, a)
    return b
}
const reducer = (v, a) => {
    for (let i = 0; i < v.length; i++) a += v[i]

    return a
}
let v = [1, 2, 3]
let b = reduceBase(v, reducer, 2)
console.log(b)
