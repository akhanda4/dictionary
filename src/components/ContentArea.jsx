import React from "react";
const ContentArea = props => {
  const { data } = props;
  return (
    <div className="container">
      <div className="rr disable-select">
        <button className="aba">Noun</button>
        <button className="aba">Verb</button>
      </div>
      <div className="text-area">
        {data.id}
        <i className="fa fa-volume-up" aria-hidden="true" />
      </div>
    </div>
  );
};

export default ContentArea;
