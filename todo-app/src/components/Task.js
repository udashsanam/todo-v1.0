import './Task.css';

const Task = () => {
    
    return (
        <div className='task'>
            <h1 className='title'> title </h1>
            <h2 className="date"> { new Date().toISOString()}</h2>
            <p> this is the task description </p> 
        </div>
    )
}
export default Task;