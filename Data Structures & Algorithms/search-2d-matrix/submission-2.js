class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m=matrix.length;
        let n=matrix[0].length;

        let i=0; let j=m-1;
        while(i<=j){
            let mid=Math.floor((i+j)/2);
            if(target<matrix[mid][0]){
                j=mid-1;
            }else if(target>matrix[mid][n-1]){
                i=mid+1;
            }else{
                let left=0, right=n-1;
                while(left<=right){
                    let middle=Math.floor((left+right)/2);
                    if(matrix[mid][middle]===target){
                        return true;
                    }else if(matrix[mid][middle]<target){
                        left=middle+1;
                    }else{
                        right=middle-1;
                    }
                }

                return false;
            } 
        }
        return false;
    }
}
