class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let res=[];
        let n=nums.length;
        for(let i=0;i<n;i++){
            res.push(nums[i])
        }
        for(let i=0;i<n;i++){
            res.push(nums[i])
        }

        return res;
    }
}
