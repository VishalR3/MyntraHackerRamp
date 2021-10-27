import { useState } from "react";
import { Link } from "react-router-dom";

export default function DiceChoose({ selectedValue, setSelectedValue }) {
  const diceValues = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="container mt-3">
        <div className="text-center">
          <h1 className="h1">Choose Your Value</h1>
        </div>
        <div className="row justify-content-center mt-5 mb-3">
          {diceValues.map((value) => (
            <div
              className="col-lg-3 col-sm-6 cursor-pointer"
              key={value}
              onClick={() => setSelectedValue(value)}
            >
              <div
                className={`card diceValueCard place-center mb-3 ${
                  selectedValue === value ? "selectedValue" : ""
                }`}
              >
                <div className="card-body">
                  <span className="diceValue">{value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="footerRow text-center">
          <Link to="/dice" className="btn btn-success px-5">
            Confirm
          </Link>
        </div> */}
      </div>
    </>
  );
}
