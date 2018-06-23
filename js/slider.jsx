import React from 'react';


class SliderJS extends React.Component {

	render () {
/*
		changeFilters() {

			const leftArrow = document.querySelector('.arrow-left'),
				rightArrow = document.querySelector('.arrow-right'),
				body = document.querySelector('body'),
				elements = document.querySelectorAll('body span'),
				classes = elements[9].classList,
				counter = 0;

			leftArrow.addEventListener('click', function (e) {
				e.preventDefault();
				counter--;
				if (counter < 0) {
					body.removeAttribute('class', classes[counter - 1]);
					counter = 7;
					body.setAttributee('class', classes[counter]);
				} else {
					body.removeAttribute('class', classes[counter - 1])
					body.setAttribute('class', classes[counter]);
				}
			});

			rightArrow.addEventListener('click', function (e) {
				e.preventDefault();
				counter++;
				if (counter > 7) {
					body.removeAttribute('class', classes[counter - 1]);
					counter = 0;
					body.setAttribute('class', classes[counter]);
				} else {
					body.removeAttribute('class', classes[counter - 1]);
					body.setAttribute('class', classes[counter]);
				}
			});
		}*/

		return (
			<aside className="slider">
				<div className="container">

					<div className="col-6 slider-image">
						<img src="./../images/black_chair.png" />
					</div>

					<div className="col-6 slider-text">
						<h1>SIT ON CHAIR</h1>
						<a>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po
							raz pierwszy użyty w XV w. przez nieznanego.
							Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.</a>
						<button>ZOBACZ WIĘCEJ</button>
					</div>
				</div>
			</aside>
		)
	}
}

export default SliderJS;