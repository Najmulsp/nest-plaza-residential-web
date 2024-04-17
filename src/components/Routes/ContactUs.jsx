import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <div className="hero-content w-4/5">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold px-4 mt-6">
            Contact Now
          </h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea className="textarea border border-blue-950" name="" id="" cols="30" rows="5"></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
          

          <p className="p-8">
            
            <Link to="/" className="text-sky-300">
              Go to home
            </Link>
          </p>
          
        </div>
      </div>
      <h1 className="text-5xl text-center font-bold p-4 mt-6">
            Meet us in our office
          </h1>
      <div className="w-full h-[500px]">
        <MapContainer
          className="w-full h-full"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactUs;
