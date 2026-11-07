import { apiClient } from "@/api/apiClient";
import type { Expense } from "@/utils/types";

export const expensesService = {
  getAll: (signal?: AbortSignal) =>
    apiClient.get<Expense[]>("/expenses", { signal }),

  create: (data: Omit<Expense, "id">) =>
    apiClient.post<Expense>("/expenses", data),
};
