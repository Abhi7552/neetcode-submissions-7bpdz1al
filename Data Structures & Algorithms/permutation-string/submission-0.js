class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let count1 = new Array(26).fill(0);
        let count2 = new Array(26).fill(0);

        // frequency of s1
        for (let ch of s1) {
            count1[ch.charCodeAt(0) - 97]++;
        }

        // initial window
        for (let i = 0; i < s1.length; i++) {
            count2[s2.charCodeAt(i) - 97]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (count1[i] === count2[i]) matches++;
        }

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            if (matches === 26) return true;

            let indexRight = s2.charCodeAt(right) - 97;
            count2[indexRight]++;
            if (count2[indexRight] === count1[indexRight]) {
                matches++;
            } else if (count2[indexRight] === count1[indexRight] + 1) {
                matches--;
            }

            let indexLeft = s2.charCodeAt(left) - 97;
            count2[indexLeft]--;
            if (count2[indexLeft] === count1[indexLeft]) {
                matches++;
            } else if (count2[indexLeft] === count1[indexLeft] - 1) {
                matches--;
            }
            left++;
        }

        return matches === 26;
    }
}
