import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { products } from "../products";
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState('');
  const [filtered, setFiltered]=useState({})

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setFiltered(products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())));
  };

 

  
  return (
    <div className="search-page">
      <Link to='/'>Home</Link>
      <div className="search-input">
        <input
          type="search"
          className="search-input"
          value={search}
          placeholder="search..."
          onChange={(e) => handleSearchChange(e)}
        />{" "}
      </div>
      <div className="search-page-list">
  {filtered.length > 0
    ? filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    : products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
</div>

    </div>
  );
};

export default Search;
