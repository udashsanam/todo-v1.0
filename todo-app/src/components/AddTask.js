import './AddTask.css';


const AddTask = () => {

    const addTask = (event) => {
        event.preventDefault();
            console.log(event);
    }
    return (

        <div className="add-task">
            <form>
            <label className='input-label'> Date: </label>
            <input  type="date" />
            <label className='input-label'> Title: </label>
            <input  type="text" />
            <br/>
            <br/>
            <label className='description'> Description: </label>
            <input  type="text" />
            <button onSubmit={addTask}> submit</button>
            </form>
        </div>
    )
}
export default AddTask;