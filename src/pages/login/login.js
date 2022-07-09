import UserLogin from "../../models/login.model.js"
import User from "../../controllers/user.controller.js"

const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("password")
const btnLogin = document.querySelector(".btn_login")
const btnClose = document.querySelector(".btn_close")

btnLogin.addEventListener("click", async (event) => {
    event.preventDefault()
    const login = new UserLogin(inputEmail.value, inputSenha.value)
    await User.login(login)
})

btnClose.addEventListener("click", () => {
    window.location.href = "../register/index.html"
})



