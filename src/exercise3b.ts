
// in this example the types in the object are inferred. The values cannot be re-assigned to a type different from the original
const personObj ={
name:'Josh',
age: 41,
location:'California'
}
// person.age cannot be re-assigned to a string since it was declared as a number
// Person.age = "old"

// person.Location can be re-assigned to a different string as it was originally declared as a string.
// Person.location = 'Palm Springs'

// an interface allows you to declare the shape of an object in advance. Then you can use that to make sure objects match the same shape.
// interface Person {
//     name: string,
//     age:number,
//     location:string
// }

// const person2Obj = {
//     name: 'Mary',
//     age: '32',
//     location: 'Vermont'
// }

// function createPerson(person:Person){
//     console.log(person.name)
// }

// createPerson(person2Obj);
// createPerson(personObj);
// type Person = {
//     name:string,
//     age:number,
//     location:string
// }

// const newPerson : Person = {
//     name:'Josh',
//     age: 41,
//     location:92234
// }

// const newPerson : Person = {
//     name:'Josh',
//     age: 41,
//     location:'California'
// }