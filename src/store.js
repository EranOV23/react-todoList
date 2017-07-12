import {createStore} from 'redux';
import reducers from './reducers/combineReducers';


const state = {
    todos: [
        {
            label: "Learn React",
            isCompleted: false,
            id: 1,
        },
        {
            label: "Learn Redux",
            isCompleted: false,
            id: 2,
        },
        {
            label: "Learn Middlewears",
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
