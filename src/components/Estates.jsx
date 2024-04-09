
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Estates = ({estate}) => {
 const {image, estate_title, description, id} = estate


  return (
    <div >
      {/* <p className="text-center py-3">Explore your options to find your perfect match</p> */}
      
        
        <div >
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{estate_title}</h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <Link to={`/estate/${id}`}>
                <button className="btn btn-primary">View Property</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

Estates.propTypes = {
  estate: PropTypes.object,
}
export default Estates;
