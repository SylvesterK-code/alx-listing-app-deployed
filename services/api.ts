import axios from "axios";

// Create an Axios instance with baseURL from env
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Example function to fetch properties
export const fetchProperties = async () => {
  const response = await api.get("/properties");
  return response.data;
};

// Example function to fetch a single property by ID
export const fetchPropertyById = async (id: string | number) => {
  const response = await api.get(`/properties/${id}`);
  return response.data;
};
