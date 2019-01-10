import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/lib/date-picker/style/css'; 
import 'antd/dist/antd.css'
import ScrollMemory from 'react-router-scroll-memory';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Store/Store'



ReactDOM.render(
 <Provider store={store}>
    <BrowserRouter>
    <div>
        <ScrollMemory/>
        <App/>
    </div>
    </BrowserRouter>
 </Provider>

   
,document.getElementById('root'));

serviceWorker.unregister();
