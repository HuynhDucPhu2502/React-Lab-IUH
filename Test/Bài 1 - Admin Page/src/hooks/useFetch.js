import { useEffect, useState } from "react";

const useFetch = (fetchFunction) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      setData(await fetchFunction());
      setIsLoading(false);
    };

    fetch();
  }, [fetchFunction]);

  return { data, isLoading };
};

export default useFetch;
