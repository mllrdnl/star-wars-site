import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export function PeopleList() {
	const [people, setPeople] = useState([]);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => setPeople(data.results))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container">
			<ul>
				{people.map((person, index) => {
					return (
						<li key={index}>
							<div className="row">
								<div className="col">{person.name}</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
