function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const personPrototype = {
    firstName: 'João',
    lastName: 'Garnica',
    age: 22,

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

Person.prototype = Object.create(personPrototype)

const person1 = new Person('João', 'Garnica', 30)
console.log(person1.fullName())