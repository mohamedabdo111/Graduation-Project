import baseurl from "../api/baseUrl";

export const UseGetDate = async (url, params) => {
  const res = baseurl.get(url, params);

  return res;
};

export const UseGetDataToken = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const res = baseurl.get(url, config);

  return res;
};
