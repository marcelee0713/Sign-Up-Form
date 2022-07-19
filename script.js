const form = document.querySelector('#sign-up-form');
const password = document.querySelector('#user_password');
const cfrmPassword = document.querySelector('#user_confirm_password');
const cfrmPasswordOutput = document.querySelector('#confirm-password-error-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getInput();
});

function getInput(){
    const userPassword = password.value.trim();
    const userCfrmPassword = cfrmPassword.value.trim();

    confirmPassword(userPassword,userCfrmPassword);
}

function confirmPassword(pass1,pass2){
    if(pass1 === pass2){
        cfrmPasswordOutput.textContent = "Password match"
        cfrmPasswordOutput.style.color = "rgb(68, 216, 68)"
        cfrmPassword.style.border = "2px solid rgb(68, 216, 68)"
    }
    else if(pass1 !== pass2){
        cfrmPassword.style.border = "2px solid rgb(255, 7, 7)"
        cfrmPasswordOutput.style.color = "rgb(255, 7, 7)"
        cfrmPasswordOutput.textContent = "Password does not match"
    }
}