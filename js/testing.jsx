import React from 'react';
import Plx from 'react-plx';
import Menu from './nav.jsx';
import Contact from './contact.jsx';

class Testing extends React.Component {

	render () {



		const parallax = [
			{
				start: 0,
				end: 700,
				properties: [
					{
						startValue: 0,
						endValue: 100,
						property: "translateX"
					},
					{
						startValue: 0,
						endValue: 1,
						property: "opacity"
					}]
			},
{
				start: 790,
				end: 1000,
				properties: [
					{
						startValue: 0,
						endValue: -90,
						property: "rotate"
					},
					{
						startValue: 1,
						endValue: 0,
						property: "opacity"
					}

				]
			},

				];

const parallax2 = [
	{
		start: 0,
		end: 700,
		properties: [
			{
				startValue: 0,
				endValue: -150,
				property: "translateX"
			},
			{
				startValue: 0,
				endValue: 1,
				property: "opacity"
			}]
	},
	{
		start: 790,
		end: 1000,
		properties: [
			{
				startValue: 0,
				endValue: 90,
				property: "rotate"
			},
			{
				startValue: 1,
				endValue: 0,
				property: "opacity"
			}

		]
	},

];
const parallax3 = [
	{
		start: 0,
		end: 700,
		properties: [
			{
				startValue: 0,
				endValue: -150,
				property: "translateX"
			},
			{
				startValue: 0,
				endValue: 1,
				property: "opacity"
			}]
	},
	{
		start: 790,
		end: 1000,
		properties: [
			{
				startValue: 0,
				endValue: 90,
				property: "rotate"
			},
			{
				startValue: 1,
				endValue: 0,
				property: "opacity"
			}

		]
	},

];



		const style = {
			height: '550px',
			width: '400px',
			position: 'absolute',
			top: '15vh',
			right: '45vw',
		};

const style2 = {
			height: '550px',
			width: '400px',
			position: 'absolute',
			top: '20vh',
			right: '40vw',
		};


		return (
			<div className='nowszystko'>
				<section className="sectiona1">

					<Menu />
					<Footer />
				</section>
				<section className="sectiona2">

						<Plx parallaxData={parallax}>
							<div className="elo" style={style} />
						</Plx>
					<Plx parallaxData={parallax2}>
							<div className="elo2" style={style2} />
						</Plx>


				</section>
				<section className="sectiona3">

				</section>
			</div>
		)
	}
}

export default Testing;