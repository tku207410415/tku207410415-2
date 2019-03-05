// FOR LOOP
for(let i=1;i<=5;i=i+2){
    console.log("Number "+i);
}
// WHILE LOOP
let i=1;
while(i<=5){
    console.log("Number "+i);
    i=i+2;
}

// DO WHILE
let j=1;
do{
    console.log("Number "+j);
    j=j+2;
}while(j<=5);
// LOOP THROUGH ARRAY
const drinks=['coco','50wind','dragon','kongfu'];
for(let i=0;i<drinks.length;i++){
    console.log(drinks[i]);
}

// FOREACH
drinks.forEach(function(drink,index,array){
    console.log(`${index}:: ${drink}`);
    console.log(array);
});

// MAP
const users =[
    {
        id:1,
        name:'John'
    },
    {
        id:2,
        name:'Sara'
    },
    {
        id:3,
        name:'Steve'
    }
];
const ids = users.map(function(user){
    return user.id;

});
console.log(ids);


// FOR IN LOOP
const user = {
    firstName:'John',
    lastName:'Doe',
    age:40
}
for(let x in user){
    console.log(`${x}: ${user[x]}`);
}