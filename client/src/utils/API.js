import axios from 'axios'

const API = {
    authenticate: function (email) {
        return axios.get(`/api/user/${email}`)
    },

    postauth: function (details) {
        return axios.post('/api/user/authenticate', details)
    },

    signup: function (user) {
        return axios.post('api/user', user)
    },

    getmail: function(email) {
        const data = axios.get(`api/email/${email}`)
        console.log(data)
        return data
    }
}

export default API