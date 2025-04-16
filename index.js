//FUNÇÃO PRINCIPAL
function onChangeEmail() {
    toggleEmailErrors();
}
function onChangePassword() {
    toogleButtonDisable();
    togglePasswordErrors();
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function toggleEmailErrors() {
    const email = form.email().value;
    //Campo email vazio
    form.emailRequiredError().style.display = email ? "none" : "block";
    //Email inválido
    form.emailInvalidError.style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;
    //Campo senha vazio
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toogleButtonDisable() {
    const emailValid = isEmailValid();
    form.recoverPassword().disabled = !emailValid;

    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isPasswordValid() {
    const password = form.password().value;
    if (!password) {
        return false;
    }
    return true;
}

const form = {
    email: () => document.getElementById("email"),
    emailRequiredError: () => document.getElementById('email-required-error'),
    emailInvalidError: () => document.getElementById('email-invalid-error'),
    loginButton: () => document.getElementById('login-button'),
    password: () => document.getElementById('password'),
    passwordRequiredError: () =>  document.getElementById('password-required-error'),
    recoverPassword: () => document.getElementById('recover-password-button')
};