import axios from "axios";
import { getDataFromStorage } from "./localStorage.util";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      config.headers = {
        ...config.headers,
        "Accept-Language": "en",
      };
      const token = getDataFromStorage("token");

      if (token) {
        config.headers = {
          ...config.headers,
          "Accept-Language": "en",
          Authorization: `Bearer ${token}`,
        };
      }
    } // SSR Cookie will be used per request
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
