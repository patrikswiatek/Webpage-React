import React from 'react';
import Menu from './nav.jsx'
import Footer from './footer.jsx'


class MainPage extends React.Component {

	render() {


		return (
			<div>

						<section className="section1">
							<Menu />
							<Footer />
						</section>
						<section className="section2" />


						<section className="section3" />

			</div>
				);
	}
}



export default MainPage;
