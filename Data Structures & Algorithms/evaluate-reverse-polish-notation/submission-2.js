class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack=[];

        for(let ch of tokens){
            if(ch==='+'){
                let v1=stack.pop();
                let v2=stack.pop();
                let total=parseInt(v2)+parseInt(v1);
                stack.push(total.toString())
            }else if(ch==='-'){
                let v1=stack.pop();
                let v2=stack.pop();
                let total=parseInt(v2)-parseInt(v1);
                stack.push(total.toString())
            }else if(ch==='*'){
                let v1=stack.pop();
                let v2=stack.pop();
                let total=parseInt(v2)*parseInt(v1);
                stack.push(total.toString())
            }else if(ch==='/'){
                let v1=stack.pop();
                let v2=stack.pop();
                let total=parseInt(v2)/parseInt(v1);
                stack.push(total.toString())
            }else{
                stack.push(ch);
            }
        }

        return Math.floor(stack[stack.length-1]);
    }
}
