import baseurl from "../api/baseUrl";

export const UsePostDate = async (url, params) => {
  const res = await baseurl.post(url, params);

  return res;
};

export const UsePostDateWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const res = await baseurl.post(url, params, config);

  return res;
};
export const UsePostDateWithOutImage = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const res = await baseurl.post(url, params, config);

  return res;
};
