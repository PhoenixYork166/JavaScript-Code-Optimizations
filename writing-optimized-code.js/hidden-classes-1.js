// Demonstrating Hidden Classes in JavaScript
class Animal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Instantiate class Animal by passing in required params as x & y
const object1 = new Animal(1,2);
const object2 = new Animal(3, 5);

/* Initially, both objects share the same hidden class as they have the same structure */
console.log(`Initial state:\nobject1\n${object1}\n\nobject2\n${object2}`)
/* Modifying properties in the same order preserves the Hidden Class structure for compiler to comprehend
*/
object1.x = 30;
object1.y = 100;

/* Modifying properties in the same order for another instance
*/
object2.x = 30;
object2.y = 100;
// This consistent Modification across objects instantiated from the same common class will Optimize our code
object2.y = 100;
object2.x = 30;

console.log(`Modified state in the same order:\nobject1\n${object1}\n\nobject2\n${object2}`)

/* When using 'delete' keyword
We also change objects' transition paths leading to their Hidden Classes
This forces the JavaScript V8 Engine (Node.js) to create a new Hidden Class for object1
'
** This will also slow things down */
delete object1.x;
console.log(`After deleting property x from object1:\nobject1\n${object1}\n\nobject2\n${object2}`)

/* Explanation:
1. At creation, both object1 and object2 share a common hidden class as they have the same properties.
2. Modifying the properties in the same order does not change the hidden class.
3. Deleting a property from object1 causes a Hidden Class transition, leading to change in Transition Path for object1, which can lead to de-optimizations.
*/
