import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import warehousesImportReducer from './WarehousesImport/WarehousesImportReducer';
import { Provider } from 'react-redux';


const store = createStore(warehousesImportReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);



