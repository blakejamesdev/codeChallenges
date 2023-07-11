
let rotateArray = ((nums, k) => {
  k %= nums.length
  let reverse = ((i,j) => {
    while (i<j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        i++
        j--
    };
  });
  reverse(0,nums.length-1)
  reverse(0, k-1)
  reverse(k, nums.length-1) 
});

let nums = [1,2,3,4,5,6,7]
let k = 3 
rotateArray(nums,k) 
console.log(nums)