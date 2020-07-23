import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ projectItem: { id, name, img_url } }) => {
  return (
    <>
      <Link to={`/realisations/${id}`}><h2 className='item-title'>{name}</h2></Link>
    </>
  )
}

export default ProjectItem;
