const color = 'yellow';

// switch whether color is red or blue or neigher
console.log("const color = 'yellow")
console.log("switch(color) result :")

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not redor blue');
        break;
}

let day;

//switch newDate().getDay() and console Today's day
console.log("let day")
console.log("switch(new Date().getDay() result:")

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}
console.log(`Today is ${day}`);