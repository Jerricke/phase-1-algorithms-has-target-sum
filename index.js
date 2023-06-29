function hasTargetSum(array, target) {
  // Write your algorithm here
  try {
    let i = 0;
    array.forEach(num =>{
      const modArray = [...array]
      modArray.splice(i, 1)
      i = i + 1
  
      modArray.forEach( num2 =>{
        if ((num + num2) === target) {
          console.log(num + num2);
            throw new error(); 
        } 
      })
    })
    return false;
  }
  catch {
    return true;
  }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  a method to take out only one number from the array, in order
  with the number taken out, check the sum with every other number in the array
  check if it matches target
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
