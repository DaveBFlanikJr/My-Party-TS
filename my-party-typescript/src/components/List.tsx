import { prependOnceListener } from "process";
import React from "react";
import { IState as Props } from "../App";


interface IProps {
    people: Props["people"]
}

const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => { // you need to let typescript know you want to return a JSX element or it will be void
    return people.map((person) => {
      return ( // watch out for capitilization with CSS classes
        <li className = "List">
          <div className="List-header">
            <img className="List-img"  src={person.img}/>
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      )
    })
  }

  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List
