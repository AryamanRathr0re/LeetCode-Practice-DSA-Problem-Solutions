/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    // one pass algo

    let sentinal=new ListNode()
    sentinal.next=head
    let prev=sentinal
    let slow=sentinal
    let fast=head
    for(let i=0;i<n;i++){
        fast=fast.next
    }
    while(fast!==null){
        slow=slow.next
        fast=fast.next
    }
    slow.next=slow.next.next

    return sentinal.next
    
};