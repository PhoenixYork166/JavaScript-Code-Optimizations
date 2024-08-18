// Inline Caching
function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`
}

// Object here to pretend as a DB for quick demo
const userData = {
    firstName: 'Johnson',
    lastName: 'Senior'
}

// Invoke callback function with userData object as passed-in parameter
// Use 'Code-Runner' vscode extension for quick demo purposes
const findUser1 = findUser(userData);

/* Thus every time findUser(userData) is invoked, it can keep repeating the same result as 
return `found ${user.firstName} ${user.lastName}`
*/
console.log(`findUser1: ${findUser1}`);
