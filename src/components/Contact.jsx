import '../styles/components/contact.css'

function Contact() {
    return (
        <section id="contact">
            <div>
                <div className="contact">
                    <span className="line"></span>
                    <h2 className="sub-title">Let's work together...</h2>
                </div>
                <p className="info">
                    Feel free to reach out if you'd like to collaborate or just say hi!
                </p>
            </div>

            <form action="mailto:ylmzhnf@gmail.com" method="post">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="13" rows="4"></textarea>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </section>
    )
}

export default Contact
