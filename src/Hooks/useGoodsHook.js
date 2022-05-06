import axios from "axios";
import { useEffect, useState } from "react";

const useGoodsHook = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/goods").then((res) => {
      setGoods(res.data);
    });
  }, [goods]);

  return [goods, setGoods];
};

export default useGoodsHook;
