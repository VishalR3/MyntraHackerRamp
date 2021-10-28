import { useState } from "react";
import Dice from "./Dice";
import DiceChoose from "./DiceChoose";

export default function DiceGame() {
  const [selectedValue, setSelectedValue] = useState(0);
  let key = 1;
  return (
    <>
      {selectedValue === 0 ? (
        <DiceChoose
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      ) : (
        <Dice
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          key={key++}
        />
      )}
    </>
  );
}
