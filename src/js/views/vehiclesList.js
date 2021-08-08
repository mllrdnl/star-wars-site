import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "./favoritescontext";

export function VehiclesList() {
	const [vehicles, setVehicles] = useState([]);
	const f = useContext(FavoritesContext);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles/")
			.then(res => res.json())
			.then(data => setVehicles(data.results))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container-fluid">
			<h1>Vehicles</h1>
			<div className="flex-row d-inline-flex flex-nowrap">
				{vehicles.map((vehicle, index) => {
					return (
						<div key={index} className="col-4">
							<div className="card">
								<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{vehicle.name}</h5>
									<p className="card-text"> </p>
									<a className="btn btn-primary" href={"/vehicles/" + vehicle.uid} role="button">
										Learn More!
									</a>
									{f.favorites.includes(vehicle.name) ? (
										<button
											onClick={() => {
												f.setFavorites(f.favorites.filter(item => item !== vehicle.name));
											}}
											type="button"
											className="btn btn-warning">
											<i className="far fa-heart"></i>
										</button>
									) : (
										<button
											onClick={() => {
												f.setFavorites([...f.favorites, vehicle.name]);
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
