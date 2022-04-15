import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import { url } from 'inspector';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Lebron James",
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      note: "Cant stay on one team for more than 4 years"
    }
  ])

  return (
    <div className="App">
      <h1>Peoople Invited To My party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
