// SLList: Remove Head
// Create a function that removes the head node from a singly linked list.

// SLList: Remove Tail
// Create a function that removes the tail node from a singly linked list.

//class Node {
    //constructor(val) {
        //this.val = val;
        //this.next = null;
    //}
//}

//class SinglyLinkedList {
    //constructor() {
        //this.head = null;
    //}
    //removeHead(){
        //if(this.head== null){
        //return false
        //}
        //this.head = this.head.next
}
    //removeTail(){
        //let runner = this.head;
        //while(runner){
            //if (runner.next == runner.next.next)
            //runner.next = newTail
        //}

    //}

    //addBack(val){
        //const newTail = new Node(val);
        //let runner = this.head;

        //if(runner === null){
            //this.head = newTail
        //} else {
            //while(runner.next) {
                runner = runner.next;
            //}
            //runner.next = newTail;
        //}
        //return this;
    //}

    //populateRandom(max, length) {
        //for (let i = 0; i <= length; i++) {
            //let temp = Math.floor(Math.random() * max) + 1;
            //this.addBack(temp);
        //}
        //return this;
    //}

    //isEmpty() {
        //return this.head === null;
    //}

    //printVals() {
        //if (this.isEmpty()) {
            //console.log("This SLL is empty.")
            //return this;
        //} else {
            //let runner = this.head;
            //let output = `**********\n`
            //while (runner) {
                //output += `${runner.val.toString()} > `;
                //runner = runner.next;
            //}
            //console.log(output);
        //}   
        //return this;
    //}
//}

//let mySLL = new SinglyLinkedList()
//mySLL.populateRandom(200, 20).printVals()

// SLList: Move Min to Front
// Create a function that moves the node with the minimum value to the front of a singly linked list.

// Create a runner, send them along the list to find the min node.
// Snip the minNode out.Previous node's next should point to minNode's next.
// Set minNode's next to the current head.
// Make minNode the new head.
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    
    minTofront(arr) {
        let runner = this.head;
        let min = this.head;
        let previous = this.head;
        while(runner){
            if (runner.val < min.val){
                min = runner;
            }
            runner = runner.next;
        }



// SLList: Move Max to Back
// Create a function that moves the node with the maximum value to the tail of a singly linked list.
