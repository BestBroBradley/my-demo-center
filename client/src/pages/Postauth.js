import API from '../utils/API.js'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Postauth(props) {

    const { user, setUser } = props.props

    const history = useHistory()

    useEffect(() => {
        const url = window.location.href
        const email = parseEmail(url.split('=')[1])
        const code = url.split('=')[2]
        setUser({ ...user, loggedIn: true, email: email })
        const details = {
            code,
            email
        }
        API.postauth(details)
            .then(response => {
                console.log(response)
                history.push("/")
            })
    }, [])

    const parseEmail = (raw) => {
        let email = raw.split('%40')
        email = ((email[0] + "@" + email[1]).split('&')[0])
        return email
    }

    return (
        <>
        </>
    );
}

export default Postauth;