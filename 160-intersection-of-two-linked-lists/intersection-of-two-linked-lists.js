/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let sett=new Set()
    while(headB!=null){
        sett.add(headB)
        headB=headB.next
    }
    while(headA!=null){
        if(sett.has(headA)) return headA
        headA=headA.next
    }
    return null
};