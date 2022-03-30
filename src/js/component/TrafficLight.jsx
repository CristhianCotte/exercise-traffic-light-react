import React, { useState } from "react";

const TrafficLight = () => {
	const [color, setColor] = useState("luz-roja");

	return (
		<div className="container d-flex justify-content-center align-items-center flex-column">
			<div className="barra"></div>
			<div className="semaforo">
				<div
					onClick={() => {
						setColor("luz-roja");
					}}
					className={
						"luz luz-roja" + (color === "luz-roja" ? " brillo" : "")
					}></div>
				<div
					className={`luz luz-amarillo ${
						color === "luz-amarillo" && "brillo"
					}`}
					onClick={() => setColor("luz-amarillo")}></div>
				<div
					className={
						"luz luz-verde" +
						(color === "luz-verde" ? " brillo" : "")
					}
					onClick={() => {
						setColor("luz-verde");
					}}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
