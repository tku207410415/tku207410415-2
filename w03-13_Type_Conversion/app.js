let val;

// Number to string {number & sum}
val = String(4+4);
console.log("String(4+4) = ",val);
// Bool to string
val = String(true);
console.log("String(true) = ",val);
// Date to string
val =String(new Date());
console.log("String(new Date = ",val);
// Array to string
val =String([1,2,3,4]);
console.log("String([1,2,3,4]) = ",val);
// toString() {number & bool}
val =(5).toString();
console.log("(5).toString = ",val);
// String to number {char & bool & null & string & array}
val = Number('hello');
console.log("Number('hellow')",val);

val =Number(true);
console.log("Number(true)",val);

val =Number(false);
console.log("Number(false)",val);

val =Number(null);
console.log("Number(null)",val);

val =Number('5');
console.log("Number('5') = ",val);

val = Number([1,2,3]);
console.log("Number([1,2,3]) = ",val);


// parseInt & parseFloat
val = parseInt('100.30');
console.log("ParseInt = ",val);

val = parseFloat('100.30');
console.log("ParseFloat = ",val);
// Output {consol val & typeof val & val.length & val.to Fixed(2)}

const val1 = String(5);
console.log("val1 = String(5)");

const val2 = 6;
console.log("val2 =6");
const sum = Number(val1 + val2);

//consol.log {sum & typeof sum}
console.log("Number(val1+val2) = ",sum);
console.log(typeof sum);