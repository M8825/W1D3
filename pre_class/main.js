for (let i = 0; i < 10; i += 1) {
  console.log('Hello: ' + i);
}
console.log('')
console.log('Making loops dynamic: ')
function printNums(start, end, step) {
  for (let i = start; i <= end; i += 1) {
    console.log(i);
  }
}

printNums(0, 12, 1);  // prints all numbers from 0 to 12
printNums(20, 30, 2); // prints all even numbers from 20 to 30
printNums(0, 12, 3);  // prints all multiples of 3 from 0 to 12
printNums(0, 95, 5);  // prints all multiples of 5 from 0 to 95

console.log('')
console.log('While loop')

let i = 0;
while (i < 7) {
  console.log(i);

  i++;
}

console.log('')
console.log('Print 10:')
function printN(n) {
  let i = 0;

  while (i < n) {
    console.log(i);
    i++;
  }
}

printN(10);


console.log('')
console.log('Print 10 with for loop:')
function printNfor(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
}

printNfor(10);

console.log('')
console.log("Looping Keywords: ")
function printNSkip5(n) {
  for (let i = 0; i < n; i++) {
    if (i % 5 === 0) {
      continue;
    }

    console.log(i);
  }
}

printNSkip5(30);


console.log('')
console.log('Multiple of 5:')
function printNStop5(n) {
  let i = 1;
  while (i < n) {
    if (i % 5 === 0) {
      break;
    }

    console.log(i);
    i += 1;
  }
}

printNStop5(30);