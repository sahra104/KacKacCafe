function Contacts() {
    return (
        <div className="page contacts">
            <div className="overlay">
                <h1>Contact Us</h1>
                <p>Have questions, catering requests, or feedback? Get in touch with us anytime.</p>

                <div className="contact-details">
                    <p>📍 <strong>Location:</strong> Banda Street, Nairobi, Kenya</p>
                    <p>📞 <strong>Phone:</strong> +254 700 000000</p>
                    <p>📧 <strong>Email:</strong> info@kackaccafe.com</p>
                </div>

                <form className="contact-form">
                    <h3>Send us a Message</h3>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows={4} required></textarea>
                    <button type="submit">Submit Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;