console.log('M3-A3');
/*
let remove = confirm("Remove all data?");
let message = remove ? "Deleting Data" : "Cancelled"
console.log(message);

alert("Hello, World!")
window.alert("Hello, World! for the second time");
 
alert(4 * 7);
alert(true);
 
alert("text 1", "text 2"); // only "text 1" will be displayed
*/
let name = window.prompt("What is your name?", "John Doe");
name = name ? name : "anonymous";
let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");