import axios from "axios";
const devURL = "http://localhost:3000/api/v1";
const productionUrl =
  "https://e-learning-backend-application.onrender.com/api/v1";

export const customFetch = axios.create({
  baseURL: devURL,
});
