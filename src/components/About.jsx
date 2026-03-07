import "../styles/components/about.css";
import myResume from "../assets/Hanife_Yilmaz_Full_Stack_Web_Developer_CV_2026.pdf";

const skillsData = [
  {
    title: "Frontend & UI",
    description:
      "Building flawless, type-safe, and interactive user interfaces.",
    icon: "fa-brands fa-react",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
  },
  {
    title: "Backend & Database",
    description:
      "Designing scalable enterprise architectures and robust data models.",
    icon: "fa-brands fa-node-js",
    technologies: ["NestJS", "Node.js", "PostgreSQL", "Prisma ORM"],
  },
  {
    title: "System Architecture",
    description:
      "Optimizing performance with microservices and asynchronous processing.",
    icon: "fa-solid fa-server",
    technologies: ["RabbitMQ", "Redis", "Microservices"],
  },
  {
    title: "QA & Automation",
    description:
      "Ensuring reliable, crash-free code through comprehensive testing.",
    icon: "fa-solid fa-check-double",
    technologies: ["Jest", "Vitest", "Supertest", "Playwright"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Containerizing applications and building automated deployment pipelines.",
    icon: "fa-brands fa-aws",
    technologies: ["Docker", "AWS (EC2, RDS, S3)", "GitHub Actions", "CI/CD"],
  },
  {
    title: "AI Integration",
    description:
      "Empowering web applications with smart assistants and autonomous features.",
    icon: "fa-solid fa-brain",
    technologies: ["Vercel AI SDK", "LangChain", "OpenAI API"],
  },
];

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
      <a
        className="about-btn"
        href={myResume}
        target="_blank"
        rel="noopener noreferrer"
        download="Hanife_Resume.pdf"
      >
        Resume
      </a>

      <article className="skills">
        <div className="about-me">
          <span className="line"></span>
          <h2 className="sub-title">Tech Stack</h2>
        </div>
        <div className="bento-grid">
          {skillsData.map((category, index) => (
            <article key={index} className="bento-card">
              <div className="card-header">
                <i
                  className={`${category.icon} card-icon`}
                  aria-hidden="true"
                ></i>
                <h3>{category.title}</h3>
              </div>
              <p className="card-description">{category.description}</p>

              <ul className="tech-list">
                {category.technologies.map((tech, idx) => (
                  <li key={idx} className="tech-badge">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </article>
    </section>
  );
}

export default About;
