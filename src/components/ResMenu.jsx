import Shimmer from './Shimmer';
import { CDN_URL } from "../common/constants";
import { useParams } from 'react-router-dom';
import useResMenu from '../common/useResMenu';
import ResMenuCategory from "./ResMenuCategory"
import { useState } from 'react';

const ResMenu = () => {
    const {resId} = useParams();
    const resInfo = useResMenu(resId);
    const [showItemsIndex, setShowItemsIndex] = useState(null)

    if(resInfo === null) {
        return(
            < Shimmer />
        )
    }

    const { name, cuisines, costForTwoMessage, isOpen, avgRating, cloudinaryImageId } = resInfo.cards[2].card.card.info;
        
    const menuCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat) =>
            cat.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    return(
        <div>
            <section className="flex h-98 bg-slate-100 mt-16 rounded-3xl w-8/12 mx-auto">
                <div>
                    <img className="h-64 rounded-s-3xl object-cover" src={CDN_URL +cloudinaryImageId} />
                </div>
                <div className="text-3xl pt-5 ml-14">
                    <h1 className="font-bold">{name}</h1>
                    <p>{cuisines.join(',')}</p>
                    <h4 className='text-2xl mt-5'>{costForTwoMessage} 🍽️</h4>
                    <h6 className='text-2xl'>Currently {isOpen? "Open": "Closed"}</h6>
                    <h3 className='text-2xl font-semibold'>{avgRating} ⭐</h3>
                </div>
            </section>
            <main className="text-xl text-center mb-80">
                {menuCategory.map((cat, index) => (
                    // controlled component
                    <ResMenuCategory 
                        key={cat?.card?.card?.title} 
                        data={cat?.card?.card}  
                        showItems={index === showItemsIndex && true}
                        setShowItemsIndex = {() => {
                            setShowItemsIndex(prevIndex => (prevIndex === index ? -1 : index))
                        }}
                    />
                ))}
            </main>
        </div>
    )
};

export default ResMenu;