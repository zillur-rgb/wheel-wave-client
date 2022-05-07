import axios from "axios";
import { useEffect, useState } from "react";

const useGoodsHook = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    axios
      .get("https://desolate-gorge-47759.herokuapp.com/api/goods")
      .then((res) => {
        setGoods(res.data);
      });
  }, [goods]);
  // goods
  return [goods, setGoods];
};

export default useGoodsHook;
