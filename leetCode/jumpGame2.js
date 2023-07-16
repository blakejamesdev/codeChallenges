

const jump = ((nums) => {
    if (nums.length <= 1) {
        return 0;
    }
    let currJumpEnd = 0;
    let farthest = 0;
    let jumps = 0;
  
    for (let i = 0; i < nums.length - 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
  
      if (i === currJumpEnd) {
        jumps++;
        currJumpEnd = farthest;
      }
  
      if (farthest >= nums.length - 1) {
        jumps++;
        return jumps;
      }
    }
  
    throw new Error("It's not possible to reach the end");
  
});
let nums = [2,3,1,1,4];
let result = jump(nums);
console.log(result);
