function Home() {
    return (
        <div className="page home">
            <div className="overlay">
                <h1>Kac Kac Café</h1>
                <p>Taste the Warmth of Somali Tradition</p>
                <p className="welcome-text">
                    Welcome to Nairobi's finest cultural coffee house. Join us for freshly brewed spiced tea and traditional pastries made from recipes passed down through generations.
                </p>
                <button className="cta-btn">Explore Our Menu</button>

                <div className="hours-section">
                    <h3>Opening Hours</h3>
                    <p>Monday - Sunday: 7:00 AM - 10:00 PM</p>
                </div>
            </div>
        </div>
    );
}

export default Home;