import React from 'react';
import ReactDOM from 'react-dom';
import './../main.scss';
import Main from './main.jsx'
import GalleryMain from './galleryMain.jsx'
import {HashRouter} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Contact from './contact.jsx'



document.addEventListener('DOMContentLoaded', function () {

	class App extends React.Component {
			render() {
				return (<HashRouter>
					<div>
						<Route exact path='/' component={Main}/>
						<Route path='/Shop' component={GalleryMain}/>
						<Route path='/Contact' component={Contact}/>
					</div>
				</HashRouter>)
			}
		}

	ReactDOM.render(<App/>, document.getElementById('app'));
});