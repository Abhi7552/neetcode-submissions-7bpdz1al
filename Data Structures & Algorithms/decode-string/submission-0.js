class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let res="";
        let numStack=[];
        let charStack=[];
        let num=0;

        for(let ch of s){
            if(!isNaN(ch)){
                num=num*10+parseInt(ch);
            }else if(ch==='['){
                numStack.push(num);
                charStack.push(res);
                num=0;
                res="";
            }else if(ch===']'){
                let repeatTime=numStack.pop();
                let charS=charStack.pop();

                res=charS+res.repeat(repeatTime);
            }else{
                res+=ch;
            }
        }

        return res;
    }
}
