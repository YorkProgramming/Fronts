/* Add Front */

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        const newNode = {
            data: value,
            next: this.head,           // sets the next property to the current head
        };

        this.head = newNode;        // sets the head to the new node
        
        return this.head;
    }

/* Remove Front */

    removeFront() {         
        if (!this.head) {       
            return null;      
        }

        const currentHead = this.head;
        this.head = currentHead.next;           // sets the head to the next node
        currentHead.next = null;                // remove route to old head node

        return this.head;
    }

    front() {
        return this.head ? this.head.data : null;       // returns the data of the head node
        }
}

SLL1 = new SLL()

/* Add Front */
console.log(SLL1.addFront(18));
console.log(SLL1.addFront(5));
console.log(SLL1.addFront(73));
console.log(SLL1.front(), "Added nodes");

/* Remove Front */
console.log(SLL1.removeFront()); 
console.log(SLL1.removeFront()); 
console.log(SLL1.removeFront());
console.log(SLL1.front(), "nodes");

