import React, { useState } from "react";
import "./Idea.css";

function Idea({ idea }) {
  // Create a state to track changes in the attributes
  const [attributes, setAttributes] = useState(idea.attributes);

  // Handle changes to the input fields
  const handleChange = (key, value) => {
    setAttributes(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="idea">
      <div className="idea-header">{idea.type}</div>
      <div className="idea-attributes">
        {Object.entries(attributes).map(([key, value], idx) => (
          <div key={idx} className="attribute-row">
            <label>{key}:</label>
            <input 
              type="text" 
              value={value} 
              onChange={(e) => handleChange(key, e.target.value)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Idea;
