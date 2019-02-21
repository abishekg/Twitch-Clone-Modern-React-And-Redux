import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));


ReactDOM.render(<div>
  <Provider store={store}>
    <App />
  </Provider>
</div>
  , document.querySelector('#root'));