import React from "react";
import {FaPen, FaRegCircle, FaTimes} from "react-icons/fa";

const Icon = ({name}) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icons" />;
    case "cross":
      return <FaTimes className="icons" />;
    default:
      return <FaPen className="icons" />;
  }
};

export default Icon;
