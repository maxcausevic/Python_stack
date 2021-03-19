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

// SLList: Prepend Value
// Given a value and a target value, create a node containing value and insert it before the node containing the target value in a singly linked list.
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
    prependValue(val){
        let runner = this.head;
        let val = this.head;
        let target = this.tail;

        while(runner){
            if(runner.val = runner.next)
                runner = this.tail;
                runner = target;


        }
    }


// SLList: Append Value
// Given a value and a target value, create a node containing value and insert it after the node containing the target value in a singly linked list.

// SLList: Remove Negatives
// Create a function that removes all negative values from a list, then return the modified list.

// Second to Last Value
// Create a function that returns the value in the second-to-last node.

// Partition
// Create a function that, given a value, locates the first node with that value, moves all nodes with values less than that value to be earlier, and moves all nodes with values greater than that value to be later. Otherwise, original order need not be perfectly preserved. Return the list when complete.

// lowerList, higherList
// Traverse the list and 

// 2 > 8 > 1 > 4 > 10 > 9 > 5
// 2 > 1 > 4 > 8 > 10 > 9 > 5
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

    populateRandom(max, length) {
        for (let i = 1; i <= length; i++) {
            let temp = Math.floor(Math.random() * max) + 1;
            this.addFront(temp);
        }
        return this;
    }

    addFront(val) {
        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    contains(val) {
        if (this.isEmpty()) {
            console.log("This SLL is empty.")
            return this;
        } else {
            let runner = this.head;
            while (runner) {
                if (runner.val === val) {
                    console.log(`Value (${val}) found.`)
                    return true;
                }
                runner = runner.next;
            }
            console.log(`Value (${val}) not found.`)
            return false;
        }
    }

    printVals() {
        if (this.isEmpty()) {
            console.log("This SLL is empty.")
            return this;
        } else {
            let runner = this.head;
            let output = `**********\n`
            while (runner) {
                output += `${runner.val.toString()} > `;
                runner = runner.next;
            }
            console.log(output);
        }
        return this;
    }
}
//Second to Last Value
// Create a function that returns the value in the second-to-last node.
    secondTolast(val){
        let runner = this.head;
        let secondtolast = runner.next.next-runner.next;
        if (runner.val === secondtolast.val){
            console.log(`second to last value (${val}) found.`);
            return true;
        }
    }
