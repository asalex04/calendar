import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global'
import App from './App';

import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <GlobalStyles />
        <App/>
    </Provider>
);
