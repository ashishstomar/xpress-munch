import { useEffect, useState } from "react";
import { MENU_API } from "../common/constants";

const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() =>{
        fetchResMenu();
    }, []); 
    
    const fetchResMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json()
        setResInfo(json.data);
        console.log(json.data);
    };
    return resInfo
}


export default useResMenu