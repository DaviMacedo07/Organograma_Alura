const array1 = [1,2,3,4,5]

array1.forEach((num) => {
    console.log(num * 2)
})

console.log("MAAP")
const numerosDobrados = array1.map((num) => {
    return num * 2
})

console.log(numerosDobrados)
console.log(array1)