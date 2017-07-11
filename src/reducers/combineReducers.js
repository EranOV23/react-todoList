import {combineReducers} from 'redux';
import * as Constans from '../actions/constants';

function todosReducer(state = [], action) {

    switch (action.type){
        case Constans.ADD_TODO:
            return [...state, {
                label: action.label,
                isCompleted: false,
                id: state.reduce((id, todo) => (id > todo.id) ? id : todo.id, 0 ) + 1
            }];
        case Constans.REMOVE_TODO:
            return state.filter( todo => action.id !== todo.id);

        case Constans.SET_TODO_COMPLETED:
            return state.reduce( (arr, todo) => {
                if(action.id === todo.id)
                    todo.isCompleted = action.isCompleted;
                arr.push(todo);
                return arr;
            }, [] );

        case Constans.UPDATE_TODO_LABEL:
            return state.reduce( (arr, todo) => {
                if(action.id === todo.id)
                    todo.label = action.label;
                arr.push(todo);
                return arr;
            }, [] )
    }

    return state;
}

export default combineReducers({
    todos: todosReducer,
})