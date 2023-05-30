const createUser = (name, score) => {
    const newUser = Object.create(sharedFunctionalities);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const sharedFunctionalities = {
    increment: function () {
        return this.score += 1
    },
    login: () => console.log("user Successfully logged in")
} 

const user1 = createUser("Eric Nkaka", 45);
const user2 = createUser("kettia", 4);
console.log(user1.increment())

console.log("Object", user1)
console.log(user1.name)
user1.login();
console.log(user1.score)