import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import { useEffect, useState } from "react";
import { ARROWDOWN, ARROWUP } from "../Constant";

const Section = ({ title, desciption, isVisible, setIsvisible }) => {
	return (
		<div className="border border-black p-2 m-2 shadow-lg  rounded-lg" >
			{isVisible ? (
                <>
                <h3 className="font-bold text-xl">{title}</h3>
					<button className="w-full"
						onClick={() => {
							setIsvisible(false);
						}}
					>
						<div className="flex justify-end w-full items-center transition hover:-translate-y-1">{ARROWUP}</div>
                        
					</button>
					<p className="items-center font-serif text-xl" >{desciption}</p>
				</>
			) : (
                <>
                <h3 className=" text-xl">{title}</h3>
				<button className="w-full"
					onClick={() => {
						setIsvisible(true);
					}}
				>
					<div className="flex justify-end w-full items-center transition hover:translate-y-1">{ARROWDOWN}</div>
				</button>
                </>

			)}
		</div>
	);
};
const About = () => {
	const [visibleSection, setVisibleSection] = useState("");
	return (
		<>
			<div>
				<Section
					title={"About website"}
					desciption={
						"This is the prototype of a food delivery website like SWIGGY and KFC. It is developed with the help of react along with various packages like parcel,babel,npm,react router dom,etc"
					}
					isVisible={visibleSection === "About"}
					setIsvisible={(bool) => {
						bool ? setVisibleSection("About") : setVisibleSection("");
					}}
				/>
				<Section
					title={"Developer Profile"}
					desciption={<Profile name={"Sandeep Gautam"} />}
					isVisible={visibleSection === "Profile"}
					setIsvisible={(bool) => {
						bool ? setVisibleSection("Profile") : setVisibleSection("");
					}}
				/>
				<Section
					title={"Aim of the Website"}
					desciption={
						"Main aim of this website is to provide seamless user experience through single page website and config driven UI"
					}
					isVisible={visibleSection === "Aim"}
					setIsvisible={(bool) => {
						bool ? setVisibleSection("Aim") : setVisibleSection("");
					}}
				/>
			</div>
			{/* <Profile name={"Sandeep Gautam"} /> */}
		</>
	);
};
export default About;
