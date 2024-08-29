export default function Contact() {

    return (
        <div>
            <h1>CONTACT ME</h1>
            <form style={{display:'flex', flexDirection:'column', gap:'1rem', width:'50%'}}>
                <label for="name">Name:</label>
                <input id="name" type="text" name="name"></input>

                <label for="email">Email:</label>
                <input id="email" type="text" name="email"></input>

                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="10" cols="50"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}