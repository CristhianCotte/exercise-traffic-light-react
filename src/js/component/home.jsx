import React, { useState } from "react";
import TrafficLight from "../component/TrafficLight.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	return (
		<>
			<div>
				<TrafficLight />
			</div>
		</>
	);
};

export default Home;
