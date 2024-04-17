import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Estates = ({ estate }) => {
  const {
    image,
    estate_title,
    description,
    id,
    location,
    status,
    price,
    segment_name,
  } = estate;

  return (
    
      <div>
        <div
          className="rounded-xl card w-80 bg-base-100 shadow-xl box-border"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          
        >
          <figure className="rounded-xl">
            <img className=" object-cover" src={image} alt="Shoes" />
          </figure>
          <div className="px-3 py-3 space-y-3">
            <p className="text-right">{segment_name}</p>
            <h2 className="card-title">{estate_title}</h2>
            {/* <p><span className='underline'>Description: </span>{description}</p> */}
            {description.length > 200 ? (
              <p>{description.slice(0, 150)}...</p>
            ) : (
              <p>{description}</p>
            )}
            <div className="">
              <p className="font-semibold text-xl">
                <span className="text-lg">Location:</span> {location}
              </p>
              <p className="font-semibold ">Status: {status}</p>
            </div>

            <div className="card-actions justify-between items-center">
              <p className="font-bold text-xl">
                <span className="text-lg font-semibold">Price: </span> {price}
              </p>
              <Link to={`/estate/${id}`}>
                <button className="btn btn-primary">View Property</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    
  );
};

Estates.propTypes = {
  estate: PropTypes.object,
};
export default Estates;
