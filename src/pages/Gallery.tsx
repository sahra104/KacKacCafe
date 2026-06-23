function Gallery() {
    return (
        <div className="page gallery">
            <div className="overlay">
                <h1>Gallery</h1>
                <p>Take a visual tour through our cafe space and authentic recipe preps.</p>

                <div className="photo-grid">
                    <div className="photo-placeholder">
                        <h3>Our Cozy Seating Corner</h3>
                        <p>Designed to replicate the communal warmth of historic meeting spots.</p>
                    </div>
                    <div className="photo-placeholder">
                        <h3>Freshly Brewed Shaah Cadays</h3>
                        <p>Steaming spiced milk tea served fresh to order every hour.</p>
                    </div>
                    <div className="photo-placeholder">
                        <h3>Golden Crispy Kac Kac Pastries</h3>
                        <p>Handcrafted daily using traditional, unbleached family recipes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;