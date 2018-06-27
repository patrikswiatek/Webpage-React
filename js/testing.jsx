import React from 'react';
import Plx from 'react-plx';

class Testing extends React.Component {




	render () {



		const parallax = [
			{
				start: 300,
				end: 700,
				properties: [
					{
						startValue: 0,
						endValue: 90,
						property: "rotate"
					},
					{
						startValue: 1,
						endValue: 1.5,
						property: "scale"
					},
					{
						startValue: 1,
						endValue: 0.75,
						property: "opacity"
					},
				]
			}
				];



		const style2 = {
			height: '100px',
			width: '100px',
			backgroundColor: 'red',
		};

		return (
			<div>
				<section className="sectiona1">

					<p className="line-1 anim-typewriter">Animation typewriter style using css steps()</p>

				</section>
				<section className="sectiona2">

						<Plx parallaxData={parallax}>
							<div style={style2} />
						</Plx>

				</section>
				<section className="sectiona3">


				</section>
			</div>
		)
	}
}

export default Testing;