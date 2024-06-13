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
            <section className="flex h-98 bg-slate-300 m-10 rounded-2xl">
                <div>
                    <img className="h-96 rounded-2xl" src={CDN_URL +cloudinaryImageId} />
                </div>
                <div className="text-3xl pt-5 ml-5">
                    <h1 className="font-bold">{name}</h1>
                    <p>{cuisines.join(',')}</p>
                    <h4 className='text-2xl mt-5'>{costForTwoMessage} 🍽️</h4>
                    <h6 className='text-2xl'>Currently {isOpen? "Open": "Closed"}</h6>
                    <h3 className='text-2xl font-semibold'>{avgRating} ⭐</h3>
                </div>
            </section>
            <article className="ml-10 text-xl">
                <h2 className='font-bold text-3xl mb-3'>Menu</h2>
                <ul>
                    {itemCards.map((item) => (
                        <li key = {item.card.info.id}>
                             {item.card.info.name} : <span className='font-semibold'>₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    )
};

export default ResMenu;