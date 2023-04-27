// switches

const signupBtn = document.querySelector('.signupBtn')
const loginBtn = document.querySelector('.loginBtn')

const loginContainer = document.querySelector('.login-container')
const loginBtnContainer = document.querySelector('.loginBtnContainer')

const registerContainer = document.querySelector('.register-container')
const registerBtnContainer = document.querySelector('.registerBtnContainer')

const mainContainer = document.querySelector('.main-container')
const btnContainer = document.querySelector('.btn-container')

// Show password

const togglePassBtns = document.querySelectorAll('.togglePassBtn')
const test = document.querySelector('.test')
const passTest = document.querySelector('.passInput')

// Password strenght

const passwordStrenght = document.querySelector('.passwordStrenght')
const passInputStr = document.querySelector('.passInputStr')


const switchToRegister = () => {
    mainContainer.style.transform = "translateX(59%)"
    btnContainer.style.transform = "translateX(-171%)"

    registerBtnContainer.classList.toggle('hidden')
    loginContainer.classList.toggle('hidden')

    registerContainer.classList.toggle('hidden')
    loginBtnContainer.classList.toggle('hidden')
}

const switchToLogin = () => {
    mainContainer.style.transform = "translateX(0%)"
    btnContainer.style.transform = "translateX(0%)"

    registerBtnContainer.classList.toggle('hidden')
    loginContainer.classList.toggle('hidden')

    registerContainer.classList.toggle('hidden')
    loginBtnContainer.classList.toggle('hidden')
}

const showPassword = (e) => {
    if(e.target.closest('form').querySelector('.passInput').type == "password"){
        e.target.closest('form').querySelector('.passInput').type = "text"
    } else {
        e.target.closest('form').querySelector('.passInput').type = "password"
    }
}

signupBtn.addEventListener('click', switchToRegister)
loginBtn.addEventListener('click', switchToLogin)
for(let togglePassBtn of togglePassBtns){
    togglePassBtn.addEventListener('click', showPassword)
}