const bookingForm = document.querySelector('#bookingForm')
let nameInput = document.querySelector('#nameInput')
let phoneNumber = document.querySelector('#phoneNumber')
let style = document.querySelector('#style')
let submitButton = document.querySelector('#submission')

let queue = [];

bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameValue = nameInput.value;
    const phoneValue = phoneNumber.value;
    const styleValue = style.value;

    const booking = {
        name: nameValue,
        phone: phoneValue,
        haircut: styleValue
    };

    queue.push(booking);

    console.log(booking);
    
});