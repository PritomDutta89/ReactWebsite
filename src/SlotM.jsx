import React from "react";
import SlotM2 from "./SlotM2";

const SlotM = () => {
  return (
    <>
      <h1>
        😀 Welcome to
        <span style={{ color: "red", fontWeight: "bold" }}>
          slot machine
        </span>
        game
      </h1>
      <SlotM2 em="😀" en="😀" ep="😀" /> <br />
      <SlotM2 em="😀" en="😀" ep="😚" /> <br />
      <SlotM2 em="😛" en="😀" ep="😀" />
    </>
  );
}

export default SlotM;
