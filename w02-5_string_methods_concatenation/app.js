const firstName = 'David';
const lastName = 'Liao';
const age = 36;
const str = 'Hello there my name is david liao';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
val = 'david ';
val += 'liao';
console.log(val);

val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

// Escaping
val =  'That\'s awesome, I can\'t wait';
console.log(val);

// Length
val = firstName.length;
console.log(val);

//concat()
val = firstName.concat(' ',lastName);
console.log(val);
val=firstName.toUpperCase();
console.log(val);
val=firstName.toLocaleLowerCase();
console.log(val);
val=firstName[0];
console.log(val);


// change case

// indexOf()
val = firstName.indexOf('d');
console.log(val);
val =firstName.lastIndexOf('i');
console.log(val);
// charAt()
val = firstName.charAt('3');
console.log(val);

// get last char
val=firstName.charAt(firstName.length-1);
console.log(val);
// substring()
val =firstName.substring(0,5);
console.log(val);

// slice()
val = firstName.slice(0,5);
console.log(val);
val = firstName.slice(-5);
console.log(val);

// split()
val = str.split(' ');
console.log(val);
val = tags.split(',');
console.log(val);

// replace()
val = str.replace('liao','ka');
console.log(val);
// includes()
val = str.includes('my');
console.log(val);