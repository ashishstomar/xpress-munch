import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return(
        <div className="flex flex-col justify-center text-center h-screen font-bold text-3xl">
            <h1>{error.data}</h1>
            <h2>{error.status} {error.statusText}</h2>
            <p> ⛓️‍💥 😵 </p>
        </div>
    )
}

export default Error;