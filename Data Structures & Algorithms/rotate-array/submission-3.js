class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n=nums.length;
        k=k%n;

        function reverse(arr,i,j){
            while(i<j){
                [arr[i],arr[j]]=[arr[j],arr[i]];
                j--; i++;
            }
        }

        reverse(nums,0,n-1);
        reverse(nums,0,k-1);
        reverse(nums,k,n-1);
    }
}
