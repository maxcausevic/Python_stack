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

    addFront(val) {
        const newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    addBack(val){
        const newTail = new Node(val);
        let runner = this.head;

        if(runner === null){
            this.head = newTail
        } else {
            while(runner.next) {
                runner = runner.next;
            }
            runner.next = newTail;
        }
        return this;
    }

    printVals() {
        let runner = this.head;
        while(runner) {
            console.log(runner.val);
            runner = runner.next;
        }
        return this;
    }
}

// SLList: Contains
// Given a value, return true if that value is found in any node in the singly linked list. Return false if it is not.
    contains(val) {
        let runner = this.head;
        while(runner){
            if(runner.val === val;){
                console.log(true);
                return true
            }
        }
        return false;
        print(false);
    }
console.log(contains(5))