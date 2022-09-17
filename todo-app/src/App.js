import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  
  const tasks = [
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
  ];
  return (
    <div className="App">
     
      <AddTask />
      <TaskList tasks= {tasks} />
    
    </div>
  );
}

export default App;
