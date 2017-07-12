function fn(...toadd) {
    let result = 0;
    for (let i = 0; i < toadd.length; i++) {
        result += toadd[i];
    }
    return result;
}
console.log(fn(1, 2, 3, 4, 5));