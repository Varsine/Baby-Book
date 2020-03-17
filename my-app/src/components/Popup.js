import React from "react"

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <h1>{props.name}</h1>
        <div className="popup-info">
          <em>{props.info}</em>
        </div>
        <button onClick={props.closePopup}>x</button>
      </div>
    </div>
  )
}

export default Popup
