import React from 'react';
import Link from "react-router-dom/es/Link";

class Footer extends React.Component {

	render () {
		return (
			<div className="footer">
					<span><Link className="text" to='/Contact'>Let's talk about your comfort</Link></span>
			</div>
		)
	}
}

export default Footer;