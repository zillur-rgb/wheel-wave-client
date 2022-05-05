import axios from "axios";
import { useEffect, useState } from "react";

const useProductsHook = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return [products, setProducts];
};

export default useProductsHook;
