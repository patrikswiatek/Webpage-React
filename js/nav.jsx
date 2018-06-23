import React from 'react';


class Menu extends React.Component {

	render () {
		return (
			<div className="container">
				<nav>
					<ol>
						<li><a href="#">O FIRMIE</a>
							<ul>
								<li><a href="#">Aktualności</a></li>
								<li><a href="#">Nasz team</a></li>
								<li><a href="#">Historia</a></li>
							</ul>
						</li>
						<li><a href="#">GALERIA</a>
							<ul>
								<li><a href="#">Historia</a></li>
								<li><a href="#">Aktualności</a></li>
								<li><a href="#">Nasz team</a></li>
							</ul>
						</li>
						<li><a href="#">KONTAKT</a>
							<ul>
								<li><a href="#">Nasz team</a></li>
								<li><a href="#">Historia</a></li>
								<li><a href="#">Aktualności</a></li>
							</ul>
						</li>
					</ol>
				</nav>
			</div>
		)
	}
}


export default Menu;