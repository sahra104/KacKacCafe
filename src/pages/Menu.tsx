function Menu() {
    return (
        <div className="page menu">
            <div className="overlay">
                <h1>Our Menu</h1>

                <h2>Traditional Pastries</h2>
                <div className="card">
                    <h3>Kac Kac</h3>
                    <p>Traditional Somali crunchy doughnut style pastry.</p>
                    <p>Ksh 250</p>
                </div>
                <div className="card">
                    <h3>Malawax</h3>
                    <p>Sweet, thin Somali pancake crepe perfect with honey.</p>
                    <p>Ksh 300</p>
                </div>
                <div className="card">
                    <h3>Sambuus</h3>
                    <p>Crispy pastry filled with minced spiced beef or lentils.</p>
                    <p>Ksh 200</p>
                </div>

                <h2>Hot Drinks</h2>
                <div className="card">
                    <h3>Shaah Cadays</h3>
                    <p>Authentic spiced tea brewed with milk, cardamom, and ginger.</p>
                    <p>Ksh 150</p>
                </div>
            </div>
        </div>
    );
}

export default Menu;