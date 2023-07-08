
// solution from leetcode need to do more study on listnodes and linked lists to really understand them 

const mergeTwoLists = ((list1, list2) => {
let head = new ListNode(null)

let current = head

while (list1 && list2) {
    if (list1.val <= list2.val) {
        current.next=list1
        list1= list1.next
    }else{
        current.next = list2
        list2= list2.next
    }
    current= current.next
}
let remaining = list1 || list2
current.next= remaining

return head.next

});
mergeTwoLists()


// old code that only worked in vs 

// let merge = [];
// let index = 0
// let index1 = 0
// let index2 = 0
// let mergeLength = (list1.length+list2.length)

// while (index < mergeLength ){

//     const isList1Depleted = index1 >= list1.length;
//     const isList2Depleted = index2 >= list2.length;

//     if (!isList1Depleted && (isList2Depleted || (list1[index1] < list2[index2]))){
//         let current = list1[index1];
//         merge[index] = current;
//         index1++
        
//     }else{
//         let current = list2[index2];
//         merge[index] = current 
//         index2++
       
//     }
//  index++
// };
// console.log(merge)

// this code merges the two lists then resorts them 
// list3 = [...list1,...list2]
// list3.sort(function(a, b){return a - b});
// console.log(list3)
// });


