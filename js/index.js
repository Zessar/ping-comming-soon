const form = document.getElementById('form');
const input = document.getElementById('input');
const error = document.querySelector('.p');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isValidEmail = /\S+@\S+\.\S+/.test(input.value);

  input.style.borderColor = isValidEmail ? 'hsl(223, 87%, 63%)' : 'hsl(354, 100%, 66%)';
  error.style.display = 'block';
  error.style.color = isValidEmail ? 'hsl(223, 87%, 63%)' : 'hsl(354, 100%, 60%)';

  error.textContent = isValidEmail ? 'Form submitted successfully!' : 'Please provide a valid email address';
});

input.addEventListener('invalid', (e) => {
  e.preventDefault();
  input.style.borderColor = 'hsl(354, 100%, 66%)';
  error.style.display = '';
  error.style.color = 'hsl(354, 100% 60%)';
  error.textContent = 'Enter a valid email address';
});