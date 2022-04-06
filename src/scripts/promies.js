//Promies
//.then

let persons = [{
    firstName: 'Reyad',
    lastName: 'Hasan',
    age: 20
}, {
    firstName: 'Abid',
    lastName: 'Siam',
    age: 23
}, ]

function createPerson(person) {
    let prom = new Promise(function (resolve, reject) {
        persons.push(person);
        let error = false;
        if (!error) {
            document.getElementById('personBlock').classList = 'bg-sky-200 rounded-lg px-2 py-2 my-2 shadow';
            resolve();
        } else {
            reject('Error Found!');
        }
    });

    return prom;
}

function getPerson() {
    let output = '';
    persons.forEach(function (person) {
        output += `<li class="font-semibold text-neutral-800">${person.firstName} ${person.lastName} is ${person.age} years old</li>`
    });
    document.getElementById('personList').innerHTML = output;
}


createPerson({
        firstName: 'Rock',
        lastName: 'Reyad',
        age: 22
    }).then(getPerson)
    .catch(function (err) {
        console.log(err);

    });