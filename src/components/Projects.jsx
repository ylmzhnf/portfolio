import '../styles/components/projects.css'

function Projects() {
    return (
        <section id="projects">
            <div className="project">
                <span className="line"></span>
                <h2 className="sub-title">Projects</h2>
            </div>
            <p className="info">Here are some of my recent works and experiments:</p>

            <article className="project-grid">
                <ul>
                    <div className="project-item">
                        <li>
                            <a href="https://blog-app-wb8o.onrender.com" target="_blank" rel="noreferrer"
                            ><img
                                    className="image"
                                    src="/assets/images/blog-app-screenshots.png"
                                    alt="blog app screenshots"
                                />
                            </a>
                        </li>
                        <div className="project-info">
                            <h3>BLOG APP : A Dynamic Blog Platform</h3>
                            <p className="info">
                                A personal blog application created using Node.js, Express.js,
                                and EJS, designed to demonstrate core CRUD (Create, Read,
                                Update, Delete) functionalities in a mobile-responsive
                                environment.
                            </p>
                            <div className="project-link">
                                <a href="https://blog-app-wb8o.onrender.com" target="_blank" rel="noreferrer"
                                >View Project</a
                                >
                                <a href="https://github.com/ylmzhnf/blog-app" target="_blank" rel="noreferrer"
                                >View Code</a
                                >
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <li>
                            <a
                                href="https://ylmzhnf.github.io/frontend-mentor-learning/"
                                target="_blank"
                                rel="noreferrer"
                            ><img
                                    className="image"
                                    src="/assets/images/frontend-mentor-practice-screenshot.png"
                                    alt="frontend mentor practice screenshots"
                                />
                            </a>
                        </li>
                        <div className="project-info">
                            <h3>Frontend Mentor Solutions</h3>
                            <p className="info">
                                This repository showcases my solutions to various Frontend
                                Mentor challenges. Each project is built with a mobile-first
                                approach and focuses on clean structure, responsive design,
                                and reusable components.
                            </p>
                            <div className="project-link">
                                <a href="https://ylmzhnf.github.io/frontend-mentor-learning/" target="_blank" rel="noreferrer"
                                >View Project</a
                                >
                                <a href="https://github.com/ylmzhnf/frontend-mentor-learning?tab=readme-ov-file" target="_blank" rel="noreferrer"
                                >View Code</a
                                >
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                        <li>
                            <a
                                href="https://ylmzhnf.github.io/time-tracking-dashboard/"
                                target="_blank"
                                rel="noreferrer"
                            ><img
                                    className="image"
                                    src="/assets/images/time-tracking-dashboard-screenshot.png"
                                    alt="time tracking dashboard screenshot"
                                />
                            </a>
                        </li>
                        <div className="project-info">
                            <h3>Time Tracking Dashboard</h3>
                            <p className="info">
                                Frontend Mentor challenge solution: A dynamic dashboard demonstrating data fetching (Fetch API) and state management to switch between Daily, Weekly, and Monthly views..
                            </p>
                            <div className="project-link">
                                <a href="https://ylmzhnf.github.io/time-tracking-dashboard/" target="_blank" rel="noreferrer"
                                >View Project</a
                                >
                                <a href="https://github.com/ylmzhnf/time-tracking-dashboard" target="_blank" rel="noreferrer"
                                >View Code</a
                                >
                            </div>
                        </div>
                    </div>
                </ul>
            </article>
        </section>
    )
}

export default Projects
