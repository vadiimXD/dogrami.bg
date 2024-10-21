import "./Contact.css"

export default function Contact() {
    return (
        <section className="contact-container">
            <form className="contact-form">
                <h1>Свържете с нас</h1>
                <div className="form-group">
                    <label htmlFor="name">Вашето име:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Вашия имейл:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Вашето съобщение:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">
                    Изпрати съобщение
                </button>
            </form>
        </section>
    );
}
