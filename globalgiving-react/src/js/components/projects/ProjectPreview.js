import Progress from "../ui/Progress";

// Displays image, title and funding progress for a project
const ProjectPreview = ({ imageURL, funding, goal, title, themes, index, onClick}) => {
  const handleClick = () => {
    onClick(index)
  }

  const themesString = themes.theme.map((theme) => theme.name).join(", ");

  return (
    <div className="project-preview" onClick={onClick ? handleClick : null}> 
      <div className="image-wrapper"> <img src={imageURL} alt="Project"/> </div>
      <Progress funding={funding} goal={goal}/>
      <label className="flex flex-fill bold medium"> {title} </label>
      <label className="small gray"> {themesString} </label>
    </div>
  )
}

// placeholder divs while projects load with delayed opacity animation
export const ProjectPreviewPlaceholder = ({ index, max }) => {
  const style = {
    animationDelay: (1 + (index / max) * 2) + 's'
  }
  return (
    <div className="project-preview placeholder" style={style}> 
      <div className="image-wrapper"> </div>
      <Progress/>
      <label> &nbsp; </label>
    </div>
  )
}

export default ProjectPreview;