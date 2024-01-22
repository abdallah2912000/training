// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   add(val) {
//     let newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       // Shifting first elment to add inserted elment in top
//       let temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     return ++this.size;
//   }
//   del() {
//     if (!this.first) return null;

//     let temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   enqueue(val) {
//     let newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     return ++this.size;
//   }
//   dequeue() {
//     if (!this.first) return null;

//     let temp = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

// // Singly Linked List

// class singleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   // Add to the end
//   push(val) {
//     const newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   // Remove Head
//   shift() {
//     if (!this.head) return undefined;
//     let currHead = this.head;
//     this.head = currHead.next;
//     this.length--;
//     if (this.length === 0) {
//       this.tail = null;
//     }
//     return currHead;
//   }
//   // Add to the start
//   unshift(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     }
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   // Remove Tail
//   pop() {
//     if (!this.head) return undefined;

//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
//   // get item
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let counter = 0;
//     let current = this.head;
//     while (counter !== index) {
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }
//   // set items
//   set(index, val) {
//     let foundNode = this.get(index);
//     if (foundNode) {
//       foundNode.value = val;
//       return true;
//     }
//     return false;
//   }
//   //   Inserting items
//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === this.length) return this.push(val);
//     if (index === 0) return this.unshift(val);

//     let newNode = new Node(val);
//     let prev = this.get(index - 1);
//     let temp = prev.next;
//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }
//   // Deleting
//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === this.length - 1) return this.pop();
//     if (index === 0) return this.shift();
//     let prevNode = this.get(index - 1);
//     let removed = prevNode.next;
//     prevNode.next = removed.next;
//     this.length++;
//     return removed;
//   }
//   // Reversing
//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let next;
//     let prev = null;
//     for (let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this;
//   }
// }

// let newList = new singleLinkedList();

// newList.push("Abullah");
// newList.push("Khaled");
// newList.push("Badr");

// console.log(newList);
// console.log(newList.head);
// console.log(newList.head.next);
// console.log(newList.tail);
// console.log("#".repeat(20));

// console.log(newList.insert(2, "Fatma"));

// console.log(newList);
// console.log("#".repeat(20));
// console.log(newList.reverse());
// console.log(newList.head.next);
// console.log(newList.head.next.next);

// // let newStack = new Stack

// // newStack.add("Abdullah");
// // newStack.add("Khaled");
// // newStack.add("Badr");

// // console.log(newStack.first)
// // console.log(newStack.last)
// // console.log(newStack.del())

// // console.log("#".repeat(20))

// // let quickQueue = new Queue

// // quickQueue.enqueue("Abdullah");
// // quickQueue.enqueue("Khaled");
// // quickQueue.enqueue("badr");

// // console.log(quickQueue)
// // console.log(quickQueue.first)
// // console.log(quickQueue.last)
// // console.log(quickQueue.dequeue())




