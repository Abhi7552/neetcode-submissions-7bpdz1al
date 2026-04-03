class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length===0) return "";
        let ori=" ";
        for(let s of strs){
            ori+=s.length+"#"+s;
        }

        return ori;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(!str) return [];
        let res=[];
        let i=0;
        while(i<str.length){
            let j=i;
            while(str[j]!=="#") j++;
            let len=parseInt(str.slice(i,j));
            let word=str.slice(j+1,j+1+len);
            res.push(word);
            i=j+1+len;
        }

        return res;
    }
}
