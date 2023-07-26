function Info() {
    return(
        <div className="info--div">
            <img className="info--image" src='../images/Fitz.png' alt="profile_pic" />
            <h1>Sven van Dijk</h1>
            <h3>Computer science student</h3>
            <button className="info--email_button">
                <img className="info--email_logo" src ='../images/mailbutton.png'></img>
                Email
            </button>
            <button className="info--linkedin_button">
                <img className="info--linkedin_logo" src='../images/linkedinbutton.png' alt="linkedin" />
                LinkedIn
            </button>
        </div>
    );
}

export default Info