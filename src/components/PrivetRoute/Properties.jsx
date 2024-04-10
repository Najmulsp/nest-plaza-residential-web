import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Properties = () => {
  const { id } = useParams();
  const properties = useLoaderData();
  const idInt = parseInt(id);

  const property = properties.find((property) => property.id === idInt);
  console.log(property);
  return (
    <div className="text-center">
      <div className=" border ">
        <div className="card w-96 mx-auto py-6 bg-base-100 shadow-xl">
          <figure>
            <img src={property.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{property.estate_title}</h2>
            <p>{property.description}</p>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
