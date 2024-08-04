import baseurl from "../api/baseUrl";

export const UseDelete = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseurl.delete(url, config);
  return res;
};
