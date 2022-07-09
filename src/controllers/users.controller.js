export default class Users {
    static url = "https://blog-m2.herokuapp.com/users"

    static async getUser(id, token) {
        return await fetch(`${this.url}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}