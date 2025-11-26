import '../styles/components/about.css'

function About() {
    return (
        <section id="about">
            <div className="about-me">
                <span className="line"></span>
                <h2 className="sub-title">About Me</h2>
            </div>
            <p className="info">
                Hi, I'm Hanife — a front-end developer passionate about clean and
                minimal design. I love building websites that are simple, elegant, and
                easy to use. Right now, I’m focusing on improving my JavaScript and
                full-stack skills to create more dynamic and interactive projects.
            </p>
            <a className="about-btn" href="#">Resume</a>

            <article className="skills">
                <i className="fa-brands fa-html5 logo"></i>
                <i className="fa-brands fa-css3 logo"></i>
                <i className="fa-brands fa-js logo"></i>
                <i className="fa-brands fa-react logo"></i>
                <i className="fa-brands fa-node-js logo"></i>
                <i className="fa-solid fa-database logo"></i>
            </article>
        </section>
    )
}

export default About
