import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList ] = useState([]);
  const [searchtxt, setSearchtxt] = useState("");
  const [filterResList, setFilterResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return resList.length == 0 ? (
    <Shimmer />
  ) : (
      <div>
        <input 
          type="text" 
          className="searchbar" 
          placeholder="Pizza..." 
          value={searchtxt}
          onChange={(e) => {
            setSearchtxt(e.target.value)
          }}
        />
        <button 
          className="search-btn"
          onClick={()=> {
            setFilterResList(
              resList.filter((res) => res.info.name.toUpperCase().includes(searchtxt.toUpperCase()))
            )
          }}
        >
          Search
        </button>
        <button
          className="filterBtn"  
          onClick={() => {
            setFilterResList(resList.filter((res) => res.info.avgRating > 4 ))
          }}
        >
          TOP RATED
        </button>
        <div className="cardsSection">
          {filterResList.map((res) => <ResCard key={res.info.id} resData={res} />
        )}
        </div>
      </div>
    )
  }

  export default Body;