import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";

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
		<div className="container-fluid d-flex">
			<div className="row">
				<Navbar />
			</div>
			<div className="row justify-content-center my-3">
				<div className="col-5">
					<img src="https://via.placeholder.com/500x400" />
				</div>
				<div className="col-5 justify-content-center">
					<h1 className="text-center">{vehicles !== null ? vehicles.name : null}</h1>
					<p className="text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris turpis urna, imperdiet dictum
						imperdiet rhoncus, rhoncus id diam. Donec porttitor est at arcu lacinia, a tempor tortor ornare.
						Duis porttitor pellentesque erat in malesuada. Aenean scelerisque ex non elementum vulputate.{" "}
					</p>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-10">
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Cargo Capacity</th>
								<th scope="col">Consumables</th>
								<th scope="col">Cost in Credits</th>
								<th scope="col">Crew</th>
								<th scope="col">Length</th>
								<th scope="col">Manufacturer</th>
								<th scope="col">Max Atmosphering Speed</th>
								<th scope="col">Model</th>
								<th scope="col">Passengers</th>
								<th scope="col">Pilots</th>
								<th scope="col">Vehicle Class</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{vehicles !== null ? vehicles.name : null}</td>
								<td>{vehicles !== null ? vehicles.cargo_capacity : null}</td>
								<td>{vehicles !== null ? vehicles.consumables : null}</td>
								<td>{vehicles !== null ? vehicles.cost_in_credits : null}</td>
								<td>{vehicles !== null ? vehicles.crew : null}</td>
								<td>{vehicles !== null ? vehicles.length : null}</td>
								<td>{vehicles !== null ? vehicles.manufacturer : null}</td>
								<td>{vehicles !== null ? vehicles.max_atmosphering_speed : null}</td>
								<td>{vehicles !== null ? vehicles.model : null}</td>
								<td>{vehicles !== null ? vehicles.passengers : null}</td>
								<td>{vehicles !== null ? vehicles.pilots : null}</td>
								<td>{vehicles !== null ? vehicles.vehicle_class : null}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
