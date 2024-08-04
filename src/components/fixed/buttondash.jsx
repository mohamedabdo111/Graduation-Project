import React from "react";

const Buttondash = ({ clicker }) => {
  return (
    <div className=" block md:hidden mb-2">
      <button className="setting-btn" onClick={clicker}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar1"></span>
      </button>
    </div>
  );
};

export default Buttondash;
