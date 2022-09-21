
// in this example the types in the object are inferred. The values cannot be re-assigned to a type different from the original
const personObj ={
name:'Josh',
age: 41,
location:'California'
}
// person.age cannot be re-assigned to a string since it was declared as a number
// Person.age = "old"

// person.Location can be re-assigned to a different string as it was originally inferred as a string.
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

// here we create a function called createPerson and we define the type of the argument being passed in as our interface, any argument passed into this function now must fit the shape of the interface.
// function createPerson(person:Person){
//     console.log(person.name)
// }

// person2Obj has the the same shape as our Person interface, but the age value is set to a string. when passed in as the argument to the createPerson function it will throw an error because it does not match the Person interface we defined the function argument with.
// createPerson(person2Obj);


// this function will not throw an error as personObj matches the shape of our interface exactly.
// createPerson(personObj);

// instead of creating an interface as we did above, you can also create your own custom type.
// type Person = {
//     name:string,
//     age:number,
//     location:string
// }

// with your own custom type, once created you just type the object as you would any other variable.

// this object again will throw an error as the location value is a number and our type defines it as a string.
// const newPerson : Person = {
//     name:'Josh',
//     age: 41,
//     location:92234
// }

// this object will not throw an error as it matches our type
// const newPerson : Person = {
//     name:'Josh',
//     age: 41,
//     location:'California'
// }


// you can also define an object with optional values and values that will accept multiple types.

// type Person = {
//     name: string,
//     age?:number,
//     location:string,
//     zip?:number,
//     isPresent: boolean|string
// }
