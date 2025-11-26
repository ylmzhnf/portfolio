import '../styles/components/hero.css'

function Hero() {
    return (
        <section className="hero" aria-label="Introduction section">
            <h1>Hi, I'm <span className="under-line">Hanife</span></h1>
            <p className="info">
                Full-Stack Developer in Progress | Creating robust and user-centric
                web applications.
            </p>
            <a href="#projects" className="project-btn">My Projects</a>
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
        </section>
    )
}

export default Hero
