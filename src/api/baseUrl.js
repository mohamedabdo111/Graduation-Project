import axios from "axios";

const baseurl = axios.create({
  baseURL: "https://bettercallhome1.runasp.net/api/",
});

export default baseurl;
