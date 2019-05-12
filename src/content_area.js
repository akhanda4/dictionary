import React from "react"
import './content_area.css';
import './bootstrap.css';

function content_area(){
  return(
    <div className="container">
      <div className="rr disable-select">
        <button className="aba">Noun</button>
        <button className="aba">Verb</button>
      </div>
      <div className="text-area">
      </div>

    </div>

  )
}

export default content_area;
