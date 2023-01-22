import React, {useEffect} from 'react';
import {v4 as uuidV4} from 'uuid';
 
const Form = ({input, setInput, desInput, setDesInput, timeInput, setTimeInput, Data, setData, editToDo, setEditToDo}) => {

    const UpdateToDo = (title, title1, title2, id, completed) => {
        const newToDo = Data.map((Data) =>
            Data.id === id ? {title, title1, title2, id, completed} : Data
        );
        setData(newToDo);
        setEditToDo("");
        setDesInput("");
        setTimeInput("");
    };

    useEffect(() => {
        if(editToDo){
            setInput(editToDo.title);
            setDesInput(editToDo.title1);
            setTimeInput(editToDo.title2);
        }
        else{
            setInput("");
            setDesInput("");
            setTimeInput("");
        }

    }, [setInput, setDesInput, setTimeInput, editToDo]);


    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onDesInputChange = (event) => {
        setDesInput(event.target.value);
    };

    const onTimeInputChange = (event) => {
        setTimeInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editToDo){
            setData([...Data, {id:uuidV4(), title: input, title1:desInput, title2:timeInput, completed: false}]);
            setInput("");
            setDesInput("");
            setTimeInput("");
        }
        else {
            UpdateToDo(input, desInput, timeInput, editToDo.id, editToDo.completed)
        }
        
    };


        return (
            <form onSubmit={onFormSubmit}>
                <input type='text' placeholder="Enter your Task" className="task-input" name='input' value={input} required onChange={onInputChange}/>
                <input type='text' placeholder="Enter Description" className="des-input inputs" name='desInput' value={desInput} required onChange={onDesInputChange}/>
                <input type='time' placeholder="Time" className="time-input inputs" name='timeInput' value={timeInput} required onChange={onTimeInputChange}/>
                <button className='upload' type='submit'> + </button>
                <button className='button-add' type='Submit'>
                 {editToDo ? "OK" : "ADD"}
                </button>
            </form>
        );
};
 
export default Form;