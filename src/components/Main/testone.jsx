import React from "react";
import PigImg from "../../assets/pig.jpg";

export default function TestOne() {
  return (
    <div>
      <img className="w-30 h-40" src={PigImg} alt="pig" />
      <h4>Test 1🐷</h4>
    </div>
  );
}
