import axios from 'axios'

export default {
    authenticate: function (email) {
        return axios.get(`/api/user/${email}`)
    },

    postauth: function (code) {
        return axios.post(`/api/user/authenticate/${code}`)
    }
}