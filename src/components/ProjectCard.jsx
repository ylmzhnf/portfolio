import React, { useState } from "react";
import { VscFolderLibrary } from "react-icons/vsc";

const ProjectCard = ({ item }) => {
  const [imgError, setImgError] = useState(false);

  const formatTitle = (name) => name.replace(/-/g, " ").toUpperCase();

  return (
    <div className="project-item">
      <li>
        <a
          href={item.homepage || item.html_url}
          target="_blank"
          rel="noreferrer"
          className="project-image-container"
        >
          {!imgError ? (
            <img
              className="image"
              src={`/assets/images/${item.name}.png`}
              alt={`${item.name} screenshot`}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="project-icon-placeholder">
              <VscFolderLibrary className="fallback-icon" />
            </div>
          )}
        </a>
      </li>
      <div className="project-info">
        <h3>{formatTitle(item.name)}</h3>
        <p className="info">
          {item.description || "Project description will be updated soon."}
        </p>

        <div className="project-tags">
          {item.topics &&
            item.topics
              .filter((t) => t !== "portfolio")
              .map((topic) => (
                <span key={topic} className="tag">
                  #{topic}
                </span>
              ))}
        </div>

        <div className="project-link">
          {item.homepage && (
            <a href={item.homepage} target="_blank" rel="noreferrer">
              View Project
            </a>
          )}
          <a href={item.html_url} target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;