// simple progress bar using two divs and changing the width of the inner div
const Progress = ({ funding, goal }) => {
  const innerStyle = {
    width: ((funding || 0) / (goal || 0)) * 100 + '%',
  }

  return (
    <div className="progress">
      <div style={innerStyle}>
      </div>
    </div>
  )
}


export default Progress;