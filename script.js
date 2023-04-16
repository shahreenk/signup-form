let btn = document.querySelector('button');
let password1 = document.querySelector('#password');
let password2 = document.querySelector('#password-confirm');
let validationMsg = document.querySelector('.validation-msg');

btn.addEventListener('click', function(e) {
    if (password1.value !== password2.value) {
        e.preventDefault();
        password1.classList.add('error');
        password2.classList.add('error');
        validationMsg.innerHTML = `
            <p style="color:red">*Passwords do not match</p>
        `
        ;
    }
})

