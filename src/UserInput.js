import React, { Component } from 'react';
import logo from './logo.svg';
import TaskList from './TaskList.js'

class UserInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskInput: '',
            taskList: []
        }
    }

    getUserInput=(e)=>{
        this.setState({taskInput: e.target.value})
    }
    
    addToList=()=>{
        this.state.taskList.push(this.state.taskInput);
        this.setState({taskInput: ''})
        console.log(this.state);
    }    

  render() {
    return (
      <div className="App">
        <input 
        type="text" 
        value={this.state.taskInput}
        onChange={this.getUserInput.bind(this)}/>
        <button onClick={this.addToList}className="btn btn-primary">Add Task</button>

        <TaskList tasks={this.state.taskList}/>
      </div>
    );
  }
}

export default UserInput;
