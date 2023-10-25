// Detta är en radkommentera
/**
 * Detta
 * är
 * flera
 * rader
 * kommenterer
 */

/*
Detta
är
flera
rader
kommenterer
*/

// Alla datatyper i javascript
// console.log(typeof "");
// console.log(typeof 0);
// console.log(typeof false);
// console.log(typeof {});
// console.log(typeof function() {});
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof Symbol());

// console.log - för att debugga programmet
// console.log("Hey batman!!");

// State -- name
let humanName = "Gertrude";
let humanAge = 30;

//console.log("Name:", humanName);
// console.log("Name: " + humanName + "\nAge: " + humanAge);
// console.log(`Name: ${humanName} \nAge: ${humanAge}`);


let humanDetails = "Name: " + humanName + "\nAge: " + humanAge;
console.log(humanDetails);

//console.log("" + 10 + 20 + 30 + 40 + 50) // 1020304050
// console.log("10" + (10 + 10)); // 1020
// console.log("10" + 10 + 10); // 101010
// console.log("Hej" + 1) // Hej1
// console.log("Hej" + false) // Hejfalse
// console.log(false + "Hej") // falseHej

let isAdult = humanAge >= 18;
console.log("Is adult: " + isAdult);

let isRetired = humanAge >= 65;
console.log("Is retired: " + isRetired);

let isYoung = humanAge < 120;
console.log("Is young: " + isYoung);


// if(isAdult) {
//   console.log(humanName + " is an adult");
// } else {
//   console.log(humanName + " is not an adult");
// }

if(humanAge > 18) {
  console.log(humanName + " is an adult");
}  
else if(humanAge == 18) {
  console.log(humanName + " just turned 18! wooha");
} 
else if(humanAge < 18 && humanAge > 12) {
  console.log(humanName + " is a teenager");
}
else {
  console.log(humanName + " is a child");
}