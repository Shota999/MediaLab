const BASE_URL = "https://medialab-api.leavingstone.club/api/";

export const fetcher = async (path) => {
  try {
    const data = await fetch(BASE_URL + path);
    const res = await data.json();
    return res;
  } catch (e) {
    return e;
  }
};
