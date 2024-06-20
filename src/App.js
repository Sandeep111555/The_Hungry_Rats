import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
//default import
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorElement from "./components/ErrorComponent";
// import About from "./About";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantDetails";
import Login from "./components/Login";
import Profile from "./components/ProfileClass";
import Shimmer from "./components/Shimmerui";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartDetails from "./components/CartDetails";

// import UserContext from "./utils/UserContext";

//lazy load about page
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
	// const [user, setUser] = useState({
	// 	name: "sandeep",
	// 	email: "sandeepgautam111555@gmail.com",
	// });

	return (
		<>
			{/* <UserContext.Provider value={{ user: user, setUser }}> */}
			{/* providing the store to all the components */}

				<Provider store={store}>   
				<HeaderComponent />
				<Outlet />
				<Footer />
				</Provider>
				
			{/* </UserContext.Provider> */}
		</>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <ErrorElement />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<Shimmer />}>
						<About />
					</Suspense>
				),
				children: [
					{
						path: "profile",
						element: <Profile />,
					},
				],
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/restaurant/:id",
				element: <RestaurantDetails />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path:"/cart",
				element: <CartDetails/>
			}
		],
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

//chunking
//code spliting
//Dynamic Bundling
//lazy loading
//On demand Loading
//Dynamic Import






