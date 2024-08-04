import baseurl from "../api/baseUrl";

export const UseUpdata = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseurl.put(url, params, config);

  return res;
};
