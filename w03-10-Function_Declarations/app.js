// FUNCTION DECLARATIONS
function greet(firstName='John',lastName='Cena')
{
    return 'Hello ' + firstName + ' ' + lastName;
}
 console.log(greet(' '));
 console.log(greet('ccc' , 'aaa'));

// FUNCTION EXPRESIONS
const square = function(x=3){
    return x*x;
}
console.log(square(5));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
    

(function greeting(){
    console.log('IIFEs');
})();



(function greet(firstName='John',lastName='Cena')
{
    console.log('Hello ' + firstName + ' ' + lastName);
})('Dave','Smith');
 
// PROPERTY METHODS
const todo = {
    add: function(){
        console.log('add todo ...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}
todo.delete = function(id){
    console.log(`Delete todo id ${id}`);
}
todo.add();
todo.edit(111);
todo.delete(11);
