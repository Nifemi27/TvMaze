import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function search() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(location.search);
  const queryParams = query.get("q");

  useEffect(() => {
    const getSearch = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${queryParams}`
        );
        setData(res.data);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }, 600);
    return () => clearTimeout(getSearch);
  }, [queryParams]);
  console.log("searchresult", data);
  return <div>search</div>;
}
