function Subject(){
    this.observers = [] // array function
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn)
    },
    unsubscribe: function(fnToRemove) {
        this.observers = this.observers.filter(fn => fn !== fnToRemove)
    },
    trigger: function() {
        this.observers.forEach(fn => fn.call())
    }
}

const subject = new Subject();

function observer1(){
    console.log("observer1");
}


function observer2(){
    console.log("observer2");
}


function observer3(){
    console.log("observer3");
}


subject.subscribe(observer1)
subject.subscribe(observer2)
subject.subscribe(observer3)


subject.unsubscribe(observer1)


subject.trigger()