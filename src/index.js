import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss'

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);

serviceWorker.unregister();
