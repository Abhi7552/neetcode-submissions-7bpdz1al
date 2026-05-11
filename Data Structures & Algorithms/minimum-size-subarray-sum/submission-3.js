class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum=nums.reduce((a,b)=>a+b,0);

        if(sum<target) return 0;
        let minLen=Infinity;
        let n=nums.length;
        let left=0;
        let newS=nums[left];
        if(newS>=target) return 1;
        for(let right=1;right<n;right++){
            newS=newS+nums[right];
            while(newS>=target){
                minLen=Math.min(minLen,right-left+1);
                newS-=nums[left];
                left++;
            }
        }

        return minLen;
    }
}
