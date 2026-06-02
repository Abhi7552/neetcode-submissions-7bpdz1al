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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let len=0;
        let curr=head;

        while(curr){
            len++;
            curr=curr.next;
        }

        if(n===len) return head.next;
        console.log(len)
        let ind=len-n;

        let tillN=head;
        for(let i=1;i<ind;i++){
            tillN=tillN.next;
        }

        tillN.next=tillN.next.next;

        return head;
    }
}
