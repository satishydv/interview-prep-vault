import {useMemo} from "react";

const filteredProducts = useMemo(() => {
  return products.filter((product) => 
    product.name
  .toLowerCase()
  .includes(searchTerm.toLowerCase())
  );
}, [products, searchTerm]);