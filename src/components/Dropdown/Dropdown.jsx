import React, { useState } from "react";
import "./Dropdown.css";
import { down } from "../../assets";
import { Display } from "../../assets";

const Dropdown = ({ options, label, setData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelected(option);
    setData(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-label" onClick={toggleDropdown}>
        <img src={Display} alt="Menu Icon" className="menu-icon" style={{marginRight: "10px"}}/>
        {label}: <span className="selected-option">{selected}</span>
        <img src={down} alt="Dropdown Icon" className="dropdown-icon" />
      </button>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option, index) => (
            <div key={index} className="dropdown-option" onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
