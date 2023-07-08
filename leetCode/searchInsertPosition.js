let nums = [1,3,5,6]
let target = 2

const SearchInsert = (() => {
    if (target > nums[(nums.length)-1]){
        console.log(nums.length)
    }
    let i = 0
    while (i < nums.length){
        if (nums[i]>=target){
            console.log(i)
            i+=10000
        }
        i++
    }
})
SearchInsert()