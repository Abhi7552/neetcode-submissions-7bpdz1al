class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) return "";

        const need = {};
        for (let char of t) {
            need[char] = (need[char] || 0) + 1;
        }

        let have = {};
        let required = Object.keys(need).length;
        let formed = 0;

        let left = 0, right = 0;
        let minLen = Infinity, minWindow = "";

        while (right < s.length) {
            let c = s[right];
            have[c] = (have[c] || 0) + 1;

            if (need[c] && have[c] === need[c]) {
                formed++;
            }

            while (left <= right && formed === required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minWindow = s.slice(left, right + 1);
                }

                let leftChar = s[left];
                have[leftChar]--;
                if (need[leftChar] && have[leftChar] < need[leftChar]) {
                    formed--;
                }
                left++;
            }

            right++;
        }

        return minWindow;
    }
}
