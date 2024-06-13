const Shimmer = () => {
    const shimmerCards = Array.from({ length: 15 }, (_, index) => (
        <div key={index} className="bg-[rgb(224,224,224)] p-2 rounded-2xl h-[420px] mt-10"></div>
    ));
    
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5">
            {shimmerCards}
        </div>
    );
}

export default Shimmer;