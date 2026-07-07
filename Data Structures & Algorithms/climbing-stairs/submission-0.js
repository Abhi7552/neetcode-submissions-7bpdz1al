class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let dp=new Array(n).fill(0);

        dp[0]=0;
        dp[1]=1;
        dp[2]=2;
        dp[3]=3;

        for(let i=4;i<=n;i++){
            dp[i]=dp[i-1]+dp[i-2];
        }

        return dp[n];
    }
}
