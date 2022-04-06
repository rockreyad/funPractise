var xmhttp = new XMLHttpRequest();
xmhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        //console.log(data);

        jsonData(data);
        //getObject(this.responseText);
    }
}

xmhttp.open("GET", "./scripts/data.json", true);
xmhttp.send();

function jsonData(json_object) {

    var js_obj = JSON.parse(json_object);
    //console.log(js_obj);


    for (x in js_obj.persons) {
        var persons = js_obj.persons;
        // console.log(persons[x]);
        for (y in persons[x]) {
            //console.log(persons[x][y]);

        }
    }
}

//RESTful API

document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes(e) {

    let number = document.getElementById('numberJoke').value;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = '<p class="text-red-400">Loading......</p>';
    }
    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let jokes = data.value;

            let output = '<ol class="bg-green-300 rounded shadow px-2">';

            jokes.forEach(function (item) {
                output += `<li class="my-1">${item.id}. ${item.joke}</li>`
            });
            output += '</ol>';
            document.getElementById('output').innerHTML = output;
            console.log(jokes);
        }
    }
    xhr.send();
}