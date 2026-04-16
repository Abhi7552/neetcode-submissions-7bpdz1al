/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) return null;
        let prev=null;
        let curr=head;

        while(curr){
            let nextN=curr.next;
            curr.next=prev;
            prev=curr;
            curr=nextN;
        }

        return prev;
    }
}
