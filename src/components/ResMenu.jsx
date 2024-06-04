import { useState, useEffect } from 'react'
import Shimmer from './Shimmer';
import { CDN_URL } from "../common/constants";

const ResMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() =>{
        fetchResMenu();
    }, []);
    const fetchResMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=754966");
        
        const json = await data.json();
        console.log(json);
    } 
    if(resInfo === null) {
        < Shimmer />
    }

    return(
        <div>
            <section className="banner">
                <img src={CDN_URL +resData.info.cloudinaryImageId} />
            </section>
            <h1 className="res-title">Restaurant Name</h1>
            <article className="menu-wrap">
                <h2>Menu</h2>
                <ul className="menu-list">
                    <li>data.cards[2].card.card.info.</li>
                    <li>sabji</li>
                    <li>sabji</li>
                    <li>sabji</li>
                    <li>sabji</li>
                    <li>sabji</li>
                    <li>sabji</li>
                    <li>sabji</li>
                    <li>sabji</li>
                    <li>sabji</li>
                    <li>sabji</li>
                    <li>sabji</li>
                </ul>
            </article>
        </div>

    )
};

export default ResMenu;