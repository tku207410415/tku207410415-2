// WINDOW METHODS / OBJECTS / PROPERTIES

// // Alert
// alert('Hello World');
// Prompt
const input = prompt('Enter name:');
alert(input);

// Confirm
// if(confirm('Are you sure?')){
//     console.log('YES');
// }
// else{
//     console.log('NO');
// }

// Location Object
console.log(window.location);
console.log(window.location.hostname);
console.log(window.location.href);
// Redirect
// window.location.href = 'https://google.com';
// History Object
window.history.go(-1);
// Navigator Object
console.log(window.navigator);
console.log(window.navigator.cppCodeName);
console.log(window.navigator.userAgent);
console.log(window.navigator.platform);