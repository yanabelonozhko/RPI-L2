(() => {
    const modal = $.modal();
    const nextModal = $.nextModal();

    document.addEventListener("DOMContentLoaded", () => {
        if (localStorage.getItem("sign-up") && localStorage.getItem("sign-up") !== "") {
            document.getElementById("myBtn").style.display = "none";
            let liFirst = document.createElement("li");
            liFirst.classList.add("nav-menu-item-welcome");
            liFirst.innerHTML = localStorage.getItem("sign-up");
            document.getElementById("list").prepend(liFirst);
        }
        else {
            document.getElementById("register-btn").classList.remove('hide');
            document.getElementById("sign-in-btn").classList.remove('hide');
        }
    });

    document.getElementById("myBtn").onclick = function () {
        modal.open();
    }

    window.onclick = function (event) {
        if (event.target.className == 'vmodal') {
            modal.close();
            nextModal.close();
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
        let liFirst = document.createElement('li');
        liFirst.classList.add("nav-menu-item-welcome");
        liFirst.textContent = document.getElementById("nameInput").value;
        localStorage.setItem('sign-up', document.getElementById("nameInput").value);
        document.getElementById("list").prepend(liFirst);
        modal.destroy();
        nextModal.open();
        //setTimeout(function () { nextModal.destroy(); document.getElementById("myBtn").style.display = "none" }, 5000);
        document.getElementById("register-btn").style.display = "none";
        document.getElementById("sign-in-btn").style.display = "none";
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
        return /^[a-zA-Z]+$/.test(myName);
    }
})();