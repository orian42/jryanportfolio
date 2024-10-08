import { useState } from "react";
import emailjs from 'emailjs-com';

// Importing this help function to validate the email input
import { validateEmail } from "../utils/helpers";

export default function Contact() {
    //State variables
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [buttonDisable, setButtonDisable] = useState(true);

    const handleInputChange = (e) => {
        //Gets the name and value of the form field being changed
        const { name, value } = e.target;

        if (name === 'name') {
            setUserName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else {
            setMessage(value);
        }

        // Final validation - submit button activates when all fields are validated; otherwise, is disabled
        if (userName && message && validateEmail(email)) {
            setButtonDisable(false);
        } else {
            setButtonDisable(true);
        }
    };

    const handleBlur = (e) => {
        //Gets the name and value of the form field being changed
        const { name } = e.target;

        //check to see if email is invalid or form is empty
        if (name === 'name' && !userName) {
            setErrorMessage('Your name is required to proceed.');
            return;
        }
        if (name === 'email' && !validateEmail(email)) {
            setErrorMessage('Please enter a valid email address to proceed.');
            return;
        }
        if (name === 'message' && !message) {
            setErrorMessage('A message is required to proceed.');
            return;
        }
        // Clear error message if input is valid
        setErrorMessage('');
    };

    const handleSubmit = (e) => {
        //prevent default behavior
        e.preventDefault();

        // EmailJS function to send the email
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                user_name: userName,
                user_email: email,
                message: message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            console.log('Email sent successfully', result.text);
            // Optionally show success message to user
        }, (error) => {
            console.log('Failed to send email', error.text);
            // Optionally show error message to user
        });

        //Clear field values and reset form
        setUserName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
        setButtonDisable(true);
    };

    // Render "contact me" form
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <h1 className="title is-2">Contact Me</h1>
            <div
                id="contactForm"
                className="notification is-success shadow"
            >
                <form
                    style={{ margin: '10px', width: '95%' }}
                    onSubmit={handleSubmit}
                >
                    <div className="field">
                        <label htmlFor="name" className="label">Name:</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="input is-link"
                            placeholder="Name"
                            value={userName}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="email" className="label">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="input is-link"
                            placeholder="Email"
                            value={email}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="message" className="label">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Type your message here"
                            className="textarea is-link"
                            rows="5"
                            value={message}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="field">
                        <button
                            type="submit"
                            className="button is-link"
                            disabled={buttonDisable}
                        >Submit</button>
                    </div>

                </form>
            </div>

            {/* Error messages will display here */}
            {errorMessage && (
                <article className="message is-danger">
                    <div className="message-header">
                        <p>{errorMessage}</p>
                    </div>
                </article>
            )}
        </div>
    );
}