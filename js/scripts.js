`use scripts`

const modalElement = document.querySelector(`#exampleModal`)

// var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)

const myModal = new bootstrap.Modal(modalElement);

fetch(`https://api.chucknorris.io/jokes/random?category=dev`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Do something with data
        const chuckQuote = document.querySelector(`#chuckQuote`);
        chuckQuote.innerText = data.value
        myModal.show() // The show part comes from bootstrap
        // 
    })
    .catch(function (error) {
        console.error(`ERROR: `, error);
        return error;
    });