import React from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore , applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import gameReducer from './reducers/gameReducer';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  gameReducer,
  composeEnhancer(applyMiddleware(thunk))
);




const AppWrapper = () => (
  <Provider store={store}>
 	 <BrowserRouter>
    	<App />
    </BrowserRouter>
  </Provider>
);

render(<AppWrapper />, document.getElementById("root"));