import ResCard from "./ResCard";
import resObj from "../common/mockData";

const Body = () => {
    return (
      <div className="cardsSection" >
        {resObj.restaurants.map((res) => <ResCard key={res.info.id} resData={res} />
      )}
      </div>
    )
  }

  export default Body;