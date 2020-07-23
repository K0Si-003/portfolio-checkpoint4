import React, { useState, useEffect } from 'react';
import API from '../API';
import ProjectDetails from './ProjectDetails';

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get('/projects')
      .then(res => res.data)
      .then(data => setProjects(data))
  }, []);

  if (!projects) {
    return <p>Loading projects...</p>
  } else {
    return (
      <div>
        <h1>Projets</h1>
        {projects.map(p => {
          return <ProjectDetails key={p.id} projectDetails={p} />;
        })}
      </div>
    )
  }
}

export default Project;
