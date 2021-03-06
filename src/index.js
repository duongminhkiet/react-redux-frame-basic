import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import myReducer from './reducer';
import {
    createStore, applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
const store = createStore(myReducer,
    compose(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
