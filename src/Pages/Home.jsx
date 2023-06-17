import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
// import { products } from "../products";
import { useDataContext } from "../DataContextProvider";

const Home = () => {
  const {products} =useDataContext()
  const currentlyReading = products.filter(
    ({ shelf }) => shelf === "currently reading"
  );
  const wantToRead = products.filter(({ shelf }) => shelf === "want to read");
  const read = products.filter(({ shelf }) => shelf === "read");

  return (
    <div className="home-page">
      <div className="navbar">
        <div className="header">Books</div>
         <Link to="/search">Search Page</Link> 
      </div>
      <div className="product-list">
        <div className="product-container">
          <h3>Currently Reading</h3>
          <div className="currently-reading">
            {currentlyReading.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="product-container">
          <h3>Want To Read</h3>
          <div className="want-to-read">
            {wantToRead.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="product-container">
          <h3>Read</h3>
          <div className="read">
            {read.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
