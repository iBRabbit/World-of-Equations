import { useEffect, useState } from "react";
import axiosInstance
 from "../api/axiosConfig";
const useFetchData = (url, token) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.post(url, {}, {
          headers: {
            token: token,
          },
        });

        setData(response.data);
      } catch (error) {
        console.error(`Error fetching data from ${url}`, error);
        setError(`Failed to fetch data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, token]);

  return { data, loading, error };
};

export default useFetchData;
