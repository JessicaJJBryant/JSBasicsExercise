// 1
console.log(7);

// 2
/*
The five main JavaScript data/value types (primitives) are:
1. number
2. string
3. boolean
4. null
5. undefined
*/

// 3
/*
The 6 JavaScript operator symbols are:
1. +
2. -
3. *
4. /
5. **
6. %
*/

//4
console.log(5%2);
console.log(5%4);

// 5
console.log('I\'M MARY POPPINGS, Y\'ALL');

// 6
console.log("Hawk" + "eye");

// 7
console.log("JJ".length + "Bryant".length);

// 8
console.log("Avengers: Endgame"[16]);

// Bonus 1
console.log("\\");

// Bonus 2
console.log(5**4-9);

// Bonus 3
console.log(("I".length - "Am".length + "Iron".length) % "Man".length);
console.log("I".length -"Am".length + "Iron".length - "Man".length);
console.log("I".length ** "Am".length - "Iron".length + "Man".length);
console.log(("I".length + ("Am".length * "Iron".length)) % "Man".length);
console.log((("I".length + "Am".length) ** "Iron".length) % "Man".length);
// I missed this following one.
console.log("I".length % "Am".length - "Iron".length % "Man".length);


// Bonus 4
console.log("CAP"[1]);
console.log("VISION"[0]);
console.log("OKOYE"[4]);
console.log("NICK FURY"[0]);
console.log("GROOT"[0]);
console.log("DOCTOR STRANGE"[13]);
console.log("THOR"[3]);
console.log("STAR-LORD"[0]);
// Dave's way
console.table (["CAP"[1], "VISION"[0], "OKOYE"[4], "NICK FURY"[0], "GROOT"[0], "DOCTOR STRANGE"[13], "THOR"[3], "STAR-LORD"[0]]);
// Matt's other way all on one console.log line
console.log ("CAP"[1]+ "\n" + "VISION"[0]+ "\n" + "OKOYE"[4]+ "\n" + "NICK FURY"[0]+ "\n" + "GROOT"[0]+ "\n" + "DOCTOR STRANGE"[13]+ "\n" + "THOR"[3]+ "\n" + "STAR-LORD"[0]);

// Can also use var or const instead of let
// Bonus 5
let m = 25;
let c = 4;
let u = m + c;
