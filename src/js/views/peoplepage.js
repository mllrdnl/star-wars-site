import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";

import "../../styles/peoplepage.css";

export function PeoplePage() {
	const params = useParams();

	const [people, setPeople] = useState(null);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + params.id)
			.then(res => res.json())
			.then(data => setPeople(data.result.properties))
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
					<h1 className="text-center">{people !== null ? people.name : null}</h1>
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
								<th scope="col">Birth Year</th>
								<th scope="col">Gender</th>
								<th scope="col">Height</th>
								<th scope="col">Skin Color</th>
								<th scope="col">Eye Color</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{people !== null ? people.name : null}</td>
								<td>{people !== null ? people.birth_year : null}</td>
								<td>{people !== null ? people.gender : null}</td>
								<td>{people !== null ? people.height : null}</td>
								<td>{people !== null ? people.skin_color : null}</td>
								<td>{people !== null ? people.eye_color : null}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
