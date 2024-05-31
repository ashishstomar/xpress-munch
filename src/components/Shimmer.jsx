const Shimmer = () => {
    const shimmerCards = Array.from({ length: 15 }, (_, index) => (
        <div key={index} className="shimmer-card"></div>
    ));
    
    return (
        <div className="shimmer-wrap">
            {shimmerCards}
        </div>
    );
}

export default Shimmer;