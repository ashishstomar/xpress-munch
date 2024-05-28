import { CDN_URL } from "../common/constants";

const ResCard = (props) => {
    const { resData } = props;
  
    return (
      <article className="cardWrap" >
        <img 
          className="cardImg" 
          src= { CDN_URL +resData.info.cloudinaryImageId}
        />
        <h3>{resData.info.name}</h3>
        <h5>{resData.info.cuisines.join(', ')}</h5>
        <p>{resData.info.areaName}</p> 
        <div className="cardInfo">
          <h3 className="price" >{resData.info.costForTwo}</h3>
            <div className="cardInfo-Bottom">
              <h4>Rating {resData.info.avgRatingString}</h4>
              <h5>{resData.info.sla.deliveryTime} Min</h5>
            </div>
        </div>
      </article>
    )
  }

  export default ResCard;