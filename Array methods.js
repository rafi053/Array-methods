// 1
const numAndBool = (num, bool) => {
  
    if (bool) {
      result = '-'.repeat(num) + '>';
    } else {
      result = '<' + '-'.repeat(num);
    } 

    return result
  } 

console.log(numAndBool(5, false));

// 2

 