import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList ] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return (
      <div>
        <button
          className="filterBtn"  
          onClick={() => {
            setResList(resList.filter((res) => res.info.avgRating > 4 ))
          }}
        >
          TOP RATED
        </button>
        <div className="cardsSection">
          {resList.map((res) => <ResCard key={res.info.id} resData={res} />
        )}
        </div>
      </div>
    )
  }

  export default Body;