
function logBetween(lowNum, highNum) {
  for (let i = lowNum; i <= highNum; i += 1){
    console.log(i);
  }
}


logBetween(-1, 2);
console.log('')
logBetween(14, 6);
console.log('')
logBetween(4,6);

console.log('//////')
function printFive(max) {
  for (i = 0; i < max; i += 5) {
    console.log(i)
  }
}

function printFive2(max) {
  for (i = 0; i < max; i += 1) {
    if (i % 5 === 0) {
      console.log(i)
    }
  }
}

printFive(20);
console.log('')
printFive2(20);

console.log('///////')
function printReverse(min, max) {
  for (i = max - 1; i > min; i -= 1) {
    console.log(i)
  }
}

printReverse(13, 18);
console.log('')
printReverse(90, 94);

console.log("/////")
function sumNums(max) {
  let sum = 0;
  for (i = 1; i <= max; i += 1) {
    sum += i
  }

  return sum
}

console.log(sumNums(4)); // => 10
console.log(sumNums(10)); // => 55
console.log(sumNums(365)); // => 66795

console.log('//////')
function isFactorOf(number, factor) {
  return number % factor === 0 
}

console.log(isFactorOf(6,2)); // => true
console.log(isFactorOf(-6, 2)); // => true
console.log(isFactorOf(5,0)); // => false
console.log(isFactorOf(22, 7)); // => false



console.log('////////')
function fizzBuzz(max) {
  for (i = 3; i < 20; i += 1) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i)
    }
  }
}

fizzBuzz(20);

console.log('/////')
function isPrime(number) {
  i = 2;
  while (i < number) {
    if (number % i === 0){
      return false;
    }

    i += 1;
  }

  return true;
}

// Examples:

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true


/// Loop Muscle Memory
console.log('//////')
function printForwards(start, end) {
  for (let counter = start; counter <= end; counter++) {
    console.log(counter)
  }
}

printForwards(4, 11);

console.log('/////')
function printBackwards(start, end) {
  let i = end;
  while (i >= start) {
    console.log(i);
    i--;
  }
}

printBackwards(-5, 6)


let foo = function(name) {
  return "Dance " + name + ", dance! ";
}

let bar = function() {
  let str = "";

  for (let i = 0; i < 3; i += 1) {
    str += foo("Anthony");
    str += foo("Haseeb"); 
    str += foo("Winnie");
    str += " | ";
  }

  return str;
}


let result = bar();
console.log(result);