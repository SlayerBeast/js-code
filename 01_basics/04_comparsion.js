//console.log("2">1);
//console.log(1<"02");

//console.log(null>0);false
//console.log(null==0);false
//console.log(null>=0); true

//the reason is that an equality check == and comparisions > < >= <= works differently.
//comparisions convert null to a number, treating it as 0.
//thats why (3) null>=0 is true and (1) null >0 is false.

console.log("2"===2);

