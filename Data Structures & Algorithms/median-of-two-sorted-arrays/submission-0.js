class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let newArr=[];

        let i=0; let j=0;

        while(i<nums1.length && j<nums2.length){
            if(nums1[i]<nums2[j]){
                newArr.push(nums1[i]);
                i++;
            }else{
                newArr.push(nums2[j]);
                j++;
            }
        }

        while(i<nums1.length){
            newArr.push(nums1[i]);
            i++;
        }

        while(j<nums2.length){
            newArr.push(nums2[j]);
            j++;
        }

        let len=newArr.length;

        if(len%2!==0){
            let mid=Math.floor(len/2);
            return newArr[mid]/1.0;
        }else{
            let mid=Math.floor(len/2);
            let sum=newArr[mid]+newArr[mid-1];

            return sum/2.0;
        }
    }
}
