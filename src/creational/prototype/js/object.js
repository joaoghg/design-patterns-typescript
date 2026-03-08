const personPrototype = {
    firstName: 'João',
    lastName: 'Garnica',
    age: 22,

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const person = Object.create(personPrototype)
person.firstName = 'Maria'

console.log(person)
console.log(person.firstName)
console.log(person.fullName())