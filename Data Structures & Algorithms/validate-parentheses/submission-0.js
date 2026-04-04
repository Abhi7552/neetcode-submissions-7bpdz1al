class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[];

        for(let str of s){
            if(str==='(' || str==='{' || str==='['){
                stack.push(str);
            }else{
                if(stack.length===0) return false;

                if((str===')' && stack[stack.length-1]==='(')||
                    (str==='}' && stack[stack.length-1]==='{') ||
                    (str===']' && stack[stack.length-1]==='[')
                ){
                    stack.pop();
                }else{
                    return false;
                }
            }
        }

        return stack.length===0;
    }
}
