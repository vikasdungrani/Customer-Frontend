// src/libs/axios.ts
import axios from "axios";
import { getCookie } from "@/libs/cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

const instance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // ❗ IMPORTANT: do NOT mix cookies + Authorization header
});

/* -----------------------------
   🔑 Attach Access Token
--------------------------------*/
instance.interceptors.request.use(
  (config) => {
    const access = getCookie("access_token"); // your real cookie name
    const token = getCookie("access_token");
    console.log("🔐 Sending request to:", config.url);
    console.log("🔐 Token found:", token ? "YES" : "NO");

    if (access) {
      config.headers.Authorization = `Bearer ${access}`; // correct place
      console.log("🔐 Added Authorization header:", config.headers.Authorization);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* -----------------------------
   🔄 Auto Refresh Token Logic
--------------------------------*/
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If access token expired → refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh = getCookie("refresh_token"); // ❗ use refresh token

      if (refresh) {
        try {
          const { data } = await axios.post(`${API_URL}/api/token/refresh/`, {
            refresh,
          });

          // Save new access token
          document.cookie = `access_token=${data.access}; path=/;`;

          // Retry request with new token
          originalRequest.headers.Authorization = `Bearer ${data.access}`;
          return instance(originalRequest);

        } catch (e) {
          console.error("Refresh token failed", e);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
