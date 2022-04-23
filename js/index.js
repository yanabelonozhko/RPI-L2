const modal = $.modal({
    title: "Sign Up",
    content: `
    <div class="text-input">Username</div>
    <input class="input" id="nameInput" type="email" placeholder="Type your name">
    <div class="incorrect" id="incName">Incorrect username!</div>
    <div class="text-input">Email</div>
    <input class="input" id="emailInput" type="email" placeholder="Type your email">
    <div class="incorrect" id="incEmail">Incorrect email!</div>
    <div class="text-input">Password</div>
    <input class="input" id="passInput" type="password" placeholder="Type your password">
    <div class="incorrect" id="incPass">Password is too short</div>
    <div class="text-input">Phone Number</div>
    <input class="input" id="phoneInput" type="text" placeholder="Type your phone number">
    <div class="incorrect" id="incPhone">Incorrect phone!</div>
    <input id="agree" type="checkbox" name="privacy">
    <label for="privacy">I agree with <a class="privacy" href="#">Privacy Policy</a></label>
    <span class="sign-btn disabled" id="signUp">Sign up</span>
    `
});



document.getElementById("myBtn").onclick = function () {
    modal.open();
    success.style.display = "none";
    first.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.close();
    }
}

document.getElementById("emailInput").oninput = function () {
    if (!isValidEmail(document.getElementById("emailInput").value)) {
        document.getElementById("incEmail").style.display = "block";
    }
    else {
        document.getElementById("incEmail").style.display = "none";
    }

    Validation();
}

document.getElementById("closeBtn").onclick = function () {
    modal.close();
}

document.getElementById("agree").onclick = function () {
    Validation();
}

document.getElementById("phoneInput").oninput = function () {
    if (!isValidPhone(document.getElementById("phoneInput").value)) {
        document.getElementById("incPhone").style.display = "block";
    }
    else {
        document.getElementById("incPhone").style.display = "none";
    }
    Validation();
}

document.getElementById("passInput").oninput = function () {
    if (document.getElementById("passInput").value.length < 6) {
        document.getElementById("incPass").style.display = "block";
    }
    else {
        document.getElementById("incPass").style.display = "none";
    }
    Validation();
}

document.getElementById("nameInput").oninput = function () {
    if (!isValidName(document.getElementById("nameInput").value)) {
        document.getElementById("incName").style.display = "block";
    }
    else {
        document.getElementById("incName").style.display = "none";
    }
    Validation();
}

document.getElementById("signUp").onclick = function () {
    document.getElementById("first").style.display = "none";
    document.getElementById("success").style.display = "block";
    setTimeout(function () { modal.close(); document.getElementById("myBtn").style.display = "none" }, 5000);
    document.getElementById("register-btn").style.display = "none";
    document.getElementById("sign-in-btn").style.display = "none";
    let liFirst = document.createElement('li');
    liFirst.classList.add("nav-menu-item-welcome");
    liFirst.innerHTML = document.getElementById("nameInput").value;
    localStorage.setItem('sign-up', document.getElementById("nameInput").value);
    document.getElementById("list").prepend(liFirst);
}

function Validation() {
    if (isValidEmail(document.getElementById("emailInput").value) && isValidPhone(document.getElementById("phoneInput").value) && document.getElementById("agree").checked && document.getElementById("passInput").value.length >= 6) {
        if (document.getElementById("signUp").classList.contains("disabled")) {
            document.getElementById("signUp").classList.remove("disabled");
        }
    }
    else {
        if (!document.getElementById("signUp").classList.contains("disabled")) {
            document.getElementById("signUp").classList.add("disabled");
        }
    }
}

function isValidPhone(myPhone) {
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(myPhone);
}

function isValidEmail(myEmail) {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(myEmail);
}

function isValidName(myName) {
    return /[a-zA-Z]+/.test(myName);
}