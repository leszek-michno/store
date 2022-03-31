import React, { useState } from "react";
import "./App.css";
import Storage from "./Storage";



const App = () => {

  const tShirts = [
    {
      id: 1,
      type: "damska XS",
      initialState: 12,
      income: "",
    },
    {
      id: 2,
      type: "damska S",
      initialState: 10,
      income: "",
    },
    {
      id: 3,
      type: "damska M",
      initialState: 8,
      income: "",
    },
    {
      id: 4,
      type: "damska L",
      initialState: 12,
      income: "",
    },
    {
      id: 5,
      type: "męska S",
      initialState: 10,
      income: "",
    },
    {
      id: 6,
      type: "męska M",
      initialState: 8,
      income: "",
    },
    {
      id: 7,
      type: "męska L",
      initialState: 10,
      income: "",
    },
    {
      id: 8,
      type: "męska XL",
      initialState: 8,
      income: "",
    },
    {
      id: 9,
      type: "męska XXL",
      initialState: 4,
      income: "",
    },
  ];

  const [totaIncome, setTotalIncome] = useState(0);  


  const allTshirts = tShirts.map((item) => <Storage key={item.id} item={item} />);

  const handleTotalIncome = () => {
    const allIncomes = tShirts.map((item) => item.income);
    const total = allIncomes.reduce((a, b) => a + b, 0)
    setTotalIncome(total);
    
  };
  
  return (
    <div>
      <h1>Sprzedaż t-shirt'ów</h1>
      <hr />
      {allTshirts}
      <button onClick={handleTotalIncome}>Podsumowanie</button>
      <span> Razem: <strong>{totaIncome}</strong> zł</span><br />
      <button onClick={window.print}>Zapamiętaj</button>
    </div>
  );
};

export default App;
