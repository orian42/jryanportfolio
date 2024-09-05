export default function Footer() {

    // Render social media links
    return (
        <footer style={{ display: 'flex', justifyContent: 'center', padding: '5px' }}>
            <div class="tabs is-toggle is-toggle-rounded">
                <ul>
                    <li>
                        <a href='https://github.com/orian42' target="_blank">
                            <span class="icon">
                                <i class="fa-brands fa-github fa-3x" aria-hidden="true"></i>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/orian42/' target="_blank">
                            <span class="icon">
                                <i class="fa-brands fa-linkedin fa-3x" aria-hidden="true"></i>
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/orian42' target="_blank">
                            <span class="icon">
                                <i class="fa-brands fa-facebook fa-3x" aria-hidden="true"></i>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
