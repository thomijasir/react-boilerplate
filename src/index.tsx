import React, { JSXElementConstructor } from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import APP_ROUTER from './services/Router';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
					{APP_ROUTER.map(item => (
						<Route {...item} element={<item.element/>} />
					))}
					<Route path="*" element={<p>404 Page</p>}/>
			</Routes>
		</BrowserRouter>
		
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
