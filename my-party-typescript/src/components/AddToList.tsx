import React, { useState } from "react";
import { IState as Props } from "../App"

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const AddToList: React.FC<IProps> = ({people, setPeople}) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input, //seting to whatever input element is
      [e.target.name]: e.target.value //we want to change whatever the event.target.name is to whatver the value is
                                      // we want overide
    })
  }

    const handleClick = (): void => { // we dont want to return anything with this so we let typescript know by using void
      if(
        !input.name ||
        !input.age ||
        !input.img
      ) {
        return
        }

        setPeople([
          ...people,
          {
            name: input.name,
            age: parseInt(input.age),
            img: input.img,
            note: input.note
          }
        ]);

        setInput({
          name: "",
          age: "",
          note: "",
          img: ""
        })
    }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
       <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
       <input
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        value={input.img}
        onChange={handleChange}
        name="image"
      />
       <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button
        className="AddtoList-btn"
        onClick={handleClick} //Just adding comment to push
      >
        Add to List
      </button>
    </div>
  )
}


export default AddToList
