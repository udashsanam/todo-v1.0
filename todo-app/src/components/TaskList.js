import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {

    return (
        <div className='task-list'>
        {
            props.tasks.map( (task) => (
                <Task task = {task}/>
            ))
        }
        </div>
    )
}
export default TaskList;