class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n=prices.length;
        let maxProfit=0;

        for(let i=0;i<n-1;i++){
            let j=i+1;
            if(prices[j]<prices[i]){
                continue;
            }

            while(prices[j]>prices[i]){
                maxProfit=Math.max(maxProfit,prices[j]-prices[i]);
                j++;
            }
        }

        return maxProfit;
    }
}
