import axios, { type AxiosResponse } from "axios";
import { mapToApiResponse } from "@/api/mapToApiResponse";
import type { ApiResponse } from "@/api/types";

export async function request<T>(
  call: () => Promise<AxiosResponse<ApiResponse<T>>>,
): Promise<ApiResponse<T>> {
  try {
    const response = await call();
    return mapToApiResponse(response.data, response.status);
  } catch (error: unknown) {
    if (axios.isCancel(error)) throw error;

    if (axios.isAxiosError<ApiResponse<T>>(error)) {
      if (error.response) {
        return mapToApiResponse(error.response.data, error.response.status);
      }
      return mapToApiResponse<T>(
        { message: "Nie udało się nawiązać połączenia z serwerem" },
        0,
      );
    }
    throw error;
  }
}
