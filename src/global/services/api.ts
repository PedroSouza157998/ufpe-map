import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env["NEXT_PUBLIC_API_URL"]}`
});

// Ações pré-requisições
axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    const token = sessionStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
