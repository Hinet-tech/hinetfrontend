const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject  = document.getElementById('subject');
  const message = document.getElementById('message');

  // Send value to server
  console.log(firstNameInput.value);

  // 👇️ clear input field
  name.value = '';
  email.value='';
  subject.value='';
  message.value='';
});
