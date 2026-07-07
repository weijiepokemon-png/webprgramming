import { useState } from "react";

function SearchBar({ setProducts }) {
  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3001/api/inft3050/Product?limit=500"
      );

      const data = await response.json();

      console.log("API Response:", data);

      if (!data.list) {
        alert("No products returned from API.");
        return;
      }

      let filteredProducts = data.list;

      if (search.trim() !== "") {
        filteredProducts = data.list.filter((product) => {
          const name = product.Name
            ? product.Name.toLowerCase()
            : "";

          const author = product.Author
            ? product.Author.toLowerCase()
            : "";

          return (
            name.includes(search.toLowerCase()) ||
            author.includes(search.toLowerCase())
          );
        });
      }

      console.log("Filtered:", filteredProducts);

      setProducts(filteredProducts.map((product) => product.ID));

      if (filteredProducts.length === 0) {
        alert("No matching products found.");
      }

    } catch (error) {
      console.error(error);
      alert("Unable to connect to the backend.");
    }
  };

  return (
    <form onSubmit={handleSearch}>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit">
        Search
      </button>

    </form>
  );
}

export default SearchBar;