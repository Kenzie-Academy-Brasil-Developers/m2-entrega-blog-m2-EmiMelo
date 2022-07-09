import Posts from "./controllers/posts.controller.js"
import CardPost from "./models/createCardPost.model.js"
import Users from "./controllers/users.controller.js"

const token = JSON.parse(localStorage.getItem("@kenzie_Blog:token"))
const post1 = await Posts.GetAllPosts(1, token)

const text = document.getElementById("text")
const btnAddText = document.querySelector(".btn_add_text")
btnAddText.addEventListener("click", async (event) => {
    event.preventDefault()
    await Posts.createPost(text.value, token)
    window.location.reload(true)
})

export default function editaPost(id) {

    const textValue = document.getElementById("text_edit")
    const btnEdit = document.querySelector(".btn_edit_post")

    btnEdit.addEventListener("click", async (event) => {
        event.preventDefault()
        await Posts.editPost(id, textValue.value, token)
        const modal = document.querySelector(".modal")
        modal.style.display = "none"
        window.location.reload(true)
    })
}

async function header() {
    const nameUser = document.querySelector(".name_user")
    const img = document.querySelector(".perfil_usuario_logado")

    const idUser = parseInt(localStorage.getItem("@kenzie_Blog:user"))
    const userLogado = await Users.getUser(idUser, token)

    nameUser.innerText = userLogado.username
    img.src = userLogado.avatarUrl
    img.alt = `Foto de perfil de ${userLogado.username}`
}
header()

const btnLogout = document.querySelector(".btn_logout")
btnLogout.addEventListener("click", () => {
    localStorage.removeItem("@kenzie_Blog:token")
    localStorage.removeItem("@kenzie_Blog:user")
    window.location.href = "./src/pages/login/login.html"
})

console.log(post1)
CardPost.createPost(post1)