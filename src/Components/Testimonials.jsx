import React from 'react';

const testimonials = [
    {
        quote: "I love my new jersey from Cric-Kit! The quality is fantastic, and it fits perfectly!",
        name: "Alex T."
    },
    {
        quote: "The footballs are of great quality. My kids can't get enough of playing with them!",
        name: "Maria G."
    },
    {
        quote: "Cric-Kit has an amazing selection of indoor games. Our family game nights have never been better!",
        name: "James L."
    },
    {
        quote: "Fast shipping and great customer service. Highly recommend for all sports lovers!",
        name: "Sarah W."
    }
];

const Testimonials = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>What Our Customers Say</h1>
                <p>Your one-stop shop for jerseys, footballs, and indoor games!</p>
            </header>
            <main style={styles.main}>
                <section style={styles.testimonials}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} style={styles.testimonial}>
                            <p>"{testimonial.quote}"</p>
                            <h3>- {testimonial.name}</h3>
                        </div>
                    ))}
                </section>
            </main>
            <footer style={styles.footer}>
                <p>&copy; 2024 Cric-Kit. All rights reserved.</p>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: 0,
        backgroundColor: '#f4f4f4',
    },
    header: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
    },
    main: {
        padding: '20px',
    },
    testimonials: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '800px',
        margin: 'auto',
    },
    testimonial: {
        background: 'white',
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '10px 0',
        padding: '20px',
        width: '100%',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    footer: {
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
    },
};

export default Testimonials;
