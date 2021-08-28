import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FavoritesContext } from "./favoritescontext";

import "../../styles/styles.css";
import "../../styles/peopleList.css";

export function PeopleList() {
	const params = useParams();
	const [people, setPeople] = useState([]);
	const [details, setDetails] = useState(null);
	const f = useContext(FavoritesContext);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => setPeople(data.results))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-10">
					<h1>Characters</h1>
				</div>
				<div className="col-2 py-3 d-flex justify-content-end">
					<button className="btn btn-outline-secondary">
						{" "}
						<i className="fas fa-chevron-left fa-lg"></i>
					</button>
					<button className="btn btn-outline-secondary ms-2">
						<i className="fas fa-chevron-right fa-lg"></i>
					</button>
				</div>

				<div className="col d-inline-flex w-100">
					<div className="scrolling-wrapper-flexbox">
						{people.map((person, index) => {
							return (
								<div key={index} className="col-4">
									<div className="card">
										<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
										<div className="card-body">
											<h5 className="card-title">{person.name}</h5>
											<p className="card-text">
												Gender:
												<br />
												Hair Color:
												<br />
												Eye Color:
												<br />
											</p>
											<div className="row justify-content-between px-2">
												<a
													className="btn btn-primary"
													href={"/people/" + person.uid}
													role="button">
													Learn More!
												</a>
												{f.favorites.includes(person.name) ? (
													<button
														onClick={() => {
															f.setFavorites(
																f.favorites.filter(item => item !== person.name)
															);
														}}
														type="button"
														className="btn btn-warning">
														<i className="far fa-heart"></i>
													</button>
												) : (
													<button
														onClick={() => {
															f.setFavorites([...f.favorites, person.name]);
														}}
														type="button"
														className="btn btn-outline-warning">
														<i className="far fa-heart"></i>
													</button>
												)}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
