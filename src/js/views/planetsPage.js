import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

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
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<p>Name: {planets !== null ? planets.name : null}</p>
				</div>
				<div className="col"></div>
			</div>
		</div>
	);
}
