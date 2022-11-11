import { Link } from "react-router-dom";
import { useState } from "react";
import projects from "../projects.json";

function HomePage() {
  const [allProjects, setAllProjects] = useState(projects);

  /* Não utilizamos a tag <a></a> pois ela RECARREGA A PÁGINA!! */
  /* <a href="/about">About Page</a>
      <p>
        <Link to="/about">About Page LINK</Link>
      </p> */

  return (
    <div className="projects">
      {allProjects.map((project) => {
        return (
          <div key={project.id} className="project">
            <p>{project.student}</p>
            <p>{project.projectName}</p>
            <small>{project.id}</small>
            <Link>Ver mais detalhes</Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
