import React from "react";
import Audio from "./audio.jsx";
import Definition from "./definitions.jsx";
import "../css/ContentArea.css";
const ContentArea = props => {
  const { data } = props;

  return (
    <div className="container">
      <div className="rr disable-select">
        <button className="aba">Noun</button>
        <button className="aba">Verb</button>
      </div>

      <div className="text-area">
        <span>{data[0].id}</span>
        <Audio data={data[0].lexicalEntries[0].pronunciations[0].audioFile} />
        <span id="def">
          <Definition senses={data[0].lexicalEntries[0].entries[0].senses} />
        </span>
      </div>
    </div>
  );
};

export default ContentArea;

//props.data.results[0].lexicalEntries
