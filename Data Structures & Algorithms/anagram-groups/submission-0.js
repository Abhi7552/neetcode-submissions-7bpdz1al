class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map=new Map();

        for(let word of strs){
            let freq=Array(26).fill(0);
            for(let ch of word){
                freq[ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
            }

            let k=freq.join('#');

            if(!map.has(k)) map.set(k,[]);
            map.get(k).push(word);
        }


        return Array.from(map.values());
    }
}
