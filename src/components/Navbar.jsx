import '../styles/components/navbar.css'

function Navbar() {
    return (
        <header>
            <nav>
                <ul className="navbar">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
