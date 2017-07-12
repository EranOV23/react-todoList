import React from 'react';
import Todo from './todo.component';
import {connect} from 'react-redux';
import * as Action from './actions';

import './todos-list.scss';

class TodoList extends React.Component{
    constructor(){
      super()

      this.state = {
        inputVal: 'add task'
      }
    }

    addTodo(e){
      console.log(e);
      this.props.addTodo(e)
      this.setState({inputVal:'add task'})
    }

    setValue(inputVal){
      if(inputVal==='clear')
        this.setState({inputVal:''})
      else
        this.setState({inputVal})
    }

    render(){
        return(
            <div className="todos-list">
              <input onBlur={(e)=>this.addTodo(e.target.value)}
                     onChange={(e)=>this.setValue(e.target.value)}
                     onFocus={()=>this.setValue('clear')}
                     value={this.state.inputVal}/>
              <ul>
                  { this.props.todos.map( model => <Todo key={model.id} {...model} />) }
              </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch){
  return{
    addTodo: (todo) => dispatch(Action.addTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
