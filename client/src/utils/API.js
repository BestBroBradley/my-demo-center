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

    signin: function (details) {
        return axios.get(`api/user/login/${details.email}/${details.password}`)
    },

    getusers: function() {
        return axios.get(`api/user`)
    },

    getmail: function(email) {
        return axios.get(`api/email/${email}`)
    },

    getevents: function(details) {
        const email = details.email
        const date = details.date
        return axios.get(`api/events/${email}/${date}`)
    }
}

export default API