import { useState } from "react";
import "./AddTask.css";

const AddTask = ( props ) => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date(2022, 9, 18));
  const [selectedDescription, setSelectedDescription] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(selectedTitle);
    console.log(selectedDescription);
    const  task = {
        title: selectedTitle,
        description : selectedDescription
    }
    props.addTaskHandler(task);
  };
  const ontitleChangeHandler = (event) => {
    
    setSelectedTitle(event.target.value);
  };
  const onDateChangeHandler = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  const onDescriptionChangeHandler = (event) => {
        setSelectedDescription(event.target.value);
  };
  return (
    <div className="add-task">
      <form onSubmit={onSubmitHandler}>
        <label className="input-label"> Date: </label>
        <input type="date" onChange={onDateChangeHandler} />
        <label className="input-label"> Title: </label>
        <input type="text" onChange={ontitleChangeHandler} />
        <br />
        <br />
        <label className="description"> Description: </label>
        <input type="text" onChange={onDescriptionChangeHandler}/>
        <button type="submit"> submit</button>
      </form>
    </div>
  );
};
export default AddTask;
