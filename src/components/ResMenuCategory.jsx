import ResMenuItemList from "./ResMenuItemList";
import { useState } from "react";

const ResMenuCategory = ({data}) => {
    const [showItems, setShowItems] = useState(false)
    return(
        <div 
        className="bg-slate-300 w-8/12 my-5 mx-auto rounded-xl p-5 text-sm shadow-lg"
        >
            <section 
                onClick={() => setShowItems(!showItems)} 
                className="flex justify-between cursor-pointer"
            >
                <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>▽</span>
            </section>
            {showItems && <ResMenuItemList menuItem={data.itemCards} />}
            
        </div>
    )
}


export default ResMenuCategory;