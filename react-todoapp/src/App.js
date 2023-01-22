import React, { useState, useEffect } from 'react'
import './App.css';
import Header from "./header";
import Form from "./form";
import DataList from "./DataList";

function App() {

  const initialstate = JSON.parse(localStorage.getItem("Data"))  || [];
  const [Data, setData] = useState(initialstate);
  const [input, setInput] = useState("");
  const [desInput, setDesInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [editToDo, setEditToDo] = useState(null);

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(Data));
  }, [Data]);

  return (
    <div className='App'>
      <div className='container'>
        <div className='app-wrapper'>
          <div>
            <Header />
          </div>
          <div>
            <Form 
            input = {input}
            setInput = {setInput}

            Data = {Data}
            setData = {setData}

            desInput = {desInput}
            setDesInput = {setDesInput}

            timeInput = {timeInput}
            setTimeInput = {setTimeInput}

            editToDo = {editToDo}
            setEditToDo = {setEditToDo}
            />
          </div>
          <div>
            <DataList Data={Data} setData = {setData} setEditToDo = {setEditToDo}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App