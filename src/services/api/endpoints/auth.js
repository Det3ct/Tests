import axios from "../axios";

const endpoints = {
  registration: (data) => axios.post("api/register", data),
  login: (data) => axios.post("/api/login", data),
  forgotPassword: (data) => axios.post("/v1/auth/forgot/password", data),
  getProfile: () => axios.get("api/user"),
  updateProfile: (data) => axios.put("api/update", data),
};

export default endpoints;
