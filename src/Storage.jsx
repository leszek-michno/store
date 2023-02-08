import React, { useState } from "react";

const Storage = ({ item }) => {
  const [tS, setTS] = useState(item.initialState);
  const [soldNumber, setSoldNumber] = useState("");

  const sold = (e) => setSoldNumber(e.target.value);

  const handleChange = () => {
    if (tS >= soldNumber) {
      setTS(tS - soldNumber);
      setSoldNumber("");
    }
  };

  const income = (item.initialState - tS) * 60;

  return (
    <div>
      <label>
        <p>
          <strong> {item.type} </strong> (stan początkowy: {item.initialState})
        </p>
        <span>
          {" "}
          stan obecny: <strong>{item.stateNow = tS}</strong>{" "}
        </span>
        <input
          className={soldNumber > 0 ? "blue" : " "}
          type="number"
          placeholder="sprzedane"
          value={soldNumber}
          onChange={sold}
        />
        <button onClick={handleChange}>Podlicz</button>
        <span> {item.state === "" ? 0 : `dochód: ${(item.income = income)} zł`}</span>
      </label>
      <hr />
    </div>
  );
};

export default Storage;
