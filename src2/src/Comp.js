import React from 'react';
import ReactDOM from 'react';

class Comp extends React.Component {
    constructor(props){
        super(props);
        this.state = { date: new Date(),isToggleOn: true }

        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick = e =>{
        console.log(this);
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    
    render (){ 
        return (
            <div className="section-2">
                <a href="#" onClick={this.handleClick} >time </a>
                <div>
                    {  this.state.date.toLocaleTimeString() }
                </div>
                <button onClick={this.handleClick} className="section-2 ">
                    {this.state.isToggleOn ? 'YES' : 'NO' }
                </button>
                
            </div>
        );
    }
}



export default Comp;