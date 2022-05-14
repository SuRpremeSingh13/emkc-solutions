const value1 = process.argv[2];
//thanks to @ziloka
// write your solution here
let binaryV = value1.split('').map(x => '0' + x.charCodeAt(0).toString(2)).join('')
console.log(binaryV)
