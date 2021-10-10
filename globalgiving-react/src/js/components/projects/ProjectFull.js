import Progress from '../ui/Progress.js';

// Show full project page info and link to original page
const ProjectFull = ({ project, onExit }) => {
  const { 
    title, 
    image, 
    summary, 
    longTermImpact, 
    need, 
    projectLink, 
    funding, 
    goal
  } = project;

  const sections = [
    {name: "Summary", text: summary},
    {name: "Need", text: need},
    {name: "Long Term Impact", text: longTermImpact}
  ]

  return (
    <div className="project-full">
      <button className="exit-btn" onClick={onExit}> &#215; </button>
      <a className="flex flex-fill" href={image?.imagelink?.[4]?.url}> <img src={image?.imagelink?.[4]?.url} alt={project.title}/> </a>
      <div className="description">
        <label className="large bold"> {title} </label>
        <a href={projectLink}> {projectLink} </a>
        <section>
          <label className="bold medium"> <span className="green"> ${funding.toLocaleString()} </span> raised of ${goal.toLocaleString()} </label>
          <Progress funding={funding} goal={goal}/>
        </section>
        { sections.map(({ name, text }) => (
          <section key={name}>
            <label className="bold"> {name} </label>
            <p> {text} </p>
          </section>
        ))}
      </div>
    </div>
  )
}

export default ProjectFull;