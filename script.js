const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submit = document.querySelector("#submit");
const form = document.querySelector("form");
const error = document.querySelector(".error");

confirmPassword.addEventListener("input", (e) => {
    if(password.value !== confirmPassword.value) {
        error.classList.remove("hide");
        confirmPassword.setCustomValidity("Password does not match");
    } else {
        error.classList.add("hide");
        confirmPassword.setCustomValidity("");
    }
});