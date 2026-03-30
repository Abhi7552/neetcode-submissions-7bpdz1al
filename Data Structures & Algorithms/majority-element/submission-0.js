class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let ans;
        let n=Math.floor(nums.length/2);
        let map=new Map();

        for(let num of nums){
            map.set(num,(map.get(num)||0)+1);
        }
        
        let arr=[...map.entries()].sort((a,b)=>b[1]-a[1]);

        return arr[0][1]>n?arr[0][0]:-1;
    }
}
