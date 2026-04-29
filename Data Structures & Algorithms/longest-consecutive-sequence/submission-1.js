class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0) return 0;

        let set=new Set(nums);
        let longest=0;

        for(let num of set){
            if(!set.has(num-1)){
                let currNum=num;
                let length=1;

                while(set.has(currNum+1)){
                    currNum++;
                    length++;
                }

                longest=Math.max(longest,length);
            }
        }

        return longest;
    }
}
