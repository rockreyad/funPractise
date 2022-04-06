//Callback function


// setTimeout(function(){
//     console.log('Hello Wolrd!');

// },2*1000);

// let persons = [{
//     firstName: 'Reyad',
//     lastName: 'Hasan',
// }, {
//     firstName: 'Abid',
//     lastName: 'Siam',
// }]

// function createPerson(person) {
//     setTimeout(function () {
//         persons.push(person);
//     }, 1 * 1000);
// }

// function getPerson() {
//     let output = '';
//     persons.forEach(function (person) {
//         output += `<li>${person.firstName} ${person.lastName}</li>`
//     })
//     document.getElementById('personList').innerHTML = output;
// }

// createPerson({firstName:'Mahamud',lastName:'Hasan'});
// getPerson();

let persons = [{
    firstName: 'Reyad',
    lastName: 'Hasan',
}, {
    firstName: 'Abid',
    lastName: 'Siam',
}]

function createPerson(person, callback) {
    persons.push(person);
    callback();
    document.getElementById('personBlock').classList = 'bg-sky-200 rounded-lg px-2 py-2 my-2 shadow';
}

function getPerson() {
    let output = '';
    persons.forEach(function (person) {
        output += `<li class="font-semibold text-neutral-800">${person.firstName} ${person.lastName}</li>`
    })
    document.getElementById('personList').innerHTML = output;
}

createPerson({
    firstName: 'Mahamud',
    lastName: 'Hasan'
}, getPerson);