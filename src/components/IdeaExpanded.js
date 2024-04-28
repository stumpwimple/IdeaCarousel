// IdeaExpanded.js
import React from "react";
import "./IdeaExpanded.css";

function IdeaExpanded({ idea, onClose }) {
  if (!idea) return null; // Do not render if no idea is provided

  return (
    <div className="idea-expanded-backdrop" onClick={onClose}>
      <div className="idea-expanded-content" onClick={e => e.stopPropagation()}>
        <div className="idea-expanded-header">
          <span>{idea.type} - {idea.attributes.name}</span>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="idea-expanded-body">
          <div className="idea-expanded-primary">
            <h3>Primary Attributes</h3>
            {Object.entries(idea.attributes).map(([key, value], idx) => (
              <p key={idx}><strong>{key}:</strong> {value}</p>
            ))}
          </div>
          <hr />
          <div className="idea-expanded-secondary">
            <h3>Secondary Attributes</h3>
            {Object.entries(idea.secondaryAttributes).map(([key, value], idx) => (
              <p key={idx}><strong>{key}:</strong> {value}</p>
            ))}
          </div>
          <div className="idea-expanded-image">
            {/* Placeholder for image */}
            <img src="/path-to-image.jpg" alt="Visual Representation" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaExpanded;
