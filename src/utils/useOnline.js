import { useEffect,useState } from "react";

const useOnline = ()=>{

    const [isOnline,setisOnline] = useState(true);
    const OnlineFunction = ()=>{
        setisOnline(true);}
        const OfflineFunction = ()=>{
            setisOnline(false);
        }


    useEffect(()=>{
        window.addEventListener("online",OnlineFunction)

        window.addEventListener("offline",OfflineFunction)
        
        
            return ()=>{
                window.removeEventListener("online",OnlineFunction);
                window.removeEventListener("offline",OfflineFunction);
            }
    },[])

    return isOnline;
}

export default useOnline;