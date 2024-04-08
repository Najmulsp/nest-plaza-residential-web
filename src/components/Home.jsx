import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Nest Plaza/ Home</title>
      </Helmet>

      <Banner></Banner>
    </div>
  );
};

export default Home;
