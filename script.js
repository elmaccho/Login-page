// switches

const signupBtn = document.querySelector('.signupBtn')
const loginBtn = document.querySelector('.loginBtn')
const signupBtnMobile = document.querySelector('.signupBtnMobile')
const loginBtnMobile = document.querySelector('.loginBtnMobile')


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
const passInputStr = document.querySelector('.passInputStr')
const passwordStrength = document.querySelector('.passwordStrength')
const passStrInfo = document.querySelector('.passStrInfo')
const bar = document.querySelector('.bar')
const barProgress = document.querySelector('.barProgress')

// button disable check
const loginEmail = document.querySelector('.loginEmail')
const loginPassword = document.querySelector('.loginPassword')
const loginButton = document.querySelector('.loginButton')


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

const switchToRegisterMobile = () => {
    registerBtnContainer.classList.toggle('hidden')
    loginContainer.classList.toggle('hidden')

    registerContainer.classList.toggle('hidden')
    loginBtnContainer.classList.toggle('hidden')
}

const switchToLoginMobile = () => {
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

const passStrength = () => {
    let veryWeakPassword = /^([a-z]{1,8})$/
    let stillWeakPassword = /^(?=.*[A-Z])(?=.*[a-z]{8,})[a-zA-Z]+$/
    let goodPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    let perfectoPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+]).{8,}$/


    // let specialCharacter =/^(?=.*[\W_]).{8,}$/
    // let bigLetter = /^(?=.*[A-Z]).{8,}$/
    // let oneNumber = /^(?=.*\d).{8,}$/
    // let eightCharacters = /^[a-zA-Z]{8,}$/

    const passValue = passInputStr.value;

    bar.style.opacity = "100%";

    if (passValue.length == 0) {
        barProgress.style.width = "0%";
        barProgress.style.backgroundColor = "unset";
        bar.style.opacity = "0%";
        passStrInfo.textContent = 'Waiting for password 🧐'
      } else if (passValue.match(perfectoPassword)) {
        barProgress.style.width = "100%";
        barProgress.style.backgroundColor = "green";
        passStrInfo.textContent = "Great! 👍😎👍";
      } else if (passValue.match(goodPassword)) {
        barProgress.style.width = "50%";
        barProgress.style.backgroundColor = "yellow";
        passStrInfo.textContent = "Good 😌";
      } else if (passValue.match(stillWeakPassword) || passValue.match(stillWeakPassword) && passValue.match(veryWeakPassword)) {
        barProgress.style.width = "25%";
        barProgress.style.backgroundColor = "red";
        passStrInfo.textContent = "Still weak 😒";
      } else if (passValue.match(veryWeakPassword)) {
        barProgress.style.width = "7.5%";
        barProgress.style.backgroundColor = "grey";
        passStrInfo.textContent = "Very weak 😢";
      } else if (passValue != 0){
        barProgress.style.width = "7.5%";
        barProgress.style.backgroundColor = "grey";
        passStrInfo.textContent = "Very weak 😢";
      }

};

const loginButtonValidation = () => {
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    if(loginEmail.value.length != 0 && loginEmail.value.match(emailPattern) && loginPassword.value.length >=8){
        loginButton.disabled = false
        console.log('validate off');
    }
}

signupBtn.addEventListener('click', switchToRegister)
loginBtn.addEventListener('click', switchToLogin)
signupBtnMobile.addEventListener('click', switchToRegisterMobile)
loginBtnMobile.addEventListener('click', switchToLoginMobile)


for(let togglePassBtn of togglePassBtns){
    togglePassBtn.addEventListener('click', showPassword)
}
passInputStr.addEventListener('input', passStrength)
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && registerBtnContainer.classList.contains('hidden')) {
        mainContainer.style.transform = "translateX(59%)"
        btnContainer.style.transform = "translateX(-171%)"
    } else {
        mainContainer.style.transform = "translateX(0%)"
        btnContainer.style.transform = "translateX(0%)"
    }
});
loginEmail.addEventListener('input', loginButtonValidation)
loginPassword.addEventListener('input', loginButtonValidation)