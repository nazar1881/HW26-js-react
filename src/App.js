import React, { useState } from "react"
import logo from "./logo.svg"
import ReactDOM from "react-dom"
import "./App.css"
import TableRow from "./tableRow"


function App() {
  const [formValues, setFormValues] = useState([
    {
      name: "Вася",
      surname: "Копенкін",
      days: 23,
      rate: 40,
    },
    {
      name: "Коля",
      surname: "Аганчук",
      days: 25,
      rate: 45,
    },
    {
      name: "Петя",
      surname: "Афанас",
      days: 28,
      rate: 70,
    },
    {
      name: "Діма",
      surname: "Петров",
      days: 32,
      rate: 68,
    },
  ])

  let handleChange = (index, event) => {
    let newFormValues = [...formValues]
    newFormValues[index][event.target.name] = event.target.value
    setFormValues(newFormValues)
  }

  return (
    <div className="App">
      <header className="App-bg">
        <div className="Table-background">
        <h1 className="table-h1">Список працівників IT відділу:</h1>
        {formValues.map((element, index) => (
          <TableRow
            name={element.name}
            surname={element.surname}
            days={element.days}
            rate={element.rate}
            index={index}
            handleChange={handleChange}
          />
        ))}
        </div>
      </header>
    </div>
  )
}

export default App