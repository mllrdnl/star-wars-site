import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export function VehiclesPage() {
	const params = useParams();

	const [vehicles, setVehicles] = useState(null);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles/" + params.id)
			.then(res => res.json())
			.then(data => setVehicles(data.result.properties))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<p>Name: {vehicles !== null ? vehicles.name : null}</p>
				</div>
				<div className="col"></div>
			</div>
		</div>
	);
}
