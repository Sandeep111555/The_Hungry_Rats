import { useState } from "react";
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";
import { CART } from "../Constant";
import { useSelector } from "react-redux";
const Title = () => {
	return (
		<>
			<a href="/">
				<img
					src={logo}
					className="h-32 p-2"
					alt="Not loaded"
				/>
			</a>
		</>
	);
};
const HeaderComponent = () => {
	const [loginOption, setLoginOption] = useState(false);
	const cartItem = useSelector(store=>store.cart.items);

	return (
		<div className="flex justify-between  bg-pink-100 shadow-lg">
			<Title />
			<div className="nav-items">
				<ul className="flex py-10">
					<Link to="/">
						<li className="px-2 hover:font-semibold">Home</li>
					</Link>
					<Link to="/about">
						<li className="px-2 hover:font-semibold">About</li>
					</Link>
					<Link to="/contact">
						<li className="px-2 hover:font-semibold">Contact</li>
					</Link>
					<Link to="/cart">
					<li className="px-2 hover:scale-110">{CART}</li>
					</Link>
					<span className="font-bold text-red-500">{cartItem.length}</span>
					{loginOption ? (
						<Link to="/">
							<button
								onClick={() => {
									setLoginOption(false);
								}} className="px-2 hover:font-semibold"
							>
								logout
							</button>
						</Link>
					) : (
						<Link to="/login">
							<button
								onClick={() => {
									setLoginOption(true);
									
								}}
								className="px-2 hover:font-semibold"
							>
								login
							</button>
						</Link>
					)}
				</ul>
			</div>
		</div>
	);
};
export default HeaderComponent;
