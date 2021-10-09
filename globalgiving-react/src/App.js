import { useState, useEffect } from 'react';
import './css/main.css';

import Projects from './js/components/projects/Projects.js';
import { getProjects } from './js/service/APIService.js';

const App = () => {
  useEffect(() => {
    const fetch = async () => {
      await getProjects();
    }
    fetch();
  }, [])

  return (
    <div className="App">
      <Projects/>
    </div>
  );
}

export default App;
