import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';


const store = createStore(reducers, applyMiddleware(reduxThunk));


ReactDOM.render(<div>
  <Provider store={store}>
    <App />
  </Provider>
</div>
  , document.querySelector('#root'));