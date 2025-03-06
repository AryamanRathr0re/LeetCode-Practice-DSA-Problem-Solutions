/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow=head
    let fast=head
    if(head===null||(head.next===null)){
        return null
    }
    while(fast!==null&&fast.next!==null){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast) break
    }
    if(slow!==fast) return null

    let p=head

    while(p!==slow){
        p=p.next
        slow=slow.next
    }
    return p
};