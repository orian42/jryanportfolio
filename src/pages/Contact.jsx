import { useState } from "react";

// Importing this help function to validate the email input
import { validateEmail } from "../utils/helpers";

export default function Contact() {
    //State variables
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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
    }

    const handleBlur = (e) => {
        //Gets the name and value of the form field being changed
        const { name } = e.target;

        //check to see if email is invalid or form is empty
        if (name === 'email' && !validateEmail(email)) {
            setErrorMessage('Please enter a valid email address to proceed.');
            return;
        }
        if (name === 'name' && !userName) {
            setErrorMessage('Your name is required to proceed.');
            return;
        }
        if (name === 'message' && !message) {
            setErrorMessage('A message is required to proceed.');
            return;
        }
        // Clear error message if input is valid
        setErrorMessage('');
    }

    return (
        <div>
            <h1>CONTACT ME</h1>
            <form
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '50%' }}
            >
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={userName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />

                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    rows="10"
                    cols="50"
                    value={message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />

                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    )
}