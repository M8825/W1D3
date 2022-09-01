function printRange(start, end) {
  for (let i = start; i <= end; i ++) {
      console.log(i)
  }
}

printRange(5, 10)

function isPrime(n) {
  let i = 2;
  while (i < n) {
    if(n % i === 0) {
      return false
    }
    i++;
  }

  return true;
}

console.log(isPrime(20))


function revrseString(string) {
  let i = string.length - 1;
  let result = ''

  while (i >= 0) {
    result += string[i];
    i--;
  }
  return result;
}

console.log(revrseString("Malkhaz"));

function breakFive() {
  for (let i = 0; true; i++) {
    console.log(i)
    if (i === 5){
      break
    }
  }
}

breakFive();


//////
////////////////////////////////////////////////////////////////////////////////
// return vs. break vs. continue
////////////////////////////////////////////////////////////////////////////////
function earlyReturn(num) { // 10
  console.log('before the loop'); 

  for (let i = 0; i <= num; i++) { // i = 1
    if (i === 5) {
      console.log('i is equal to 5');
//      break;
      continue;
    }

    console.log(i); // console.log(0)
  }

  console.log('after the loop');
}

earlyReturn(10);


function revString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  return result;
}

console.log(revString("Mike"))