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
		<div className="container-fluid">
			<h1>Characters</h1>
			<div className="card-group">
				{people.map((person, index) => {
					return (
						<div key={index} className="card">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{person.name}</h5>
								<p className="card-text">
									<a className="btn btn-primary" href={"/people/" + person.uid} role="button">
										Learn More!
									</a>
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
