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
const passInputStr = document.querySelector('.passInputStr')
const passwordStrength = document.querySelector('.passwordStrength')
const passStrInfo = document.querySelector('.passStrInfo')
const bar = document.querySelector('.bar')
const barProgress = document.querySelector('.barProgress')


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

const passStrength = () => {
    let bigLetter = /^(?=.*[A-Z]).{8,}$/;
    let twoNumberBigLetter = /^(?=.*[A-Z])(?=.*\d.*\d).{8,}$/;
    let perfectoPassword = /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{8,}$/;
    const passValue = passInputStr.value;
  
    if (passValue.length == 0) {
      barProgress.style.width = "0%";
      barProgress.style.backgroundColor = "unset";
      passStrInfo.textContent = "";
    } else if (passValue.match(perfectoPassword) && passValue.length > 8) {
      barProgress.style.width = "100%";
      barProgress.style.backgroundColor = "green";
      passStrInfo.textContent = "Great! 👍😎👍";
    } else if (passValue.match(twoNumberBigLetter)) {
      barProgress.style.width = "50%";
      barProgress.style.backgroundColor = "yellow";
      passStrInfo.textContent = "Good 😌";
    } else if (passValue.match(bigLetter)) {
      barProgress.style.width = "25%";
      barProgress.style.backgroundColor = "red";
      passStrInfo.textContent = "Still weak 😒";
    } else if (passValue.length > 0 && passValue.length < 8) {
      barProgress.style.width = "7.5%";
      barProgress.style.backgroundColor = "grey";
      passStrInfo.textContent = "Very weak 😢";
    }
  };

signupBtn.addEventListener('click', switchToRegister)
loginBtn.addEventListener('click', switchToLogin)
for(let togglePassBtn of togglePassBtns){
    togglePassBtn.addEventListener('click', showPassword)
}
passInputStr.addEventListener('input', passStrength)