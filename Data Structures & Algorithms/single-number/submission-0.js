class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let map=new Map();

        for(let num of nums){
            map.set(num,(map.get(num)||0)+1);
        }

        let arr=[...map.entries()].sort((a,b)=>a[1]-b[1]);

        return arr[0][0];
    }
}
