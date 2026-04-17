class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        function isP(str,l,r){
            while(l<r){
                if(str[l]!==str[r]) return false;
                l++;
                r--;
            }

            return true;
        }

        let left=0; let right=s.length-1;

        while(left<right){
            if(s[left]!==s[right]){
                return isP(s,left+1,right)||isP(s,left,right-1);
            }

            left++;
            right--;
        }

        return true;
    }
}
