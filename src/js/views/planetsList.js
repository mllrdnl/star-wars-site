import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { FavoritesContext } from "./favoritescontext";

import "../../styles/styles.css";

export function PlanetsList() {
	const [planets, setPlanets] = useState([]);
	const f = useContext(FavoritesContext);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/")
			.then(res => res.json())
			.then(data => setPlanets(data.results))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container-fluid">
			<h1>Planets</h1>
			<div className="flex-row d-inline-flex flex-nowrap">
				{planets.map((planet, index) => {
					return (
						<div key={index} className="col-4">
							<div key={index} className="card">
								<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>
									<p className="card-text"></p>
									<a className="btn btn-primary" href={"/planets/" + planet.uid} role="button">
										Learn More!
									</a>
									{f.favorites.includes(planet.name) ? (
										<button
											onClick={() => {
												f.setFavorites(f.favorites.filter(item => item !== planet.name));
											}}
											type="button"
											className="btn btn-warning">
											<i className="far fa-heart"></i>
										</button>
									) : (
										<button
											onClick={() => {
												f.setFavorites([...f.favorites, planet.name]);
											}}
											type="button"
											className="btn btn-outline-warning">
											<i className="far fa-heart"></i>
										</button>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
