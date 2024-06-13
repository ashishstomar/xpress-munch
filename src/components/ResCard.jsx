import { CDN_URL } from "../common/constants";

const ResCard = (props) => {
    const { resData } = props;
  
    return (
      <article className="bg-[rgb(253,255,240)] p-2 rounded-2xl h-[420px] mt-10">
        <img 
          className="rounded-2xl object-cover h-60 w-full" 
          src= { CDN_URL +resData.info.cloudinaryImageId}
        />
        <div className="px-5 py-3">
          <h3 className="font-bold">{resData.info.name}</h3>
          <h6>{resData.info.cuisines.slice(0, 4).join(', ')}</h6>
          <p>{resData.info.areaName}</p> 
          <div className="flex justify-between font-medium">
            <h4 className="font-medium" >{resData.info.costForTwo}</h4>
              <div className="cardInfo-Bottom">
                <h5 className="font-medium">⭐ {resData.info.avgRatingString} Rating</h5>
                <h5>🕒 {resData.info.sla.deliveryTime} Min</h5>
              </div>
          </div>
        </div>
      </article>
    )
  }

  export default ResCard;