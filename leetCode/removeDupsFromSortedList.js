let nums = [0,0,1,1,1,2,2,3,3,4];


const removeDuplicates = (() => {
    let index = 0
while (index <= (nums.length-1)){
    if (!nums[index+1] && nums[index+1] !== 0) break;
    if (nums[index] === nums[index+1]) nums.splice(index,1);
    console.log(nums);
    if (nums[index] !== nums[index+1])index++;

}
});


removeDuplicates()
