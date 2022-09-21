"use strict";
// if array is all numbers , it will be inferred as a number array and another type cannot be added or changed
// newArray[0]="hello";
// newArray.push(true);
// newArray.push(5);
// inferred types , if  types are mixed than any type can be added to array
// let newArray =[1,"hello",2,5,true];
// newArray[0]=false;
// un-initialized array = undefined;
// let newArray:number[];
// initialized array will now equal empty array
// let newArray:number[]=[]
// tuples
// an array with specified types in specific positions
// type tuple = [string, number , string, boolean ]
// assign the type of tuple to a new array, the position of the types in the array are pre-defined and will give you an error if not followed
// let newArray:tuple =[1, 2, "hello", 2]
// if the type positions are satisfied no error will be shown
// let newArray:tuple=["hello", 2, "hi", false]
// type tuple = [string, number , string, boolean ,number|string|boolean]
