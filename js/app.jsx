import React from 'react';
import ReactDOM from 'react-dom';
import './../main.scss';
import MainPage from './mainPage.jsx'
import GalleryMain from './galleryMain.jsx'
import {HashRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Welcome from './welcome.jsx'
import Contact from './contact.jsx'
import Testing from './testing.jsx'
import Switch from "react-router-dom/es/Switch";



document.addEventListener('DOMContentLoaded', function () {



	class NotFound extends React.Component {
		render() {
			return <h1>404</h1>;
		}
	}

	class App extends React.Component {
			render() {
				return (
					<HashRouter>
						<Switch>
							<Route exact path='/' component={Welcome}/>
							<Route path='/Main' component={MainPage}/>
							<Route path='/Shop' component={GalleryMain}/>
							<Route path='/Contact' component={Contact}/>
							<Route path='/Testing' component={Testing}/>
							<Route component={NotFound} />
						</Switch>
					</HashRouter>)
			}
		}

	ReactDOM.render(<App/>, document.getElementById('app'));
});