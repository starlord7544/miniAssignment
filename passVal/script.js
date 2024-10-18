const username = document.getElementById("username")
const userReq1 = document.getElementById("userReq1")
const userReq2 = document.getElementById("userReq2")

let validUsername = false

username.addEventListener("input", (e) => {
    e.preventDefault()
    validateUsername()
})

const validateUsername = () => {
    let len = username.value.length
    if (len < 3)
    {
        validUsername = false
        userReq1.style.display = "block"
    }
    else if (len > 25)
    {
        validUsername = false
        userReq2.style.display = "block"
    }
    if ((len >= 3 && len <= 25) || len === 0)
    {
        userReq1.style.display = "none"
        userReq2.style.display = "none"
        validUsername = true
    }

}

const email = document.getElementById("email")
const emailReq = document.getElementById("emailReq")

let validEmail = false

email.addEventListener("input", (e) => {
    e.preventDefault()
    validateEmail()
})

const validateEmail = () => {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.value.match(emailRegex) && email.value.length >= 5)
    {
        validEmail = false
        emailReq.style.display = "block"
    }
    else
    { 
        validEmail = true  
        emailReq.style.display = "none"
    }
}

const mob = document.getElementById("mob")
const mobReq1 = document.getElementById("mobReq1")
const mobReq2 = document.getElementById("mobReq2")

let validMob = false

mob.addEventListener("input", (e) => {
    e.preventDefault()
    validateMob()
})

const validateMob = () => {
    let len = mob.value.length
    const numRegex = /^\d+$/

    if (len > 10)
    {
        validMob = false
        mobReq1.style.display = "block"
        mobReq2.style.display = "none"
    }
    else if (!mob.value.match(numRegex) && len > 0)
    {
        validMob = false
        mobReq1.style.display = "none"
        mobReq2.style.display = "block"
    }
    else
    {
        validMob = true
        mobReq1.style.display = "none"
        mobReq2.style.display = "none"
    }
}

const pass = document.getElementById("password")
const passReq1 = document.getElementById("passReq1")
const passReq2 = document.getElementById("passReq2")
const passReq3 = document.getElementById("passReq3")
const passReq4 = document.getElementById("passReq4")
const showPass = document.getElementById("checkbox")

showPass.addEventListener('change', (e) => {
    if (showPass.checked) 
        pass.type = "text"
    else
        pass.type = "password"
})

let validPass = false

pass.addEventListener("input", (e) => {
    e.preventDefault()
    validatePass()
})

const validatePass = () => {
    const specialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
    const lowerRegex = /[a-z]/
    const upperRegex = /[A-Z]/
    const numRegex = /[0-9]/

    let boolArr = [false, false, false, false]
    let password = pass.value

    boolArr[0] = password.match(specialRegex) ? true : false
    boolArr[0] === true ? passReq1.style.display = "none" : passReq1.style.display = "block"

    boolArr[1] = password.match(lowerRegex) ? true : false
    boolArr[1] === true ? passReq2.style.display = "none" : passReq2.style.display = "block"

    boolArr[2] = password.match(upperRegex) ? true : false
    boolArr[2] === true ? passReq3.style.display = "none" : passReq3.style.display = "block"

    boolArr[3] = password.match(numRegex) ? true : false
    boolArr[3] === true ? passReq4.style.display = "none" : passReq4.style.display = "block"

    validPass = boolArr.every(bool => bool === true)
}

const submitBtn = document.getElementById("button")

console.log(submitBtn)

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (validUsername && validEmail && validMob && validPass)
        alert('Registration successful');
    else
        alert('Registration Failed\nKindly check the input conditions ')
})

validateUsername()
validateMob()
validateEmail()
validatePass()
