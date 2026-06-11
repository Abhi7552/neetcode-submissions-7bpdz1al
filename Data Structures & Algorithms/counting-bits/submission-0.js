class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res=[];

        for(let i=0;i<=n;i++){
            let val=i.toString(2);
            let bits=0;
            for(let j=0;j<val.length;j++){
                if(val[j]==='1') bits++;
            }
            res.push(bits);
        }

        return res;
    }
}
