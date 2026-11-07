import axios from "axios";
import { mockAdapter } from "@/api/mockAdapter";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10_000,
  adapter: mockAdapter,
});
