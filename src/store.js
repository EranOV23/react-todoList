import {createStore} from 'redux';
import reducers from './reducers/combineReducers';


const state = {
    todos: [
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

};


export default createStore(
    reducers,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);