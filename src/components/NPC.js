import React from "react";
import "./NPC.css";

function NPC({ id, isExpanded, onClick }) {
  const npcData = {
    name: "Bartleby Tuttledunk",
    description: "Very hairy halfling",
    moreInfo: "Lives in the large oak outside the city walls.",
  };

  return (
    <div
      className={`npc ${isExpanded ? "expanded" : "compact"}`}
      onClick={() => onClick(id)}
    >
      <div className="npc-header">
        <h4>NPC</h4>
      </div>
      <div className="npc-content">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={npcData.name}
          readOnly={!isExpanded}
        />
      </div>
      <div className="npc-content">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={npcData.description}
          readOnly={!isExpanded}
        />
      </div>
      {isExpanded && (
        <div className="npc-content">
          <label>More Info:</label>
          <input
            type="text"
            name="moreInfo"
            value={npcData.moreInfo}
            readOnly={!isExpanded}
          />
        </div>
      )}
    </div>
  );
}

export default NPC;
