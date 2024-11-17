import React from "react";
const DashItems = ({ icon, label }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.location.replace(`/#${label.split(" ")[0]}`);
      }}
    >
      <div className="dash-item-container">
        {icon}
        <p className="label-container">{label}</p>
      </div>
    </button>
  );
};

export default DashItems;
