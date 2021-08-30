import axios from 'axios'

export default {
    authenticate: function (email) {
        return axios.get(`/api/user/ + ${email}`)
    }
}