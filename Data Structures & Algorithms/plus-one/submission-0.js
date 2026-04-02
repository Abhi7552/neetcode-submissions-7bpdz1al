class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let num=0;
        for(let i=0;i<digits.length;i++){
            num=num*10+digits[i];
        }
        num+=1;
        
        let res=[];
        while(num>=10){
            res.push(Math.floor(num%10));
            num/=10;
        }
        res.push(Math.floor(num));

        let i=0,j=res.length-1;

        while(i<j){
            [res[i],res[j]]=[res[j],res[i]];
            i++;j--;
        }

        return res;
    }
}
