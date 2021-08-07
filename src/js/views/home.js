import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { PeopleList } from "./peopleList";
import { PlanetsList } from "./planetsList";
import { VehiclesList } from "./vehiclesList";
import { FavoritesContext } from "./favoritescontext";

export const Home = () => {
	const favorites = useContext(FavoritesContext);

	return (
		<div className="container-fluid">
			<div className="row"></div>
			<div className="row">
				<PeopleList />
			</div>
			<div className="row">
				<PlanetsList />
			</div>
			<div className="row">
				<VehiclesList />
			</div>
		</div>
	);
};
