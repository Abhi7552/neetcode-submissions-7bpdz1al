class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix) {
        let n=matrix.length;
        let m=matrix[0].length;

        let res=Array.from({length:m},()=>Array(n));

        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                res[j][i]=matrix[i][j];
            }
        }
        return res;
    }
}
