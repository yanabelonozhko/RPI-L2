(() => {
  function _createModal() {
  const modal = document.createElement('div');
  modal.classList.add('vmodal');
  modal.id = "myModal";
  let wrapper = document.createElement('div');
  wrapper.classList.add('dws-wrapper');
  modal.append(wrapper);
  const dwsForm = document.createElement('div');
  dwsForm.classList.add('dws-form');
  wrapper.append(dwsForm);
  const form = document.createElement('form');
  form.classList.add('tab-form');
  dwsForm.append(form);
  const iClose = document.createElement('i');
  iClose.classList.add('close', 'fa-solid', 'fa-square-xmark', 'fa-2x');
  iClose.id = 'closeBtn';
  form.append(iClose);
  const signUpLabel = document.createElement('label');
  signUpLabel.classList.add('lbl-sign-up', 'active');
  signUpLabel.textContent = 'Sign Up';
  form.append(signUpLabel);
 
  let divInput = document.createElement('div');
  divInput.classList.add('text-input');
  divInput.textContent = 'Username';
  form.append(divInput);
  const nameInput = document.createElement('input');
  nameInput.classList.add('input');
  nameInput.placeholder = 'Type your name';
  nameInput.type = 'text';
  nameInput.id = 'nameInput';
  form.append(nameInput);
  let incorr = document.createElement('div');
  incorr.classList.add('incorrect');
  incorr.id = 'incName';
  incorr.textContent = 'Incorrect username!';
  form.append(incorr);

  divInput = document.createElement('div');
  divInput.classList.add('text-input');
  divInput.textContent = 'Email';
  form.append(divInput);
  const emailInput = document.createElement('input');
  emailInput.classList.add('input');
  emailInput.placeholder = 'Type your email';
  emailInput.type = 'email';
  emailInput.id = 'emailInput';
  form.append(emailInput);
  incorr = document.createElement('div');
  incorr.classList.add('incorrect');
  incorr.id = 'incEmail';
  incorr.textContent = 'Incorrect email!';
  form.append(incorr);

  divInput = document.createElement('div');
  divInput.classList.add('text-input');
  divInput.textContent = 'Password';
  form.append(divInput);
  const passInput = document.createElement('input');
  passInput.classList.add('input');
  passInput.placeholder = 'Type password';
  passInput.type = 'password';
  passInput.id = 'passInput';
  form.append(passInput);
  incorr = document.createElement('div');
  incorr.classList.add('incorrect');
  incorr.id = 'incPass';
  incorr.textContent = 'Password is too short.';
  form.append(incorr);

  divInput = document.createElement('div');
  divInput.classList.add('text-input');
  divInput.textContent = 'Phone Number';
  form.append(divInput);
  const phoneInput = document.createElement('input');
  phoneInput.classList.add('input');
  phoneInput.placeholder = 'Type your phone number';
  phoneInput.type = 'text';
  phoneInput.id = 'phoneInput';
  form.append(phoneInput);
  incorr = document.createElement('div');
  incorr.classList.add('incorrect');
  incorr.id = 'incPhone';
  incorr.textContent = 'Incorrect phone number!';
  form.append(incorr);

  const checkInput = document.createElement('input');
  checkInput.type = 'checkbox';
  checkInput.id = 'agree';
  checkInput.setAttribute('name', 'privacy');
  form.append(checkInput);
  const lblPrivacy = document.createElement('label');
  lblPrivacy.setAttribute('for', 'privacy');
  lblPrivacy.textContent = 'I agree with ';
  const ref = document.createElement('a');
  ref.textContent = 'Privacy Policy';
  ref.classList.add('privacy');
  lblPrivacy.append(ref);
  form.append(lblPrivacy);

  const signBtn = document.createElement('span');
  signBtn.classList.add('sign-btn', 'disabled');
  signBtn.id = 'signUp';
  signBtn.textContent = 'Sign Up';
  form.append(signBtn);
  document.body.appendChild(modal);
  return modal;
}

function createNextModal() {
  const modal = document.createElement('div');
  modal.classList.add('vmodal');
  modal.id = "myModal";
  let wrapper = document.createElement('div');
  wrapper.classList.add('dws-wrapper');
  modal.append(wrapper);
  const dwsForm = document.createElement('div');
  dwsForm.classList.add('dws-form');
  wrapper.append(dwsForm);
  const form = document.createElement('form');
  form.classList.add('tab-form');
  dwsForm.append(form);
  const textDiv = document.createElement('div');
  textDiv.textContent = 'Registration completed successfully!';
  textDiv.id = 'success';
  textDiv.classList.add('success');
  form.append(textDiv);
  document.body.appendChild(modal);
  return modal;
}

$.modal = function () {
  const $modal = _createModal();
  return {
    open() {
      $modal.style.display = "block";
    },
    close() {
      $modal.style.display = "none";
    },
    destroy() {
      $modal.remove();
    }
  }
}

$.nextModal = function () {
  const $nextModal = createNextModal();
  return {
    open() {
      $nextModal.style.display = "block";
    },
    close() {
      $nextModal.style.display = "none";
    },
    destroy() {
      $nextModal.remove();
    }
  }
}
})();


