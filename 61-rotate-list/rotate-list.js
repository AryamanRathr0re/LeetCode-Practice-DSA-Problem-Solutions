/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    //calculate the length
    let len=0
    let curr=head
    while(curr){
        curr=curr.next
        len++
    }
    if(!head||!head.next){
        return head
    }
    // checck for k is greater than len
    k=k%len

    //use fast and slow to reach at k point where we need to rotate
    let s=head
    let f=head
    for(let i=0;i<k;i++){
        f=f.next
    }
    while(f.next){
        s=s.next
        f=f.next
    }
    //make new head as f will point to curr head and s will become new head
    f.next=head
    let newHead=s.next
     s.next=null

     return newHead
};