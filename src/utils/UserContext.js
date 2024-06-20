import { createContext } from "react";

const UserContext = createContext({
    user:{
        name: "Sandeep Kumar Gautam",
        email: "sandeepgautam111555@gmail.com"
    }
});

export default UserContext;