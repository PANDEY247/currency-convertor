// js try...catch

// what is callback first to understand
// what is try catch block
// what Exception / Errors handling in java
// what is function

// falsy values - false , undefined, null, 0 ,nan , the empty string

// const b = new Boolean(false);
// if (b) {
//   // this condition evaluates to true
// }
// if (b == true) {
//   // this condition evaluates to false
// }

// function checkdata(){
//     if(document.form1.threeChar.value.length ===3){
//         return true;

//     }else{
//         alert(
//             `Enter exactly three characters .${document.form1.threeChar.value} is not valid`,

//         );
//     }
// }

//switch statment - A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement.

// switch example -
// switch (fruiType) {
//   case "oranges":
//     console.log("Oranges are 40 rupees per kg");
//     break;
//   case "apples":
//     console.log("apples are 120 rupees per kg");
//     break;

//   case "bananas":
//     console.log("bananas are 70 per dozen");
//     break;
//   case "cheries":
//     console.log("cherries are 90 per kg");
//     break;
//     default:
//         console.log("we are out from the ${fruitType}");

// }
// console.log("is there anything else you like in fruits")
const converToRs = (dollar) => {
  if (typeof dollar === "number") {
    return dollar * 64;
  } else {
    throw Error("Amount need to be in number");
  }
};
// const myValue = converToRs('five')
// console.log(myValue);

try {
  const myValue = converToRs("five");
  console.log(myValue);
} catch (error) {
  console.log(error);
}
console.log(" i will not run if programme crasehes");
