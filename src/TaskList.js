import React, { Component } from 'react';
import logo from './logo.svg';

class TaskList extends Component {
    constructor(props){
        super(props)

    }

   

  render() {
    return (
      <div className="App">
          <ol>
          {this.props.tasks.map((task, idx)=>{
                return <li key={idx}>{task}</li>

          })}
          </ol>
      </div>
    );
  }
}

export default TaskList;
