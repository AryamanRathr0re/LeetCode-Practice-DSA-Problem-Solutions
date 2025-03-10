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
    //find the length of list
    let len=1
    let temp=head
    if(!head||!head.next) return head
    while(temp.next){
        temp=temp.next
        len++
    }
    k=k%len
    if(k===0) return head
    let newtail=head
    for(let i=0;i<len-k-1;i++){
        newtail=newtail.next
    }
    let newhead=newtail.next
    newtail.next=null
    temp.next=head
    return newhead
};