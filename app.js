const iterator = Array(7).keys()
const arr = Array.from(iterator)

arr.reduce((acc) => {
  const result = acc + '#'
  console.log(result);
  return result
}, '' )
/****************************************/
function fizzBuzz() {
  let counter = 1
  while(counter <= 100) {
    counter % 3 === 0 && counter % 5 === 0
    ? console.log(`${counter} - FizzBuzz`)
    : counter % 3 === 0 && console.log(`${counter} - Fizz`)
    || counter % 5 === 0 && console.log(`${counter} - Buzz`)
   counter++ 
  }
}
fizzBuzz()
/******************************************/
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {   
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);