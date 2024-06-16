import { CDN_URL } from "../common/constants";

const ResCard = (props) => {
    const { resData } = props;
    const {avgRatingString, costForTwo, areaName, cuisines, name, cloudinaryImageId} = resData.info;
    const {deliveryTime} = resData.info.sla;
    return (
      <article className="bg-[rgb(253,255,240)] p-2 rounded-2xl h-[420px] mt-10">
        <img 
          className="rounded-2xl object-cover h-60 w-full" 
          src= { CDN_URL + cloudinaryImageId}
        />
        <div className="px-5 py-3">
          <h3 className="font-bold">{name}</h3>
          <h6>{cuisines.slice(0, 4).join(', ')}</h6>
          <p>{areaName}</p> 
          <div className="flex justify-between font-medium">
            <h4 className="font-medium" >{costForTwo}</h4>
              <div className="cardInfo-Bottom">
                <h5 className="font-medium">⭐ {avgRatingString} Rating</h5>
                <h5>🕒 {deliveryTime} Min</h5>
              </div>
          </div>
        </div>
      </article>
    )
  }

  // Higher Order Component
  // input - ResCard ==> ResCardOffer

  export const ResOfferHeader = (ResCard) => {

    return (props) => {
      const {resData} = props 
      const {header, subHeader} = resData.info.aggregatedDiscountInfoV3;
      
      return (
         <div>
          <label className="absolute text-sm my-2 bg-black bg-opacity-80 text-white font-semibold rounded-lg px-5 py-1">
            {header} {subHeader}
          </label>
          <ResCard {...props}/>
         </div>
      );
    };
  };

  export default ResCard;