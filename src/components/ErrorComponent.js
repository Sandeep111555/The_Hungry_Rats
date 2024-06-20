import { useRouteError } from "react-router-dom"; //hook
import errorimg from "../Assets/img/dogimg.png"
const ErrorElement = ()=>
{
const err = useRouteError();
console.log(err);
    return(
        <>

        <div className="flex items-center">
        {
        <img src={errorimg} alt="not rendered"  className="w-[1500px]" />
        }
        <h1 className="ont-serif text-3xl font-bold text-pink-500">{"ERROR-"+err.status + " : "+ err.statusText }</h1>
        </div>
        </>
    )
}

export default ErrorElement;