import logo from "../Assets/img/logo.png"
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { MAIL_IMG } from "../Constant";
const Footer = ()=>{
    const {user} = useContext(UserContext);
    return(
    <>
    <div className="bg-slate-900 h-[430px] text-gray-400 flex justify-evenly p-16">
        <div className="flex items-center  h-44">
        <img src={logo} alt="not rendered" className="h-32" />
        <h2 className="p-5 font-serif font-extrabold text-2xl text-white text-">The Hungary Rats</h2>
        </div>
        <ul>
            <li>
                <h3 className="text-white font-bold">Company</h3>
            </li>
            <li className="py-2">
                About
            </li>
            <li className="py-2">
                Careers
            </li>
            <li className="py-2">
                Team
            </li>
        </ul>
        <ul>
            <li>
            <h3 className="text-white font-bold">Legal</h3>
            </li>
            <li className="py-2">
                Terms & Conditions
            </li>
            <li className="py-2">
                Cookie Policy
            </li>
            <li className="py-2">
                Privacy Policy
            </li>
        </ul>
        <ul>
            <li>
                <h1 className="text-white font-bold">We Deliver To:</h1>
            </li>
            <li className="py-2">
                Banglore
            </li>
            <li className="py-2">
                Gurgaon
            </li>
            <li className="py-2">
                Hyderbad
            </li>
            <li className="py-2">
                Delhi
            </li>
            <li className="py-2">Pune</li>
            <li className="py-2">
                Mumbai
            </li>
            <li className="py-2">Bhubaneswar</li>
            <li className="text-white font-bold">and more</li>
        </ul>
    </div>
    <h3 className="bg-slate-900 text-white font-serif flex justify-center">Developed by {user.name}</h3>
    <h3 className="bg-slate-900 text-white font-serif flex justify-center">{MAIL_IMG}{user.email}</h3>
    </>
    )
}

export default Footer;