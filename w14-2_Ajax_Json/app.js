document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers);

function loadCustomer(){
    // create an XHR object
    const xhr = new XMLHttpRequest();

    //open
    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        console.log(xhr);
        if(this.status === 200){
            const customer = JSON.parse(this.responseText);

            const output=`
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Comapny: ${customer.company}</li>
                <li>phone: ${customer.phone}</li>
            </ul>
            `
            document.getElementById('customer').innerHTML = output;
        }else{
            console.log("Request error ...");
        }
    }

    xhr.onerror = function(){
        console.log("Request error ...");
    } 
    xhr.send();
}

function loadCustomers(){
    // create an XHR object
    const xhr = new XMLHttpRequest();
xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        console.log(xhr);
        if(this.status === 200){
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customer){
            output +=`
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Comapny: ${customer.company}</li>
                <li>phone: ${customer.phone}</li>
            </ul>
            `;
            });

            
            document.getElementById('customers').innerHTML = output;
        }else{
            console.log("Request error ...");
        }
    }

    xhr.onerror = function(){
        console.log("Request error ...");
    } 
    xhr.send();
}