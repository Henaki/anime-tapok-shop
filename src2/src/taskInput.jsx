import React from 'react';
import Tasks from './tasks';

class TaskInput extends React.Component {
    constructor(props) {
        super(props)
        this.state ={ 
            input: ''
        };
    }
    addTask = () =>
    {
        const {input} = this.state;
        if(input) {
            this.props.addTask(input);
            this.setState({input : ''});
        }
    };
    HandleChange = (e) => {
        this.setState({input : e.target.value})
    }
    render() {
        const {input} = this.state;
        return(
            
                <div className="">
                    <input type="text" onChange={this. HandleChange} value={input}/>
                    <input type="button" value="Нажми меня" onClick={this.addTask}/>
                </div>
        );
    };
}
export default TaskInput;