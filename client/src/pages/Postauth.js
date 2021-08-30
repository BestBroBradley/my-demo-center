import API from '../utils/API.js'
import { useEffect } from 'react'

function Postauth(props) {

    const { user, setUser } = props.props

    useEffect(() => {
        const url = window.location.href
        const token = url.split('=')[1]
        setUser({...user, token: token, loggedIn: true})
        API.postauth(token)
    }, [])

return (
    <></>
);
}

export default Postauth;