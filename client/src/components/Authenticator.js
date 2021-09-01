import API from "../utils/API"

const Authenticator = (props) => {

    const { user, setUser } = props.props

    const handleAuth = (event => {
        API.authenticate(user.email)
            .then(response => {
                console.log(response)
                window.location.href = `${response.data.url}`
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