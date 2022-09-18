import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  
  const [tasks, setTAsks] = useState([
    {
      title: 'learn react ',
      description: ' learn react as soon as posible'
    },
    {
      title: 'learn react ',
      description: ' learn react as soon as posible'
    },
    {
      title: 'learn react ',
      description: ' learn react as soon as posible'
    },
    {
      title: 'learn react ',
      description: ' learn react as soon as posible'
    }
  ]);
    const onTaskAdd = (task) =>  {

        console.log(task);

        setTAsks([...tasks, task]);
    }

  return (
    <div className="App">
     
      <AddTask addTaskHandler = {onTaskAdd} />
      <TaskList tasks= {tasks} />
    
    </div>
  );
}

export default App;
