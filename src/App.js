import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";
import Storage from "./Storage";

const App = (props) => {

  

  const[tshirt, setTshirt] = useState([])
  // const [upDataState, setUpDataState] = useState(0);

    useEffect(()=>{
        axios.get('http://localhost:4000/tshirts')
        .then(res => {
            console.log(res);
            setTshirt(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

  const [totaIncome, setTotalIncome] = useState(0);  

  const allTshirts = tshirt.map((item) => <Storage key={item.id} item={item} />);

  const handleTotalIncome = () => {
    const allIncomes = tshirt.map((item) => item.income);
    const total = allIncomes.reduce((a, b) => a + b, 0)
    setTotalIncome(total);
   

  };
  
  return (
    <div>
      <h1>Sprzedaż t-shirt'ów</h1>
      <hr />
      {allTshirts}
      <button onClick={handleTotalIncome}>Podsumowanie</button>
      <span> Razem: <strong>{totaIncome}</strong> zł</span><br/>
      {/* <p>{upDataState}</p> */}
    </div>
  );
};

export default App;
