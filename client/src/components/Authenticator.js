import API from "../utils/API"

const Authenticator = (props) => {

    const { user } = props.props
    console.log(user)

    const handleAuth = (event => {
        API.authenticate(user.email)
            .then(response => {
                console.log(response)
                window.location.href = `${response.data.url}`
            })
    })

    return (
        <div id="authenticator">
            <h1>Thanks for signing up, {user.email}!</h1>
            <br />
            <button onClick={handleAuth}>Authenticate!</button>
        </div>)
}

export default Authenticator