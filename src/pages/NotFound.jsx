import { useEffect } from "react";
import { client } from "../libs/api";

const NotFound = () => {
  const fetchData = async () => {
    try {
      const res = await client.get("api/article/list");
      console.log(`res`, res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>NotFound</div>;
};

export default NotFound;
