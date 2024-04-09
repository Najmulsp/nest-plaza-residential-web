import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import Estates from "./Estates";

const Home = () => {
  const estates = useLoaderData();
  console.log(estates);

  return (
    <div>
      <Helmet>
        <title>Nest Plaza/ Home</title>
      </Helmet>

      <Banner></Banner>
      <div className="grid border pl-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-10">
        {estates.map((estate) => (
          <Estates key={estate.id} estate={estate}></Estates>
        ))}
      </div>
    </div>
  );
};

export default Home;
