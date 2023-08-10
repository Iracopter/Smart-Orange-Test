/*const checkbox = document.getElementById('checkbox');
const submitButton = document.getElementById('submitButton');
checkbox.addEventListener('click', () => {
  checkbox.classList.toggle('checked');
});


const form = document.getElementById('myForm');
submitButton.addEventListener('click', () => {
  form.submit(); 
});*/

const checkbox = document.getElementById('checkbox');
const submitButton = document.getElementById('submitButton');
const form = document.getElementById('myForm');

checkbox.addEventListener('click', () => {
  checkbox.classList.toggle('checked');
});

submitButton.addEventListener('click', (event) => {
  if (!checkbox.classList.contains('checked')) {
    event.preventDefault();
    alert('Please confirm your agreement with the privacy policy');
  } else {
    form.submit();
  }
});




