import React from "react"
import ReactPlayer from "react-player"

function FirstPage() {
  return (
    <div>
      <h1 className="book-header">Մանուկների աչքերով</h1>
      <div className="first-header">
        <img
          alt="Simba"
          id="simba"
          src="https://media2.giphy.com/media/LjUXZgnT2z7kA/source.gif"
        />
      </div>{" "}
      <hr />
      <div className="first-body">
        <div className="page-box">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=a4Plup16DnA"
          />
        </div>{" "}
        <div className="page-box">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=cmnBbEZ-ylg"
          />
        </div>
        <div className="page-box">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=4MOvYXWSWFw"
          />
        </div>
        <div className="page-box">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=YmcErwK6INo"
          />
        </div>
      </div>{" "}
    </div>
  )
}

export default FirstPage
