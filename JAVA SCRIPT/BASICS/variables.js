// Types of var in java script are-- >
// 1 - var

var a = 10;
{
  var a = 45;
  console.log(a); // Var me agar value change ki to wo whi value hojayegi chahe block ke andar hi kyu na ho but let me block ke andar ki value block ke andar hi rahhegi
}
console.log();

// 2 - let
let b = 10;
console.log(b);
{
  let b = 20; // Here let me a ki value khali isi block me accessed ho skti bahar iski value 10 hi hogi
  console.log(b);
}
console.log(b);
