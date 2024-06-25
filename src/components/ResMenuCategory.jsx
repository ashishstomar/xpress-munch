import ResMenuItemList from "./ResMenuItemList";

const ResMenuCategory = ({data, showItems, setShowItemsIndex}) => {
    const clickHandler = () => {
        setShowItemsIndex();
    }

    return(
        <div 
        className="bg-gray-50 w-8/12 my-5 mx-auto rounded-xl py-3 px-5 text-lg shadow-md"
        >
            <section 
                onClick={clickHandler} 
                className="flex justify-between items-center cursor-pointer"
            >
                <span className="font-bold text-">{data.title} ({data.itemCards.length})</span>
                <span>▽</span>
            </section>
            {/* conditional rendering using Short-Circuit Evaluation */}
            {showItems && <ResMenuItemList menuItem={data.itemCards} />}
            
        </div>
    )
}


export default ResMenuCategory;