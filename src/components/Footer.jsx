import '../styles/components/footer.css'

function Footer() {
    return (
        <footer>
            <p>© 2025 Hanife Yilmaz</p>
            <div className="social-link">
                <ul>
                    <li>
                        <a href="https://github.com/ylmzhnf" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github icon"></i></a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/hanife-y%C4%B1lmaz-b9137b178/"
                            target="_blank"
                            rel="noreferrer"
                        ><i className="fa-brands fa-square-linkedin icon"></i></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
