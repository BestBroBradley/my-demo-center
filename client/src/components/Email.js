const Email = (props) => {

    const email = props.props

    console.log(email)
    
    return (
        <div className="email-comp">
            <div><h2>From: ${email.from}</h2>
                <h2>Subject: ${email.subject}</h2>
                <p>${email.body}</p>
            </div>
        </div>
        )
}

export default Email