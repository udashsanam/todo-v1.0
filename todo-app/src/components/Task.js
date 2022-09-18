import './Task.css';

const Task = (props) => {
    
    return (
        <div className='task'>
            <h1 className='title'> {props.task.title} </h1>
            <h2 className="date"> { new Date().toISOString()}</h2>
            <p> {props.task.description}</p> 
        </div>
    )
}
export default Task;