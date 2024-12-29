console.log("This is strings tutorial");
let a = "Shivam";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]); // This will print 'm'

console.log(a.length); // This will print 6

let real_name = "Shivam";
let friend = "Rahul";
// console.log("His name is " + real_name + " and his friend is " + friend );
// console.log(`His name is ${real_name} and his friend is ${friend}`); // This is called string interpolation



let b = "Harry";
// console.log(b.toUpperCase());
// console.log(b.toLowerCase());
// console.log(b.length);
// console.log(b.slice(1,4));
// console.log(b.slice(1));
// console.log(b.replace("Sh", "77"));// Agar b = "Shivamsh" raha to pahele wala "sh"

// console.log(b.concat(a));
console.log(b.concat(a, "Aiswariya" , "Rahul" , "priya"));

console.log(b);


a = "Harry"
'Harry'
b = "Rohan"
'Rohan'
b = "Roh'an"
"Roh'an"
b = "Roh"an"
VM194:1 Uncaught SyntaxError: Unexpected identifier 'an'Understand this errorAI
b = `Roh"an`
'Roh"an'
b = "Roh\"an"
'Roh"an'
b.charAt
ƒ charAt() { [native code] }
b.charAt(0)
'R'
b.indexOf(ha)
VM466:1 Uncaught ReferenceError: ha is not defined
    at <anonymous>:1:11
(anonymous) @ VM466:1Understand this errorAI
b = "Rohan"
'Rohan'
b.indexOf("ha")
2
b.indexOf("zz")
-1
b.startsWith("Ro")
true
b.startsWith("an")
false
b.endssWith("an")
VM630:1 Uncaught TypeError: b.endssWith is not a function
    at <anonymous>:1:3
(anonymous) @ VM630:1Understand this errorAI
b.endsWith("an")
true
