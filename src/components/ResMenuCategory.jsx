import ResMenuItemList from "./ResMenuItemList";

const ResMenuCategory = ({data, showItems, setShowItemsIndex}) => {
    const clickHandler = () => {
        setShowItemsIndex();
    }
    return(
        <div 
        className="bg-slate-300 w-8/12 my-5 mx-auto rounded-xl p-5 text-sm shadow-lg"
        >
            <section 
                onClick={clickHandler} 
                className="flex justify-between cursor-pointer"
            >
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>▽</span>
            </section>
            {/* conditional rendering */}
            {showItems && <ResMenuItemList menuItem={data.itemCards} />}
            
        </div>
    )
}


export default ResMenuCategory;