const name = 'Liao';
const age = 31;
const job = 'Web Developer';
const city = 'Miami';
let html;

// Without template strings (es5)

html = '<ul>' +
        '<li> Name: ' + name + '</li>' +
        '<li> Age: ' + age + '</li>' +
        '<li> Job: ' + job + '</li>' +
        '<li> City: ' +city + '</li>' +
        '</ul>';
        document.body.innerHTML = html;
// With template strings (es6)

function hello(){
    return 'hello';
}

html = `
    <ul>
    <li> Name: ${name} </li>
    <li> Age: ${age} </li>
    <li> Job: ${job} </li>
    <li> City: ${city} </li>
    <li> ${(age>=25 ? 'Over25' : 'Under25')} </li>
    <li> ${hello()} </li>
    </ul>
`;
        document.body.innerHTML = html;