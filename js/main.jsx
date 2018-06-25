import React from 'react';
import './../main.scss';
import MainPage from './mainPage.jsx';
import Welcome from "./welcome.jsx";



	class Header extends React.Component {
		render() {
			return (
				<Welcome />
			)
		}
	}


	class Main extends React.Component {
		render() {
			return (
				<div>
					<Header />
					<MainPage />
				</div>
			)
		}
	}

	export default Main;