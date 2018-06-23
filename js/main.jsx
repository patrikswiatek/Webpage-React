import React from 'react';
import './../main.scss';
import SliderJS from './slider.jsx';
import Menu from './nav.jsx';
import OfferJS from './offer.jsx';
import Welcome from './welcome.jsx'


	class Header extends React.Component {
		render() {
			return (
				<header className="col-12 row menu">
					<Menu />
				</header>
			)
		}
	}

	class Slider extends React.Component {
		render() {
			return (
				<div className="col-12 row slider">
					<SliderJS />
				</div>
			)
		}
	}

	class Offer extends React.Component {
		render() {
			return (
				<div className="col-12 row offer">
					<OfferJS />
				</div>
			)
		}
	}

	class PirceList extends React.Component {
		render() {
			return (
				<div  className="col-12 row pricelist">

				</div>
			)
		}
	}

	class Contact extends React.Component {
		render() {
			return (
				<div className="col-12 row contact">

				</div>
			)
		}
	}

	class Footer extends React.Component {
		render() {
			return (
				<div  className="col-12 row footer">

				</div>
			)
		}
	}


	class Main extends React.Component {
		render() {
			return (
				<div>
					<Welcome/>
					<Header />
					<Slider />
					<Offer />
					<PirceList />
					<Footer />
				</div>
			)
		}
	}

	export default Main;