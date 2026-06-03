class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left=Math.max(...weights);
        let right=weights.reduce((a,b)=>a+b,0);
        let res=right;

        function canShip(capacity){
            let d=1;
            let currLoad=0;

            for(let w of weights){
                if(currLoad+w>capacity){
                    d++;
                    currLoad=0;
                }
                currLoad+=w;
            }

            return d<=days;
        }

        while(left<=right){
            let mid=Math.floor((left+right)/2);

            if(canShip(mid)){
                res=mid;
                right=mid-1;
            }else{
                left=mid+1;
            }
        }

        return res;
    }
}
