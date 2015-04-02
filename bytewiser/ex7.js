var num = process.argv[2];
//console.log(num);
var u32 = new Uint32Array([num]);
//console.log(u32);
var u16 = new Uint16Array(u32.buffer);
//console.log(u16);
console.log(JSON.stringify(u16));