import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      setIsLoading(true);
      await fetch(url)
        .then((res) => res.json())
        .then((rawData) => setData(rawData))
        .catch((err) => console.log(err));
      setIsLoading(false);
    };

    doFetch();
  }, [url]);

  return { isLoading, data };
};

export default useFetch;
