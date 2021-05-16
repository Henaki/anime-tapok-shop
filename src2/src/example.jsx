import React from 'react';
import Tasks from './tasks';
import TaskInput from './taskInput'
class Example extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                { id: 0, title: 'Задача 1', bool: false },
                { id: 1, title: 'Задача 2', bool: true },
                { id: 2, title: 'Задача 3', bool: false }
            ]
        };
    }
    addTask = (task) =>{
        this.setState(state => {
            let {tasks} = state;
            tasks.push({
                id: tasks.length !== 0 ? task.length: 0,
                title: task,
                bool: false
            });
            return tasks;
        });
    }
    activeTasks = (id) => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            const { tasks } = state;
            tasks[index].bool = true;  
            return tasks;
        });
    };
    passiveTasks = (id) => {
        const index = this.state.tasks.map(task => task.id).indexOf(id);
        this.setState(state => {
            const { tasks } = state;
            delete tasks[index];
            return tasks;
        });
    };
    render() {
        const { tasks } = this.state;
        const activeTasks = tasks.filter(task => !task.bool);
        const passiveTasks = tasks.filter(task => task.bool);
        return (
            <section>
                <p>Все задачи: {activeTasks.length} </p>
                {[...activeTasks, ...passiveTasks].map(task => (
                    <Tasks activeTasks={() => this.activeTasks(task.id)} passiveTasks={() => this.passiveTasks(task.id)} task={task} key={task.id}></Tasks>
                ))}
                <TaskInput addTask={this.addTask}></TaskInput>
            </section>
        );
    }
}
export default Example;