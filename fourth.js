//Null data type
var x = null;
if(x != null){
//code here
}

//Symbol
var value1 = Symbol("Hello");
var value2 = Symbol("Hello");

//String data type
var name1 = "Mark";
var name2 = "Sakaberg";

// @ts-ignore
// document.getElementById("demo").innerHTML = (null == undefined);
// console.log(typeof x);
// console.log(null == undefined);
// console.log(value1, value2);

document.getElementById("demo").innerHTML = (`The names are ${name1} and ${name2}`);