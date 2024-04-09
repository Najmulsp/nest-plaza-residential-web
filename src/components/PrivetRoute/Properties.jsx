import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";


const Properties = () => {
    const {id} = useParams();
    const properties = useLoaderData();
    console.log(properties);
    return (
        <div>
            <h2>dove</h2>
            <p>{id}</p>
        </div>
    );
};

export default Properties;
