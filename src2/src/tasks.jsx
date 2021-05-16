import React from 'react';

const Tasks = ({task, ...props }) => {

    const Button = () => 
        <div>{task.bool ? <p onClick={props.passiveTasks}>Удалить</p> : <p onClick={props.activeTasks}>Выполнить</p>}  </div>
    
    return (
            <div>
                <p>{task.title}</p>
                <Button></Button>
            </div>
    );
}
export default Tasks;