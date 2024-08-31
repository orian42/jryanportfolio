import { useState } from "react";

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

        //Clear field values
        setUserName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h1 class="title is-2">CONTACT ME</h1>
            <form
                style={{ margin: '10px', width: '50%' }}
            >
                <div class="field">
                    <label htmlFor="name" class="label">Name:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        class="input is-link"
                        placeholder="Name"
                        value={userName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                </div>

                <div class="field">
                    <label htmlFor="email" class="label">Email:</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        class="input is-link"
                        placeholder="Email"
                        value={email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                </div>

                <div class="field">
                    <label htmlFor="message" class="label">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here"
                        class="textarea is-link"
                        rows="5"
                        value={message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                </div>

                <div class="field">
                    <button
                        type="submit"
                        class="button is-link"
                        disabled={buttonDisable}
                    >Submit</button>
                </div>

            </form>

            {/* Error messages will display here */}
            {errorMessage && (
                <article class="message is-danger">
                    <div class="message-header">
                        <p>{errorMessage}</p>
                    </div>
                </article>
            )}
        </div>
    );
}