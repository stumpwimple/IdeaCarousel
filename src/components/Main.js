// Main.js
import React, { useState } from "react";
import "./Main.css";
import Idea from "./Idea";
import IdeaExpanded from "./IdeaExpanded";
import ideaSet from "./ideaSet";

function Main() {
  const [expandedIdea, setExpandedIdea] = useState(null);

  const handleIdeaClick = (idea) => {
    setExpandedIdea(idea);
  };

  const closeExpandedView = () => {
    setExpandedIdea(null);
  };

  return (
    <div className="main">
      {ideaSet.map((idea) => (
        <div key={idea.id} className="idea-container">
          <Idea idea={idea} />
          <button className="info-button" onClick={() => handleIdeaClick(idea)}>
            More Info
          </button>
        </div>
      ))}
      {expandedIdea && (
        <IdeaExpanded idea={expandedIdea} onClose={closeExpandedView} />
      )}
    </div>
  );
}

export default Main;
