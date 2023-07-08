let nums = [2,2,3,3]
let val = 3
const removeElement = (() => {
    for (i=0; i<= nums.length; i++){
        if (nums[i] == val) {
            nums.splice(i,1)
            i--
        }
        
    }
    let k = nums.length
    console.log(k, nums)
});

removeElement()
