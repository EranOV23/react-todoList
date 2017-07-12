import React from 'react';
import * as Action from './actions';
import {connect} from 'react-redux';

import './todo.scss'

class Todo extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isEditing : false,
            label: props.label
        }
    }

    setEdit(isEditing){
        this.setState({isEditing})
    }


    saveLabel(id, label){
        this.setState({label});
        this.props.updateTodoLabel(id, label)
    }

    setCompleted(id, e){
      console.log(id, e)
      this.props.setTodoCompleted(id, e)
    }

    remove(id){
      this.props.remove(id)
    }

    renderLabel(){
        if(this.state.isEditing)
            return <input type="text"
                          onChange={(e)=>this.saveLabel(this.props.id, e.target.value)}
                          onBlur={()=>this.setEdit(false)}
                          value={this.state.label}/>
        else
            return <p onDoubleClick={ ()=> this.setEdit(true) }>{this.state.label}</p>
    }

    render(){
        return (
            <div className="todo-item">
                <input className="checkbox"
                       type="checkbox"
                       onChange={(e)=>this.setCompleted(this.props.id, e.target.checked)}
                       checked={this.props.isCompleted}/>
                {this.renderLabel()}
                <button onClick={()=>this.remove(this.props.id)}>X</button>
            </div>
        )
    }

}


function mapDispatchToProps(dispatch) {
    return{
        remove: (id)=> dispatch(Action.removeTodo(id)),
        updateTodoLabel: (id, label)=> dispatch(Action.updateTodoLabel(id, label)),
        setTodoCompleted: (id, isCompleted)=> dispatch(Action.setTodoCompleted(id, isCompleted))
    }

}

export default connect(null, mapDispatchToProps)(Todo);
