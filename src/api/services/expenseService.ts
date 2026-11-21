import { apiClient } from "@/api/apiClient";
import type { Expense } from "@/utils/types";
import { request } from "@/api/request";
import type { ApiResponse } from "@/api/types";

export const expensesService = {
  getAll: (signal?: AbortSignal) =>
    request<Expense[]>(() =>
      apiClient.get<ApiResponse<Expense[]>>("/expenses", { signal }),
    ),

  create: (data: Omit<Expense, "id">) =>
    request<Expense>(() =>
      apiClient.post<ApiResponse<Expense>>("/expenses", data),
    ),
};
