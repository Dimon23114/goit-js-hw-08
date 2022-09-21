const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const inputRef = document.querySelector('input');
const textareaRef = document.querySelector('textarea');


const STORAGE_KEY = "feedback-form-state";

onSaveInput();


formRef.addEventListener('input', onFormInput);
formRef.addEventListener('submit', throttle(onFormSubmit, 500))


function feedback (evt) {
    const email = evt.currentTarget.elements.email.value;
    const message = evt.currentTarget.elements.message.value;
}

function onFormInput (evt) {
feedback();
const formData = {
    email,
    message,
};

localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
};


function onFormSubmit (evt) {
    evt.preventDefault();   
    feedback();
    const formData = {
        email,
        message,
    };

    console.log(formData)

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onSaveInput (evt) {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
const savedAllMessage = JSON.parse(savedMessage);
    if (savedMessage) {
        inputRef.value = savedAllMessage.email;
        textareaRef.value = savedAllMessage.message;
    }
}