class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let track=new Set();

        for(let ele of nums){
            if(!track.has(ele)){
                track.add(ele);
            }else{
                return true;
            }
        }

        return false;
    }
}
