import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../views/favoritescontext";

import "../../styles/styles.css";

export const Navbar = () => {
	const f = useContext(FavoritesContext);

	const [showMenu, setShowMenu] = useState("");

	return (
		<nav className="navbar navbar-expand-lg w-100">
			<div className="row w-100">
				<div className="col-10">
					<a className="navbar-brand" href="#">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
							width="147"
							height="92"
						/>
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
					<div className="collapse navbar-collapse my-auto" id="navbarSupportedContent">
						<ul className="navbar-nav my-auto mb-lg-0">
							<li className="nav-item dropdown">
								<a
									onClick={e => {
										if (showMenu == "") {
											setShowMenu("show");
										} else {
											setShowMenu("");
										}
									}}
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									dataBsToggle="dropdown"
									ariaExpanded="false">
									Favorites
								</a>
								<ul className={"dropdown-menu " + showMenu} ariaLabelledBy="navbarDropdown">
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
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
