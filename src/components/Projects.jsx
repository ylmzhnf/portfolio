import "../styles/components/projects.css";
import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard"; 

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "ylmzhnf";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          }
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          const filteredRepos = data
            .filter((item) => item.topics && item.topics.includes("portfolio"))
            .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

          setRepos(filteredRepos);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p className="info">Loading projects...</p>;

  return (
    <section id="projects">
      <div className="project">
        <span className="line"></span>
        <h2 className="sub-title">Projects</h2>
      </div>
      <p className="info">Here are some of my recent works and experiments:</p>

      <article className="project-grid">
        <ul>
          {repos.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Projects;