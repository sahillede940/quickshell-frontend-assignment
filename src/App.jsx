import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import {
  HighPriority,
  LowPriority,
  MediumPriority,
  inProgress,
  NoPriority,
  Backlog,
  Cancelled,
  Done,
  ToDo,
} from "./assets";
import { groupingOptions, orderingOptions, API_URL } from "./constants";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState(groupingOptions[1]);
  const [ordering, setOrdering] = useState(orderingOptions[0]);

  const PriorityLevels = {
    0: "No priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent",
  };

  const fetchData = async () => {
    try {
      const response = await (await fetch(API_URL)).json();

      let tickets = response.tickets;
      const users = response.users;

      tickets = tickets.map((ticket) => {
        const user = users.find((user) => user.id === ticket.userId);
        const icon =
          ticket.priority === 0
            ? NoPriority
            : ticket.priority === 1
            ? LowPriority
            : ticket.priority === 2
            ? MediumPriority
            : ticket.priority === 3
            ? HighPriority
            : ticket.priority === 4
            ? inProgress
            : null;
        const status_img =
          ticket.status === "Todo"
            ? ToDo
            : ticket.status === "In progress"
            ? inProgress
            : ticket.status === "Done"
            ? Done
            : ticket.status === "Cancelled"
            ? Cancelled
            : ticket.status === "Backlog"
            ? Backlog
            : null;

        return {
          ...ticket,
          status_img,
          icon,
          userData: user,
          user: user?.name,
          priority: PriorityLevels[ticket.priority],
        };
      });

      setTickets(tickets);
      console.log("Data fetched: ", tickets);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <div className="filters">
        <Dropdown options={groupingOptions} label="Grouping" setData={setGrouping} />
        <Dropdown options={orderingOptions} label="Ordering" setData={setOrdering} />
      </div>
      <Board data={tickets} grouping={grouping} ordering={ordering} />
    </div>
  );
}

export default App;
