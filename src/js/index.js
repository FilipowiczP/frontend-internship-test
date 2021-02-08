/* Here goes your JS code */

const clickMe = document.querySelector('.btn');
const close = document.querySelector('.close');
const submit = document.querySelector('.submit');


const main = document.querySelector('.main');
const popup = document.querySelector('.popup');
const form = document.querySelector('.form');
const thankYou = document.querySelector('.popup__thankYou');
const checkbox = document.querySelector('.form__checkbox');

clickMe.addEventListener('click', function (event) {
    main.classList.add('hide');
    popup.classList.add('main');
    popup.classList.remove('hide');
    form.classList.remove('hide');
})

close.addEventListener('click', function (event) {
    main.classList.remove('hide');
    popup.classList.remove('main');
    popup.classList.add('hide');
})

submit.addEventListener('click', function (event) {
    const password = document.querySelector('.password');
    const email = document.querySelector('.email');

    let validationEmail = email.value;
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const found = validationEmail.match(regex);
    let check = true;
    let errors = [];

    if (!found) {
        const errorEmail = document.createElement('p');
        errorEmail.innerText = "Wrong email";
        errorEmail.classList.add('error');
        errors.push(errorEmail);
        check = false;

    }
    if (password.value.length <= 4) {
        const errorPassword = document.createElement('p');
        errorPassword.innerText = "Wrong password";
        errorPassword.classList.add('error');
        errors.push(errorPassword);
        check = false;
    }
    if (!checkbox.checked) {
        const errorCheckbox = document.createElement('p');
        errorCheckbox.innerText = "You have to accept checkbox";
        errorCheckbox.classList.add('error');
        errors.push(errorCheckbox);
        check = false;
    }
    if (errors.length != 0) {
        errors.map(function (element) {
            form.appendChild(element);
        })
        const errorItem = document.querySelectorAll('.error');
        setTimeout(() => {
            errorItem.forEach(function (element) {
                element.remove()
            })
        }, 2000);

    }

    if (check) {
        form.classList.add('hide');
        thankYou.classList.remove('hide');
        setTimeout(() => {
            thankYou.classList.add('hide');
            main.classList.remove('hide');
            popup.classList.remove('main');

        }, 3000);
    }

})