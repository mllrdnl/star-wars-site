import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../views/favoritescontext";

import "../../styles/styles.css";

export const Navbar = () => {
	const f = useContext(FavoritesContext);
	return (
		<div id="nav" className="container-fluid">
			<div className="flex-row d-inline-flex">
				<a className="navbar-brand" href="#">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
						width="147"
						height="92"
					/>
				</a>

				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton1">
						{f.favorites.map((item, index) => {
							return (
								<li key={index}>
									<a className="dropdown-item" href="#">
										{item}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
