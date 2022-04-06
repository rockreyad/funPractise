//Fetch API


console.log(window);

document.getElementById('fetch_data').addEventListener('click', getData);

//Arrow Function
function getData() {
    console.log('Clicked');
    fetch('http://api.icndb.com/jokes/random').then(res => res.json()
        //console.log(res.json()); 
    ).then(data => {
        let joke = data.value;
        //console.log(joke.joke);
        document.querySelector('.fetchData').innerHTML = `<p class='text-black'>${joke.joke}</p>`;
    }).catch(err => {
        console.log(err)
    })
}