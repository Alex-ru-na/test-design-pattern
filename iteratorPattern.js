
const items = [1, "nothing", true, 834.34];

class Iterator{
    constructor(items){
        this.items = items;
        this.index = 0;
    }
}

Iterator.prototype = {
    hasNext: function(){
        return this.index < this.items.length;
    },
    next : function(){
        return this.items[this.index++]
    }
}

const iter = new Iterator(items);
console.log({ next : iter.next()});