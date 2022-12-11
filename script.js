const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInput();
});

function checkInput() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
	
	if(emailValue === '') {
		setErrorFor(email, 'Please fill out this field.');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Please provide a valid email.');
	} else {
		success(email);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.classList.add('error');
	small.innerText = message;
}

function success(input) {
	const formControl = input.parentElement;
	formControl.classList.remove('error');
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}