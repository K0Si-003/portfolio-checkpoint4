import React, { useState, useEffect } from 'react';
import API from '../API';
import '../styles/project.css';
import ProjectItem from './ProjectItem';

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
        <ul className='diamond-list'>
          {projects.map(p => <li className={`diamond-item item${p.id}`}><ProjectItem key={p.id} projectItem={p} /></li>)}
        </ul>
      </div>
    )
  }
}

export default Project;
