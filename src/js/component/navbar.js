import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../views/favoritescontext";

export const Navbar = () => {
	const f = useContext(FavoritesContext);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Dropdown button
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
		</nav>
	);
};
