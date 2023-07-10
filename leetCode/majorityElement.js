


let majorityElement = ((nums) => {
    let count = 0;
    let candidate = null;
  
    // Find potential majority element
    for (let num of nums) {
      if (count === 0) {
        candidate = num;
      }
  
      count += num === candidate ? 1 : -1;
    }
  
    // Verify if the candidate is the majority element
    count = 0;
    for (let num of nums) {
      if (num === candidate) {
        count++;
      }
    }
  
    if (count > Math.floor(nums.length / 2)) {
      return candidate;
    } else {
      // Error case: Majority element does not exist
      throw new Error("Majority element does not exist");
    }
  
}
);
let nums =[2,2,1,1,1,1,2];
const majority = majorityElement(nums);
console.log(`The majority element is: ${majority}`)