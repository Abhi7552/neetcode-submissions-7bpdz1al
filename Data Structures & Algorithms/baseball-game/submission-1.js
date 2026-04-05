class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack=[];

        for(let char of operations){
            if(char==="+"){
                let ele=parseInt(stack[stack.length-1])+parseInt(stack[stack.length-2]);
                stack.push(ele);
            }else if(char==="C"){
                stack.pop();
            }else if(char==="D"){
                let ele=stack[stack.length-1]*2;
                stack.push(ele);
            }else{
                stack.push(char);
            }
        }

        return stack.map(Number).reduce((a,b)=>a+b,0);
    }
}
