
let nums = [0,0,1,1,1,1,2,3,3];

const removeDuplicates = (() =>{
    for (i=0; i < nums.length; i++ ) {
        let test = nums[i];
        let count = 0;
        for (j = 0; j< nums.length; j++) {
            console.log(`test ${test}, count ${count} i index ${i} j index${j}`)
            if (test == nums[j]) count++;
            if (test == nums[j] && count > 2){
                nums.splice(j,1)
                
            }
            console.log(nums)
        }
    }
});

removeDuplicates();
console.log(nums.length);