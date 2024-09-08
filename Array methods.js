// 1
const numAndBool = (num, bool) => {
  
    if (bool) {
      result = '-'.repeat(num) + '>';
    } else {
      result = '<' + '-'.repeat(num);
    } 

    return result
  } 

// console.log(numAndBool(5, false));

// 2
function playNum() {
  let num = [];
  let input;

  while (true) {
      input = prompt("הכנס מספר או '0' כדי לעצור את התכנית:");
      let number = parseFloat(input);

      if (number === 0) {
          break;
      }

      num.push(number);
  }

  if (num.length === 0) {
      console.log("No num were received.");
      return;
  }

  const maxNumber = Math.max(...num);
  const count = num.length;
  const sum = num.reduce((acc, curr) => acc + curr, 0);
  const average = sum / count;
  const fourthNumber = count >= 4 ? num[3] : num[count - 1];

  console.log("Max :", maxNumber);
  console.log("Amount :", count);
  console.log("Sum :", sum);
  console.log("Average :", average);
  console.log("Four  num or last :", fourthNumber);
}
// playNum();

// 3
const printTriple = (num) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += '*'.repeat(i + 1) + '\n';
  }
  return result;
};
// console.log(printTriple(3));

// 4

const printTInvertedTriangle = (num) => {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += '*'.repeat(num - i) + '\n';
  }
  return result;
};
// console.log(printTInvertedTriangle(3));

// 5


// 6
const reverseNum = (num) => {
  if (num / 10 ) {
    return num;
  }
  return num % 10 + reverseNum(Math.floor(num / 10));
};
// console.log(reverseNum(1234));


// 7
const funTrim = (str) => {
  if (str.trim() === '') {
    return '';
  }
  if (str.trim() === ' ') {
    return ' ';
  }
  return str.trim();
};
console.log(funTrim('  hello world  '));