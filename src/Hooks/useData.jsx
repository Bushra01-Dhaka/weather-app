import { useEffect, useState } from "react";

const useData = () => {
  const [wdata, setWdata] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setWdata(data);
        setLoading(false);
      });
  }, []);
  return [wdata, loading];
};

export default useData;
