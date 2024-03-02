import axios from "axios";
import { API_URL, DEFAULT_HEADER } from "../lib/constants";

export const getVisitor = async (lat = null, long = null) => {
  try {
    const { data } = await axios.get(
      `${API_URL}/api/zimomeet_app/news-visitors?lat=${lat}&lng=${long}`,
      {
        headers: DEFAULT_HEADER,
      }

    );
    localStorage.setItem("visitor", JSON.stringify(data));
    return data;
  } catch (error) {
    console.log('error while fetching visitor')
  }
}