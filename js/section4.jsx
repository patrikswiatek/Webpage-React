import React from 'react';
import Plx from 'react-plx';
import Link from "react-router-dom/es/Link";



class Section4 extends React.Component {
	render() {

		const parallax7 = [
			{
				start: 1600,
				end: 2100,
				properties: [

					{
						startValue: 90,
						endValue: 0,
						property: "translateY"
					},
					{
						startValue: 0,
						endValue: 1,
						property: "opacity"
					}
				]
			}
		];

		const parallax8 = [
			{
				start: 1600,
				end: 2200,
				properties: [

					{
						startValue: -390,
						endValue: 0,
						property: "translateX"
					},
					{
						startValue: 0,
						endValue: 1,
						property: "opacity"
					}
				]
			}
		];

		const parallax9 = [
			{
				start: 1850,
				end: 2300,
				properties: [

					{
						startValue: -390,
						endValue: 0,
						property: "translateY"
					},
					{
						startValue: 0,
						endValue: 1,
						property: "opacity"
					}
				]
			}
		];



		return(
			<section className='section4'>
				<Link className='formLink' to='/Contact'>
					<ul className="Words">
						<li className="Words-line">
							<p>&nbsp;</p>
						</li>
						<li className="Words-line">
							<Plx parallaxData={parallax7}>
							<p>Let's talk </p>
							</Plx>
						</li>
						<li className="Words-line">
							<Plx parallaxData={parallax8}>
							<p>about your</p>
							</Plx>
						</li>
						<li className="Words-line">
							<Plx parallaxData={parallax9}>
							<p>comfort</p>
							</Plx>
						</li>
					</ul>
				</Link>
			</section>
		);
	}
}

export default Section4;


