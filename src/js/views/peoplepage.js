import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

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
		<div className="container-fluid">
			<div className="row">
				<div className="col">
					<p>Name: {people !== null ? people.name : null}</p>
				</div>
				<div className="col"></div>
			</div>
		</div>
	);
}
