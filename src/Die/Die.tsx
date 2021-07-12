import React from "react";
import { DieValue } from "../App/App";
import "./Die.css";
import blank from "../assets/default.png";
import d1 from "../assets/d1.png";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";
import d5 from "../assets/d5.png";
import d6 from "../assets/d6.png";

const dieMap = {
  0: blank,
  1: d1,
  2: d2,
  3: d3,
  4: d4,
  5: d5,
  6: d6,
};

export const Die = ({ dieValue }: { dieValue: DieValue }) => {
  return <img src={dieMap[dieValue]} className="die" />;
};
