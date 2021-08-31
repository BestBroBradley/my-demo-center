import '../styles/App.css';

function SignUp() {

    const handleSignUp = () => {
        console.log("Signed up!")
    }

    return (
        <div className="SignUp">
            <h1>Welcome!  Sign up below.</h1>
            <div id="signup">
                <label htmlFor="new-email">Email</label><br />
                <input id="new-email"></input><br />
                <label htmlFor="new-password">Password</label><br />
                <input type="password" id="new-password"></input><br />
                <button onClick={handleSignUp}>Sign me up!</button>
            </div>
        </div>
    );
}

export default SignUp;