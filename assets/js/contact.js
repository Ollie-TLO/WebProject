// jshint esversion: 6
// _jshint esversion: 11, strict: implied, undef: true, unused: true, browser: true, devel: true


const nameField = document.getElementById("nameField");
const emailField = document.getElementById("emailField");
const messageField = document.getElementById('messageField');

const nameFieldError = document.getElementById("nameFieldError");
const emailFieldError = document.getElementById("emailFieldError");
const messageFieldError = document.getElementById('messageFieldError');

const nameFieldRegex = /^[a-zA-Z\s]{2,50}$/;
const emailFieldRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const messageFieldRegex = /^[a-zA-Z0-9 .,!?;:'"()[\]{}-]{0,1000}$/;

nameField.addEventListener('input', () => {
	const isValid = nameFieldRegex.test(nameField.value);
	setErrorState(nameFieldError, isValid);
});

emailField.addEventListener('input', () => {
	const isValid = emailFieldRegex.test(emailField.value);
	setErrorState(emailFieldError, isValid);
});

messageField.addEventListener('input', () => {
	const isValid = messageFieldRegex.test(messageField.value);
	setErrorState(messageFieldError, isValid);
});

function setErrorState(errorMessageElement, valid) {
	if (valid) {
		errorMessageElement.classList.add('hidden');
	} else {
		errorMessageElement.classList.remove('hidden');
	}
}

document.getElementById('contactForm').addEventListener("submit", (event) => {
	const nameFieldValid = nameFieldRegex.test(nameField.value);
	const emailFieldValid = emailFieldRegex.test(emailField.value);
	const messageFieldValid = messageFieldRegex.test(messageField.value);

	setErrorState(nameFieldError, nameFieldValid);
	setErrorState(emailFieldError, emailFieldValid);
	setErrorState(messageFieldError, messageFieldValid);

	event.preventDefault(); // prevent page scroller reset
	if (nameFieldValid && emailFieldValid && messageFieldValid) {
		// Submit
	} else {
		event.preventDefault();  // prevent page scroller reset
		
		alert('Please correct the indicated fields');
	}
});
