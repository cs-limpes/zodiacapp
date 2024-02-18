import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer'; 
import './Page.css';

const ZodiacPage = () => {
    return (
        <div className="Zodiac-page">
            <Header />
            <main className="Zodiac-content">
                <h1>Zodiac Signs</h1>
                <p>This is where we explain the zodiac and how compatibility works</p>
                <section>
                    <h2>Our Mission</h2>
                    <p>Our mission is to provide exceptional service and to follow through on our promises. We strive to deliver individualized solutions to all our client's needs and add value to our clients' businesses.</p>
                </section>
                <section>
                    <h2>Our Team</h2>
                    <p>Our team is made up of highly skilled professionals dedicated to achieving the best outcomes for our clients. We pride ourselves on our integrity, reliability, and expertise.</p>
                </section>
                {/* Add more sections as needed */}
            </main>
            <Footer />
        </div>
    );
};

export default ZodiacPage;
