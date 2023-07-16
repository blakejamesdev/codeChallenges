// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that 
// position.

// Return true if you can reach the last index, or false otherwise.

let nums = [0]
// regardless of what path you take you will always end up jumping to index 3 which is 0 and will result in a fail


let canJump = ((nums) => {
    let farthest = 0;
    if (nums.length == 1) return true;
    for (let i = 0; i < nums.length - 1; i++) {
        
        if (i > farthest) return false;

        farthest = Math.max(farthest, i + nums[i]);
  
        if (farthest >= nums.length - 1) {
        return true;
      }
    }
  
    return false;
});

const result = canJump(nums);
console.log(result)