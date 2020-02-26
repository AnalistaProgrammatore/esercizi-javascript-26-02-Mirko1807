const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step)).reduce((a, x) => a + x);
const range2 = ({ start, stop, step }) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step)).reduce((a, x) => a + x);
let start = 1; let stop = 10; let step = 2;
let v1 = range(start, stop, step);
let v2 = range2({ stop, start, step });
console.log(v1, v2);