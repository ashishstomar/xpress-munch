import Shimmer from './Shimmer';
import { CDN_URL } from "../common/constants";
import { useParams } from 'react-router-dom';
import useResMenu from '../common/useResMenu';

const ResMenu = () => {
    const {resId} = useParams();

    const resInfo = useResMenu(resId);

    if(resInfo === null) {
        return(
            < Shimmer />
        )
    }

    const { name, cuisines, costForTwoMessage, isOpen, avgRating, cloudinaryImageId } = resInfo.cards[2].card.card.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 
        ?? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]
    return(
        <div>
            <section className="banner">
                <div>
                    <img className="banner-img" src={CDN_URL +cloudinaryImageId} />
                </div>
                <div className="banner-info">
                    <h1 className="res-title">{name}</h1>
                    <p>{cuisines.join(',')}</p>
                    <h4>{costForTwoMessage} 🍽️</h4>
                    <h6>Currently {isOpen? "Open": "Closed"}</h6>
                    <h3>{avgRating} ⭐</h3>
                </div>
            </section>
            <article className="menu-wrap">
                <h2>Menu</h2>
                <ul className="menu-list">
                    {itemCards.map((item) => (
                        <li key = {item.card.info.id}>
                             {item.card.info.name} : ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    )
};

export default ResMenu;