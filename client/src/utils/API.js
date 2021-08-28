import axios from 'axios'

const clientID = "2zdsfs2skw3lwg9tpl2ynvnyw"
const clientSecret = "e41hzjmvvr5bebrynioaubvxu"
const googleClientSecret = "Bk_vNsqqmSnZEjtzQgqvYiVr"

export default {
    authenticate: function (email) {

        return axios({
            method: 'get',
            url: `https://api.nylas.com/oauth/authorize?client_id=${clientID}&redirect_uri=http:localhost:3000/oauth/callback&response_type=code&scopes=email&login_hint=${email}`,
            data: {
                Authorization: clientSecret
            }

        })
    }
}
