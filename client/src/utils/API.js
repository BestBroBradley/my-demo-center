import axios from 'axios'

const API = {
    authenticate: function (email) {
        return axios.get(`/api/user/${email}`)
    },

    postauth: function (details) {
        return axios.post(`/api/user/authenticate`, details)
    },

    signup: function (user) {
        console.log(user)
        return axios.post(`api/user`, user)
    }
}

export default API