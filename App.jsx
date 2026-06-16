import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            
            {/*Hero Section*/}
            <section className="hero">
                <h1>Siberian Husky World</h1>
                <p>Strong * Loyal * Beautiful</p>
            </section>

            {/*About Section*/}
            <section className="section">
                <h2>About Siberian Huskies</h2>
                <p>
                    Siberian Huskies are a medium-sized working dog breed known for their striking appearance and friendly nature. They have a thick double coat that helps them withstand cold temperatures, making them ideal for snowy climates. Huskies are highly energetic and require regular exercise to keep them happy and healthy. They are also known for their intelligence and independence, which can make training a bit challenging but rewarding.
                </p>
            </section>

            {/*Gallery Section*/}
            <section className="section gallery">
                <h2>Husky Gallery</h2>
                <div className="gallery-grid">
                    <img src="https://img.freepik.com/premium-photo/red-husky-dog-with-blue-eyes-closeup-winter-portrait-siberian-husky-dog-sunny-snowy-forest_112397-2500.jpg?w=360" alt="Siberian Husky 1" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPQHKy7zHZOfGDbtzuQuEpafuRgLj8YStpA&s" alt="Siberian Husky 2" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHDCN0fM3V4aUl0s_1uH3eEYj-jaJN29WssQ&s" alt="Siberian Husky 3" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3h0_q5UOJ2lbuIKYQSn7XTpk0s2-V2PhCSQ&s" alt="Siberian Husky 4" />
                    <img src="https://i.pinimg.com/564x/fe/55/0a/fe550a7c75a9457b6f5072349da74d2e.jpg" alt="Siberian Husky 5" />
                </div>

                {/* Care Tip */}
                <section className="section">
                    <h2>Care Tips for Siberian Huskies</h2>
                    <ul>
                        <li>Regular Exercise: Huskies are energetic dogs that require daily exercise to prevent boredom and destructive behavior.</li>
                        <li>Grooming: Their thick coat needs regular brushing, especially during shedding season, to keep it healthy and reduce shedding.</li>
                        <li>Diet: Provide a balanced diet with high-quality dog food to meet their nutritional needs.</li>
                        <li>Training: Start training early and be consistent. Huskies can be stubborn, so positive reinforcement works best.</li>
                        <li>Socialization: Expose them to different people, animals, and environments to help them become well-rounded dogs.</li>
                    </ul>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <p>&copy; 2024 Siberian Husky World. All rights reserved.</p>
                </footer>
            </section>
        </div>
    );
} 

export default App;
