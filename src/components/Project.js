import React, { useState, useEffect } from 'react';
import API from '../API';
import ProjectDetails from './ProjectDetails';

const Project = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    API.get('/tags')
      .then(res => res.data)
      .then(data => setTags(data))
  }, []);

  if (!tags) {
    return <p>Loading tags...</p>
  } else {
    return (
      <div>
        <h1>Projets</h1>
        {tags.map(t => {
          return <ProjectDetails key={t.id} apartmentDetails={t} />;
        })}
      </div>
    )
  }
}

export default Project;
