import React from 'react';
import * as Action from './actions';
import {connect} from 'react-redux';

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
        console.log(id, label);
        this.setState({label});
        this.props.updateTodoLabel(id, label)
    }

    setCompleted(){

    }

    remove(){

    }

    renderLabel(){
        if(this.state.isEditing)
            return <input type="text"
                          onChange={(e)=>this.saveLabel(this.props.id, e.target.value)}
                          value={this.state.label}/>
        else
            return <p onDoubleClick={ ()=> this.setEdit(true) }>{this.state.label}</p>
    }

    render(){
        return (
            <div>
                <input type="checkbox"
                       onChange={this.props.setCompleted}
                       checked={this.props.isCompleted}/>
                {this.renderLabel()}
                <button onClick={()=>this.remove()}>X</button>
            </div>
        )
    }

}


function mapDispatchToProps(dispatch) {
    return{
        remove: (id)=> dispatch(Action.removeTodo(id)),
        updateTodoLabel: (id, label)=> dispatch(Action.updateTodoLabel(id, label))
    }

}

export default connect(null, mapDispatchToProps)(Todo);