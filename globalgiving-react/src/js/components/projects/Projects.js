import { useState, useEffect, useRef } from 'react';
import { getProjects } from '../../service/APIService.js';
import ProjectPreview, { ProjectPreviewPlaceholder } from './ProjectPreview.js';
import ProjectFull from './ProjectFull.js';
import useScroll from '../../hooks/useScroll.js';

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [selected, setSelected] = useState(null);


  // initial fetch -> just get first 10 projects
  useEffect(() => {
    const fetch = async () => {
      const response = await getProjects();
      if(response !== null) {
        setProjects(response);
        setFetching(false);
      }
    }
    fetch();
  }, []);


  const scrollRef = useRef(null);
  useScroll(({ scrollBottom }) => {
    const fetch = async () => {
      setFetching(true);
      const response = await getProjects({ nextProjectId: projects.nextProjectId });

      if(response !== null) {
        setProjects((prev) => {
          return {
            ...prev, 
            ...response, 
            project: [ ...prev.project, ...response.project ]
          }
        });
        setFetching(false);
      }
    }
    
    // only fetch if at bottom of page and not already fetching
    if(projects?.nextProjectId && !fetching && scrollBottom === 0) {
      fetch();
    }
  }, scrollRef);
  const [fetching, setFetching] = useState(true);


  // set of placeholder project previews to use when loading
  const getPlaceholders = () => {
    const max = 9;
    const placeholders = [];
    for(let i = 0; i < max; i++) {
      placeholders.push(<ProjectPreviewPlaceholder index={i} max={max} key={i}/>);
    }
    return placeholders;
  }

  const handleProjectClick = (index) => {
    setSelected(projects.project[index]);
  }

  const handleProjectExit = () => {
    setSelected(null);
  }

  return (
    <>
      <div className={"wrapper" + (selected ? " no-scroll" : "")} ref={scrollRef}>
        <label className="title"> Find a Charity </label>
        <div className="projects">
          { projects?.project?.map((project, i) => (
            <ProjectPreview 
            imageURL={project.image?.imagelink?.[3]?.url} 
            funding={project.funding} 
            goal={project.goal} 
            title={project.title}
            themes={project.themes}
            index={i}
            onClick={handleProjectClick}
            key={project.id}
            />
          ))}
          { fetching && getPlaceholders()}
        </div>
      </div>
      {selected && <ProjectFull project={selected} onExit={handleProjectExit}/>}
    </>
  )
}

export default Projects;