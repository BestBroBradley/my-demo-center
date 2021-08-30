import API from "../utils/API"

const Authenticator = (props) => {

    const { user, setUser } = props.props

    const handleAuth = (event => {
        const email = document.getElementById('email').value
        API.authenticate(email)
            .then(response => {
                console.log(response)
                window.location.href = `${response.data.url}`
                setUser({...user, email: response.data.email})
            })
    })

    return (
        <div id="authenticator">
            <label htmlFor="email">Email</label><br />
            <input id="email"></input><br />
            <button onClick={handleAuth}>Authenticate!</button>
        </div>)
}

export default Authenticator