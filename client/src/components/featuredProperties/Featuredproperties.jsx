import { useEffect } from "react";
import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error} = useFetch('/hotels?featured=true&limit=4');

  return (
    <div className="fp">
      {loading ? "loading" : <>
      {data.map((item) => <div className="fpItem" key={item._id}>
        <img
        src={item.photos[0]}
          alt=""
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>}
      </div>)}
      <div className="fpItem">
        <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/324244371.jpg?k=907625a1946744783b301ffb94e0fe4292e3d366e6cc6c8474df7296ea14abb0&o=&hp=1"
        alt="jkiaSeasons"
          className="fpImg"
        />
        <span className="fpName"> Kozi Suites Airport</span>
        <span className="fpCity">Austin</span>
        <span className="fpPrice">Starting from $140</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      </>}
    </div>
  );
};

export default FeaturedProperties;