let nums = [0,0,1,1,1,1,2,2,3,3,4,5];

//very clean but usesed a second array and the problem asks you to not use a second array 
const removeDuplicates = (() => {
let ray = new Set([...nums]);
nums = ray
console.log(nums)
});

// removeDuplicates()

// const removeDuplicates = (() => {

//      for (i=0; i<nums.length; i++) {
//         // if (isNaN(nums[i]) ){
//         //    // console.log(nums[i])
//         //     nums.splice(i,1)
//         //     //console.log(nums)
//         // }
//        if (nums[i]===nums[i+1]){
//             nums.splice(i,1)
//             i--
//        }      
//     }
//     k = nums.length
//     console.log(k)
// });

removeDuplicates()
