import Posts from "../controllers/posts.controller.js"
import editaPost from "../pages/homepage/homepage.js"

export default class CardPost {

    static ul = document.querySelector(".container_list_message")

    static createPost(posts) {

        posts.data.forEach((post) => {

            const idUser = parseInt(localStorage.getItem("@kenzie_Blog:user"))
            const token = JSON.parse(localStorage.getItem("@kenzie_Blog:token"))
            const idPost = post.user.id
            let date = post.createdAt.split("T").splice(0, 1)

            const li = document.createElement("li")
            const divPerfil = document.createElement("div")
            const img = document.createElement("img")
            const divText = document.createElement("div")
            const h3 = document.createElement("h3")
            const p = document.createElement("p")
            const divBtn = document.createElement("div")
            const btnEdit = document.createElement("button")
            const btnDelete = document.createElement("button")
            const span = document.createElement("span")

            li.classList.add("post_message")
            divPerfil.classList.add("perfil_user")
            divText.classList.add("post_text")
            divBtn.classList.add("post_btn")
            btnEdit.classList.add("btn_edit")
            btnDelete.classList.add("btn_delete")
            span.classList.add("date")

            const modal = document.querySelector(".modal")
            const btnClose = document.querySelector(".btn_close")

            btnClose.addEventListener("click", () => {
                modal.style.display = "none"
            })

            btnEdit.addEventListener("click", () => {
                const modal = document.querySelector(".modal")
                modal.style.display = "block"
                editaPost(post.id)
            })

            btnDelete.addEventListener("click", async () => {
                await Posts.deletePost(post.id, token)
                window.location.reload(true)
            })

            img.src = post.user.avatarUrl
            img.alt = `Foto de Perfil de ${post.user.username}`

            h3.innerText = post.user.username
            p.innerText = post.content

            btnEdit.innerText = "Editar"
            btnDelete.innerText = "Apagar"

            span.innerText = date[0].split("-").reverse().join("/")


            if (idUser === idPost) {
                divBtn.append(btnEdit, btnDelete, span)
            }
            else {
                divBtn.appendChild(span)
            }

            divPerfil.appendChild(img)
            divText.append(h3, p)
            li.append(divPerfil, divText, divBtn)

            this.ul.appendChild(li)
        })
        return this.ul
    }
} 
