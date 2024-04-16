import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Properties = () => {
  const { id } = useParams();
  const properties = useLoaderData();
  const idInt = parseInt(id);

  const property = properties.find((property) => property.id === idInt);
  console.log(property);
  return (
    <div className="">
      <div className=" w-full mx-auto ">
        <div className="w-4/5 md:w3/5 lg:w-2/5 mx-auto py-6 bg-base-100 shadow-xl">
          <figure>
            <img className="w-full" src={property.image} alt="Property image" />
          </figure>
          <div className="p-4">
            <h2 className="font-bold">{property.estate_title}</h2>
            <p><span className="underline">Description: </span>{property.description}</p>
            <p className="font-bold">Area: {property.area}</p>
            <p><span className="font-bold">Facilities: </span>{property.facilities}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
