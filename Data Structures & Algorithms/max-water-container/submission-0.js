class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxH=0;
        let sum=heights.reduce((a,b)=>a+b,0);

        let i=0,j=heights.length-1;

        while(i<j){
            let h=Math.min(heights[i],heights[j]);
            let w=j-i;
            maxH=Math.max(maxH,h*w);

            if(heights[i]<heights[j]){
                i++;
            }else{
                j--;
            }
        }

        return maxH;
    }
}
