import ResCard from "./ResCard";
import resObj from "../common/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setResList ] = useState(resObj.restaurants);
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
        <div className="cardsSection" >
          {resList.map((res) => <ResCard key={res.info.id} resData={res} />
        )}
        </div>
      </div>
    )
  }

  export default Body;