import React from 'react';
import '../styles/details.css';

const ProjectDetails = ({ projectDetails: { id, name, details, img_url } }) => {
  return (
    <div>
      <h1>Project details</h1>
      <p>{name}</p>
      <p>{details}</p>
      <img src={img_url} alt={name} />
    </div>
  )
}

export default ProjectDetails;
