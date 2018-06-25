import React from 'react';
import Link from "react-router-dom/es/Link";




class Menu extends React.Component {

	render () {
		return (
			<div className="container">
				<nav>
					<ol>
						<li><Link to='/Shop'>SHOP</Link></li>
						<li><a href="#">FIRM PROFILE</a></li>
						<li><Link to='/Contact'>CONTACT</Link></li>
					</ol>
				</nav>
			</div>
		)
	}
}

export default Menu;