class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack=[];
        
        for(let ast of asteroids){
            let alive=true;

            while(alive && stack.length>0 && stack[stack.length-1]>0 && ast<0){
                let top=stack[stack.length-1];

                if(Math.abs(top)<Math.abs(ast)){
                    stack.pop();
                    continue;
                }else if(Math.abs(top)===Math.abs(ast)){
                    stack.pop();
                    alive=false;
                }else{
                    alive=false;
                }
            }

            if(alive){
                stack.push(ast);
            }
        }

        return stack;
    }
}
