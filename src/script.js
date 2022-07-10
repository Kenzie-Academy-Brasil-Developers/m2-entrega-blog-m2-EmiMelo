import User from "./controllers/user.controller.js"
import RegisterUser from "./models/registerUser.model.js"

const inputUsername = document.getElementById("username")
const inputEmail = document.getElementById("email")
const inputFotoDePerfil = document.getElementById("perfil")
const inputPassword = document.getElementById("password")

const btnRegister = document.querySelector(".btn_register")
btnRegister.addEventListener("click", async (event) => {
    event.preventDefault()
    const newUsuario = new RegisterUser(inputUsername.value, inputEmail.value, inputFotoDePerfil.value, inputPassword.value)
    console.log(await User.register(newUsuario))
})