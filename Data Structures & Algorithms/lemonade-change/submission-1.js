class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let map=new Map();

        for(let bill of bills){
            if(bill===10){
                if(map.get(5)>0){
                    map.set(5,map.get(5)-1);
                }else{
                    return false;
                }
            }else if(bill===20){
                if(map.get(10)>0 && map.get(5)>0){
                    map.set(10,map.get(10)-1);
                    map.set(5,map.get(5)-1);
                }else if(map.get(5)>=3){
                    map.set(5,map.get(5)-3);
                }else{
                    return false;
                }
            }
            map.set(bill,(map.get(bill)||0)+1);
        }

        return true;
    }
}
