
var MyStack = function() {
    this.q1=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
   let n=this.q1.length
   for(let i=0;i<n-1;i++){
    this.q1.push(this.q1.shift())
   }
   let lastEle=this.q1.shift()
   return lastEle
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n=this.q1.length
    for(let i=0;i<n-1;i++){
        this.q1.push(this.q1.shift())
    }
    let topEle=this.q1.shift()
    this.q1.push(topEle)


    return topEle
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    let n=this.q1.length
    return n===0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */