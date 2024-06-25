
const Shimmer = () => {
    const shimmerCards = Array.from({ length: 15 }, (_, index) => (
        <div 
            key={index} 
            className="bg-[rgb(255,255,255)] p-2 rounded-2xl h-[420px] mt-10"
        >
            <div className=" bg-slate-100 rounded-2xl object-cover h-60 w-full"></div>
            <div className="px-2 py-2 space-y-4">
                <h3 className="h-5 w-36 bg-slate-100 rounded-md"></h3>
                <h6 className="h-3 w-20 bg-slate-100 rounded-md"></h6>
                <div className="mt-2 flex justify-between font-semibold text-sm space-y-4">
                    <div className="space-y-8">
                        <p className="h-3 w-14 bg-slate-100 rounded-md"></p> 
                        <h4 className="h-3 w-16 bg-slate-100 rounded-md" ></h4>
                    </div>
                    <div className="space-y-2">
                        <h5 className="h-5 w-5 bg-slate-100 rounded-3xl"></h5>
                        <h5 className="h-3 w-10 bg-slate-100 rounded-md"></h5>
                    </div>
                </div>
            </div>
        </div>
    ));
    
    return (
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-5 p-16">
            {shimmerCards}
        </div>
    );
}

export default Shimmer;