import React from 'react';
import Plx from 'react-plx';



class Section3 extends React.Component {
	render() {

		const parallax4 = [
			{
				start: 500,
				end: 1250,
				properties: [
					{
						startValue: 0,
						endValue: -350,
						property: "translateY"
					},
					{
						startValue: 90,
						endValue: 90,
						property: "rotate"
					},
					{
						startValue: 0,
						endValue: 1,
						property: "opacity"
					}
					]

			},
			{
				start: 1300,
				end: 1400,
				properties: [
					{
						startValue: 0,
						endValue: -50,
						property: "translateX"
					}
					]
			},
			{
				start: 1500,
				end: 2000,
				properties: [
					{
						startValue: 1,
						endValue: 0,
						property: "scaleX"
					},
					{
						startValue: 1,
						endValue: 0,
						property: "opacity"
					}
					]

			},

		];

		const parallax5 = [
			{
				start: 500,
				end: 1250,
				properties: [

					{
						startValue: 0,
						endValue: -90,
						property: "rotate"
					},
					{
						startValue: 0,
						endValue: 1,
						property: "opacity"
					}
					]
			},
			{
				start: 1500,
				end: 2000,
				properties: [

					{
						startValue: 1,
						endValue: 0,
						property: "scaleZ"
					},
					{
						startValue: 0,
						endValue: 900,
						property: "translateX"
					}
					]
			}

		];


		const style3 = {
			height: '550px',
			width: '400px',
			position: 'relative',
			top: '12vh',
			left: '54vw',
		};

		const style4 = {
			height: '550px',
			width: '400px',
			position: 'relative',
			top: '22.41vh',
			left: '75.57vw',
			opacity: 1,
		};

		return(
			<section className='section3'>

				<Plx parallaxData={parallax4}>
					<div className="elo3" style={style3} />
				</Plx>
				<Plx parallaxData={parallax5}>
					<div className="elo4" style={style4} />
				</Plx>

			</section>
		);
	}
}

export default Section3;


