import API from "../utils/API"

const Authenticator = () => {

    const handleAuth = (event) => {
        const email = document.getElementById('email').value
        API.authenticate(email)
    }

    return (
        <div id="authenticator">
            <label for="email">Email</label><br />
            <input id="email"></input><br />
            <button onClick={handleAuth}>Authenticate!</button>
        </div>)
}

export default Authenticator