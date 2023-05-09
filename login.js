const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	const username = form.username.value;
	const password = form.password.value;
	
	// Validate username and password
	if (username === 'Shristi Maurya' && password === '1234') {
		alert('Login successful!');
	} else {
		alert('Invalid username or password.');
	}
});
