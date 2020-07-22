import React, { useState, useEffect } from 'react';
import API from '../API';

const Project = () => {
  const [tags, setTags] = useState();

useEffect(() => {
  API.get(`/tags`)
    .then(res => res.data)
    .then(data => setTags(data));
}, []);

  return (
    <div>
      <h1>Projects</h1>
      {tags.map(t => <p>{t.name}</p>)}
    </div>
  )
}

export default Project;
