class Solution {
    /**
     * @param {number} columnNumber
     * @return {string}
     */
    convertToTitle(columnNumber) {
        let ans="";
        while(columnNumber>0){
            columnNumber--;
            let rem=columnNumber%26;

            ans=String.fromCharCode(65+rem)+ans;
            
            columnNumber=Math.floor(columnNumber/26);
        }

        return ans;
    }
}
