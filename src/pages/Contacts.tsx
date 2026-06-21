function Contact() {
    return (
        <div className="page contact">
            <div className="overlay">
                <h1>Contact Us</h1>

                <form>
                    <input placeholder="Name" />
                    <input placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;