/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let visitednodes=new Set()
    let curr=head
    while(curr!==null){
        if(visitednodes.has(curr)) return true
        visitednodes.add(curr)
        curr=curr.next
    }
    return false
};