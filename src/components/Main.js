import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Project';
import ProjectDetails from './ProjectDetails';
import Contact from './Contact';


const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/realisations'><Projects /></Route>
        <Route exact path='/realisations/:id' render={(routeProps) => <ProjectDetails {...routeProps} />} />
        <Route exact path='/contact'><Contact /></Route>
      </Switch>
    </main>
  );
};

export default Main;
