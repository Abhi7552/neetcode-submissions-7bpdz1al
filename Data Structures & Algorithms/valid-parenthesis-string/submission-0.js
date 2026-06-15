class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let l=0; let r=0;

        for(let ch of s){
            if(ch==='('){
                l++;
                r++;
            }else if(ch===')'){
                l--;
                r--;
            }else{
                l--;
                r++;
            }

            if(r<0) return false;
            if(l<0) l=0;
        }

        return l===0;
    }
}
