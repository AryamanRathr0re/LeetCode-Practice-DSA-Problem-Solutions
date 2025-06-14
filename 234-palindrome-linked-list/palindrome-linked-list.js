/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    //find the middle of element first

    let slow=head
    let fast=head
    while(fast!=null&&fast.next!=null){
        slow=slow.next
        fast=fast.next.next
    }

    // reverse the second half of LL
    let prev=null

    let curr=slow
    while(curr!==null){
        let temp=curr.next
        curr.next=prev
        prev=curr
        curr=temp
    }

    //check if the both the LL are equal or not

    let firstLL=head
    let secondLL=prev
    while(secondLL!==null){
        if(firstLL.val!==secondLL.val) {
            return false
        }
        firstLL=firstLL.next
        secondLL=secondLL.next
    }
    return true
    
};