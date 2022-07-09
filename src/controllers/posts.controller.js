export default class Posts {

    static urlAllPosts = "https://blog-m2.herokuapp.com/posts?page="
    static urlCreatePost = "https://blog-m2.herokuapp.com/posts"

    static async GetAllPosts(numberPage, token) {
        return await fetch(`${this.urlAllPosts}${numberPage}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static async createPost(message, token) {
        return await fetch(this.urlCreatePost, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                "content": message
            })
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static async editPost(id, newMessage, token) {
        return await fetch(`${this.urlCreatePost}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                "content": newMessage
            })
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    }

    static async deletePost(id, token) {
        return await fetch(`${this.urlCreatePost}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}