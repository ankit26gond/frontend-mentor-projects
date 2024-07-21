const main = document.querySelector('main');
const submitBtn = document.getElementById('submit');
const form = document.querySelector('form');
const dismissBtn = document.getElementById('dismiss');
const success = document.querySelector('.success');
const inputArea = document.querySelector('.input-area');
const emailAdd = document.getElementById('email-add');

function newPage() {
  main.classList.add('new-page');
  success.classList.add('active');
}

function exitNewPage() {
  main.classList.remove('new-page');
  success.classList.remove('active');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const emailID = data.email;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValid = emailPattern.test(emailID);
  if (isValid) {
    newPage();
    emailAdd.innerText = emailID;
  } else {
    inputArea.classList.toggle('error');
    setTimeout(() => {
      inputArea.classList.toggle('error');
    }, 4000);
  }

})

dismissBtn.addEventListener('click', exitNewPage);