class MyHashMap {
    constructor() {
        this.size=1000;
        this.buckets=Array.from({length:this.size},()=>[]);
    }

    _hash(key){
        return key%this.size;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let idx=this._hash(key);
        for(let pair of this.buckets[idx]){
            if(pair[0]===key){
                pair[1]=value;
                return;
            }
        }

        this.buckets[idx].push([key,value]);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let idx=this._hash(key);
        for(let pair of this.buckets[idx]){
            if(pair[0]===key) return pair[1];
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let idx=this._hash(key);;

        this.buckets[idx]=this.buckets[idx].filter(pair=>pair[0]!==key);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
