import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { PeopleList } from "./peopleList";
import { PlanetsList } from "./planetsList";
import { VehiclesList } from "./vehiclesList";
import { FavoritesContext } from "./favoritescontext";
import { Navbar } from "../component/navbar";

export const Home = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<Navbar />
			</div>
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
