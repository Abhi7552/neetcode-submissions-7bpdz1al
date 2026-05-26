class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let fleets=[];

        let n=position.length;

        for(let i=0;i<n;i++){
            let time=(target-position[i])/speed[i];

            fleets.push([position[i],time]);
        }
        fleets.sort((a,b)=>b[0]-a[0]);
        let stack=[];

        for(let [pos,time] of fleets){
            if(stack.length===0 || time>stack[stack.length-1]){
                stack.push(time);
            }
        }
        return stack.length;
    }
}
