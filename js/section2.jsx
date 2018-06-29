import React from 'react';
import Plx from 'react-plx';


class Section2 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			filter: 'none',
		}
	}



	render() {


		const parallax = [
			{
				start: 40,
				end: 700,
				properties: [
					{
						startValue: 0,
						endValue: 575,
						property: "translateX"
					},
					{
						startValue: 0,
						endValue: 1,
						property: "opacity"
					}]
			},
			{
				start: 750,
				end: 1400,
				properties: [
				{
					startValue: 575,
					endValue: 0,
					property: "translateX"
				},
				{
					startValue: 0,
					endValue: 90,
					property: "rotate"
				},
				{
					startValue: 1,
					endValue: 0,
					property: "opacity"


				}]
			}
		];

		const parallax2 = [
			{
				start: 0,
				end: 700,
				properties: [
					{
						startValue: 0,
						endValue: -500,
						property: "translateX"
					},
					{
						startValue: 0,
						endValue: 1,
						property: "opacity"
					},
					{
						startValue: 90,
						endValue: 0,
						property: "rotate"
					}
					]
			},
			{
				start: 750,
				end: 1400,
				properties: [

					{
						startValue: 0,
						endValue: -500,
						property: "translateY"
					},
					{
						startValue: 1,
						endValue: 0.1,
						property: "scale"
					},
					{
						startValue: 1,
						endValue: 0,
						property: "opacity"


					}]
			}
		];

		const style = {
			height: '550px',
			width: '400px',
			position: 'relative',
			top: '5vh',
			left: '-8vw',
			filter: this.state.filter,
		};

		const style2 = {
			height: '550px',
			width: '400px',
			position: 'relative',
			top: '-57vh',
			left: '72vw',
			backgroundColor: 'green',
			filter: this.state.filter,
		};

		const style3 = {
			filter: this.state.filter,
		};

		return(
			<section className='section2' style={style3}>
				<Plx parallaxData={parallax}>
					<div className="elo" style={style} />
				</Plx>
				<Plx parallaxData={parallax2}>
					<div className="elo2" style={style2}/>
				</Plx>
			</section>
		);
	}
}

export default Section2;


