import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { PeopleList } from "./peopleList";
import { PlanetsList } from "./planetsList";
import { VehiclesList } from "./vehiclesList";

export const Home = () => (
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
