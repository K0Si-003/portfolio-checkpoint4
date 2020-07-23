import React, { useState, useEffect } from 'react';
import API from '../API';
import '../styles/details.css';

const ProjectDetails = (props) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    API.get(`/projects/${id}`)
      .then(res => res.data)
      .then(data => setProject(data))
  }, [props.match.params.id]);

  if (!project.tags) {
    return <div><p>Loading details...</p></div>
  } else {
    return (
      <div>
        <h1>{project.name}</h1>
        <img src={project.imgUrl} alt={project.name} />
        {console.log(project.tags)}
        <ul>
          {project.tags.map((name, index) => {
            return (
              <li key={index}>{name}</li>
            );
          })}
        </ul>
        <p>{project.details}</p>
      </div>
    )
  }
}

export default ProjectDetails;
