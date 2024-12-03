import React from "react";
import Card from "../Card/Card";
import "./Board.css";
import { menu, add } from "../../assets";

const Board = ({ data, grouping, ordering }) => {
  const groupedData = data.reduce((acc, ticket) => {
    const key = ticket[grouping.toLowerCase()] || "Uncategorized";
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});
  const sortedData = Object.keys(groupedData).reduce((acc, key) => {
    acc[key] = groupedData[key].sort((a, b) =>
      ordering === "Title" ? a.title.localeCompare(b.title) : a.priority - b.priority
    );
    return acc;
  }, {});

  return (
    <div className="board-container">
      {Object.keys(sortedData).map((category) => (
        <div key={category} className="board-column">
          <div className="container">
            <div className="wrap">
              <div className="column-header">
                {category} - {sortedData[category].length}
              </div>
            </div>
            <div className="wrap">
              <img src={add} className="icon-wrapper" alt="" style={{ marginRight: "10px" }} />
              <img src={menu} className="icon-wrapper" alt="" />
            </div>
          </div>
          <div className="card-list">
            {sortedData[category].map((card) => (
              <Card
                key={card.id}
                title={card.title}
                id={card.id}
                tag={card.tag}
                icon={card.icon}
                user={card.user}
                status_img={card.status_img}
                grouping={grouping}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
