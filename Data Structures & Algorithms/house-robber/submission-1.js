class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let n=nums.length;
        let dp=new Array(n).fill(0);
        dp[0]=nums[0];
        dp[1]=nums[1];

        for(let i=2;i<nums.length;i++){
            let gre=dp[i-2];
            if(i>2){
                gre=Math.max(dp[i-2],dp[i-3]);
            }
            dp[i]=nums[i]+gre;
        }

        let largest=0;

        for(let val of dp){
            if(largest<val){
                largest=val;
            }
        }
        console.log(dp)

        return largest;
    }
}
