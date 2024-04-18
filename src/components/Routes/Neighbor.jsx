import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const Neighbor = () => {
  return (
    <div className="mb-10 border border-white box-border w-[95%] mx-auto">
      <h1 className="text-4xl text-center font-bold">
        Explore the Neighborhoods
      </h1>
      <div className="mb-10 flex justify-between gap-6">
        <div className="w-[95%] h-[200px] rounded-lg mx-auto my-10">
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
          <div className="border-l-2 border-r-2 border-b-2">
            <h1 className="text-2xl font-bold pl-2">Cleveland</h1>
            <div className="flex items-center gap-4">
              <p className="pl-2">icon</p>
              <p>
                <span className="text-xl font-semibold">Listings: </span>2
              </p>
            </div>
            <div className="flex items-center gap-4">
            <p className="pl-2">icon</p>
              <p>
                <span>Price:</span>$42,00 - $450,00
              </p>
            </div>
          </div>
        </div>
        <div className="w-[95%] h-[200px] rounded-lg mx-auto my-10">
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
          <div className="border-l-2 border-r-2 border-b-2">
            <h1 className="text-2xl font-bold pl-2">Los Angeles</h1>
            <div className="flex items-center gap-4">
            <p className="pl-2">icon</p>
              <p>
                <span className="text-xl font-semibold">Listings: </span>2
              </p>
            </div>
            <div className="flex items-center gap-4">
            <p className="pl-2">icon</p>
              <p>
                <span>Price:</span>$42,00 - $450,00
              </p>
            </div>
          </div>
        </div>
        <div className="w-[95%] h-[200px] rounded-lg mx-auto my-10">
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
          <div className="border-l-2 border-r-2 border-b-2">
            <h1 className="text-2xl font-bold pl-2">Las Vegas</h1>
            <div className="flex items-center gap-4">
            <p className="pl-2">icon</p>
              <p>
                <span className="text-xl font-semibold">Listings: </span>2
              </p>
            </div>
            <div className="flex items-center gap-4">
            <p className="pl-2">icon</p>
              <p>
                <span>Price:</span>$42,00 - $450,00
              </p>
            </div>
          </div>
        </div>
        <div className="w-[95%] h-[200px] rounded-lg mx-auto my-10">
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
          <div className="border-l-2 border-r-2 border-b-2">
            <h1 className="text-2xl font-bold pl-2">Philadephia</h1>
            <div className="flex items-center gap-4">
            <p className="pl-2">icon</p>
              <p>
                <span className="text-xl font-semibold">Listings: </span>2
              </p>
            </div>
            <div className="flex items-center gap-4">
            <p className="pl-2">icon</p>
              <p>
                <span>Price:</span>$42,00 - $450,00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neighbor;
