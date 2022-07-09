export default class User {
    static urlRegister = "https://blog-m2.herokuapp.com/users/register"
    static urlLogin = "https://blog-m2.herokuapp.com/users/login"

    static async register(user) {
        return await fetch(this.urlRegister, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((res) => {
                this.redirectionLogin(res)
            })
            .catch(err => console.log(err))
    }

    static async login(user) {
        return await fetch(this.urlLogin, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem("@kenzie_Blog:user", JSON.stringify(res.userId))
                localStorage.setItem("@kenzie_Blog:token", JSON.stringify(res.token))
                this.redirectionHomepage(res.token, res)
                return res
            })
            .catch((err) => console.log(err))
    }
    static redirectionHomepage(token, error) {
        if (token !== undefined) {
            window.location.href = "../../pages/homepage/homepage.html"
        }
        else {
            alert(`${error.message}`)
        }
    }

    static redirectionLogin(user) {
        if (user.id !== undefined) {
            window.location.href = "./src/pages/login/login.html"
        }
        else {
            alert(`${user.message}`)
        }
    }
}

