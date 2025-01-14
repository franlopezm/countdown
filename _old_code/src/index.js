import { HashRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss'

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);

serviceWorker.unregister();
