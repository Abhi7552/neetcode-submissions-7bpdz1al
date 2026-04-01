class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if(x===0) return 0;
        if(x===1) return 1;
        let n=Math.floor(x/2);

        for(let i=1;i<=n;i++){
            if((i*i)===x) return i;
            if((i*i)>x) return i-1;
        }
    }
}
