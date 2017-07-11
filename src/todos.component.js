import React from 'react';
import Todo from './todo.component';
import {connect} from 'react-redux';

const todoModel = [
    {
        label: "testModel",
        isCompleted: false,
        id: 1,
    },
    {
        label: "testModel",
        isCompleted: false,
        id: 2,
    },
    {
        label: "testModel",
        isCompleted: false,
        id: 3,
    }

]


class TodoList extends React.Component{
    render(){
        return(
            <ul>
                { todoModel.map( model => <Todo key={model.id} {...model} />) }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return{
        todos: state.todos
    }

}

export default connect(mapStateToProps, null)(TodoList);