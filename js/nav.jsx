import React from 'react';
import Link from "react-router-dom/es/Link";




class Menu extends React.Component {

	render () {
		return (
			<div className="container menu">

				<nav>
					<ol>
						<li><Link to='/Gallery'>GALLERY</Link></li>
						<li><Link to='/Contact'>CONTACT</Link></li>
					</ol>
				</nav>

			</div>
		)
	}
}

export default Menu;