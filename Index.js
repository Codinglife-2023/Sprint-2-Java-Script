
// Linking HTML to JavaScript using the script tag
console.log("Script file linked successfully!");

// Testing console.log in the browser console
console.log("Hello, this is displayed in the browser console!");


// Fetching JSON data using the Fetch API

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log("Fetched data:", data);// Logging the record to the console
        data.forEach(employee => {
        console.log("Individual record:", employee);
        document.getElementById('output').innerHTML += `<p>${employee.name}: ${employee.age}</p>`;// Writing the record to the browser window
    });
    })
    
.catch(error => console.log(error));


// Step 5: Writing three functions to describe the contents of the JSON file
function getTotalRecords(data) {
    return `Total records: ${data.length}`;
}

function getOldestPerson(data) {
const oldestPerson = data.reduce((prev, current) => (prev.age > current.age) ? prev : current);
return `Oldest person: ${oldestPerson.name} (${oldestPerson.age} years old)`;
}

function getYoungestPerson(data) {
const youngestPerson = data.reduce((prev, current) => (prev.age < current.age) ? prev : current);
return `Youngest person: ${youngestPerson.name} (${youngestPerson.age} years old)`;
}

// Writing the results of reading the JSON file to the browser window
fetch('./data.json')
.then(response => response.json())
.then(data => {

    document.getElementById('output').innerHTML += `<p>${getTotalRecords(data)}</p>`;
    document.getElementById('output').innerHTML += `<p>${getOldestPerson(data)}</p>`;
    document.getElementById('output').innerHTML += `<p>${getYoungestPerson(data)}</p>`;
})
.catch(error => console.log(error));    

    