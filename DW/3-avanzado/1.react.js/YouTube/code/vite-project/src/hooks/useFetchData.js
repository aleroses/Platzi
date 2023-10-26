import React, { useEffect, useState } from "react";
import { fetchdata } from "../helpers/fetchData";

const useFetchData = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const { data, isLoading } = await fetchdata(
      endPoint
    );
    setData(data);
    setIsLoading(isLoading);
  };

  /* Si el endPoint cambia el useEffect se vuelve a ejecutar */
  useEffect(() => {
    getData();
    /* fetchdata(endPoint).then((res) => {
      setData(res.data);
      setIsLoading(res.isLoading);
    }); */
  }, [endPoint]);

  return {
    data,
    isLoading,
  };
};

export { useFetchData };
/* rafc 

2:58:08 
*/
