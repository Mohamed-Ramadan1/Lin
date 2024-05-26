import { useState, useEffect } from "react";
import { customFetch } from "../utils/customFetch";

const useFetchData = (endpoint, options = {}) => {
  const {
    method = "get",
    params = {},
    headers = {},
    initialData = [],
  } = options;
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMorePages, setIsMorePages] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await customFetch[method](endpoint, { headers, params });
      if (response.data.data) {
        setData(response.data.data.usersNotes);
        setIsMorePages(response.data.data.usersNotes.length === params.limit);
      } else {
        setData([]);
        setIsMorePages(false);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response ? err.response.data.message : err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, isMorePages, fetchData };
};

export default useFetchData;
