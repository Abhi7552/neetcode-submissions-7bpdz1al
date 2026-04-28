class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let res=[];
        let reqL=Math.floor(nums.length/3);
        let map=new Map();
        for(let num of nums){
            map.set(num,(map.get(num)||0)+1);
        }

        for(let [key,val] of map.entries()){
            if(val>reqL){
                res.push(key);
            }
        }

        return res;
    }
}
