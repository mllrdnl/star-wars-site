import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";

import "../../styles/peoplepage.css";

export function PlanetsPage() {
	const params = useParams();

	const [planets, setPlanets] = useState(null);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/" + params.id)
			.then(res => res.json())
			.then(data => setPlanets(data.result.properties))
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
					<h1 className="text-center">{planets !== null ? planets.name : null}</h1>
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
								<th scope="col">Climate</th>
								<th scope="col">Diameter</th>
								<th scope="col">Gravity</th>
								<th scope="col">Orbital Period</th>
								<th scope="col">Population</th>
								<th scope="col">Rotation Period</th>
								<th scope="col">Surface Water</th>
								<th scope="col">Terrain</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{planets !== null ? planets.name : null}</td>
								<td>{planets !== null ? planets.climate : null}</td>
								<td>{planets !== null ? planets.diameter : null}</td>
								<td>{planets !== null ? planets.gravity : null}</td>
								<td>{planets !== null ? planets.orbital_period : null}</td>
								<td>{planets !== null ? planets.population : null}</td>
								<td>{planets !== null ? planets.rotation_period : null}</td>
								<td>{planets !== null ? planets.surface_water : null}</td>
								<td>{planets !== null ? planets.terrain : null}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
