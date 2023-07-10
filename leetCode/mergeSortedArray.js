let nums1 = [-1,-1,0,0,0,0];
let nums2 = [-1,0];
let m = 4;
let n =nums2.length;

//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

let merge = (() => {
    let k = (m+n);
    for (i=0;i<k;i++) {
        if (nums1.length > m){
            nums1.pop();
        } else break;
      
    }
    // console.log(nums1)
    for (i=0; i<k; i++){
        if (!nums2[0] && nums2[0] !== 0) break;
        if (!nums1[i] && nums1[i] !== 0) {
            console.log('error')
            nums1.push(nums2[0]);
            nums2.shift();
        }
        if (nums1[i] > nums2[0] && i == 0){
            nums1.unshift(nums2[0]);
            nums2.shift();
        } else if (nums1[i] > nums2[0]){
            nums1.splice(i,0,nums2[0]);
            nums2.shift();
        }
        console.log(nums1)
    }
}
);
merge()
