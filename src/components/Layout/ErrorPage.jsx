// import { useRouterError} from "react-router-dom"

import { Link } from "react-router-dom";

const ErrorPage = () => {
    // const error = useRouterError();
    return (
        <div className="text-center ">
            <h2 className="text-5xl mt-40 font-extrabold">Oops!!!</h2>
            <h3 className="my-4 text-2xl">Page Not Found</h3>
            <Link to="/" className="text-blue-500 ">Click here to go back</Link>
            {/* <p>{ error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <Link to="/" className="text-blue-500">Click here to go back</Link>
                </div>
            } */}

        </div>
    );
};

export default ErrorPage;