const Email = (props) => {

    let email = props.props

    const from = email.from[0].name
    const fromMail = email.from[0].email
    const subject = email.subject
    const body = email.body

    const viewMsg = () => {
        // Render popup with email content
        console.log("Clicked!")
    }

    return (
        <div className="email-comp">
            <div>
                <h2>From: { from }  ({ fromMail })</h2>
                <h2>Subject: { subject }</h2>
                <button onClick={viewMsg}>See full message</button>
            </div>
        </div>
    )
}

export default Email