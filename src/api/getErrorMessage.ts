import axios from "axios";

export function getErrorMessage(error: unknown): string {
  if (axios.isCancel(error)) return "";

  if (axios.isAxiosError(error) && error.response) {
    return `HTTP ${error.response.status}`;
  }

  if (axios.isAxiosError(error) && error.request) {
    return "No response from server";
  }

  return "Unexpected error";
}
