function getRandomNElements(array, n) {
    var result = new Array(n),
        len = array.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandomNElements: more elements requested than is available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = array[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export {
    getRandomNElements
}