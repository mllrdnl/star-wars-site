import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../views/favoritescontext";

import "../../styles/styles.css";

export const Navbar = () => {
	const f = useContext(FavoritesContext);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
			<div className="row w-100">
				<div className="col-10">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
				</div>
				<div className="col-2">
					<button
						className="navbar-toggler"
						type="button"
						dataBsToggle="collapse"
						dataBsTarget="#navbarSupportedContent"
						ariaControls="navbarSupportedContent"
						ariaExpanded="false"
						ariaLabel="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									dataBsToggle="dropdown"
									ariaExpanded="false">
									Dropdown
								</a>
								<ul className="dropdown-menu show" ariaLabelledBy="navbarDropdown">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
