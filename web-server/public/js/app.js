console.log("Client side javascript file is loaded!");

// CORS problem :/
// fetch('http://puzzle.mead.io/puzzle', {
//     mode: 'no-cors',
//     headers: {
//          "Content-Type": "application/json"
//     },
// }).then((resonse) => {
//     resonse.json().then((data) => {
//         console.log(data);
//     });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent = 'From JavaScript';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';

    fetch('/' + location).then((response) => {
        response.json().then((data) => {
            if (!data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast.partOfDay;
            };
        });
    });
});