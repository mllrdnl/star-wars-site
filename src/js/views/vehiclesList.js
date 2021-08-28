import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "./favoritescontext";

import "../../styles/styles.css";
import "../../styles/vehiclesList.css";

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
		<div className="container">
			<div className="row">
				<div className="col-10 pt-3">
					<h1>Vehicles</h1>
				</div>
				<div className="col-2 py-3 d-flex justify-content-end">
					<button className="btn btn-outline-secondary mx-3">
						<i className="fas fa-chevron-left fa-lg"></i>
					</button>
					<button className="btn btn-outline-secondary">
						<i className="fas fa-chevron-right fa-lg"></i>
					</button>
				</div>
			</div>
			<div className="row d-inline-flex w-100">
				<div className="scrolling-wrapper-flexbox">
					{vehicles.map((vehicle, index) => {
						return (
							<div key={index} className="col-4">
								<div className="card">
									<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{vehicle.name}</h5>
										<p className="card-text"> </p>
										<div className="row justify-content-between px-2">
											<a
												className="btn btn-primary"
												href={"/vehicles/" + vehicle.uid}
												role="button">
												Learn More!
											</a>
											{f.favorites.includes(vehicle.name) ? (
												<button
													onClick={() => {
														f.setFavorites(
															f.favorites.filter(item => item !== vehicle.name)
														);
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
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
