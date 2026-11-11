import { getErrorMessage } from "@/api/getErrorMessage";
import { expensesService } from "@/api/services/expenseService";
import type { Expense } from "@/utils/types";
import { useCallback, useEffect, useState } from "react";

export function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = useCallback(() => {
    setRefreshKey((key) => key + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    setError(null);

    expensesService
      .getAll(controller.signal)
      .then(({ data }) => setExpenses(data))
      .catch((err: unknown) => {
        if (!controller.signal.aborted) setError(getErrorMessage(err));
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    return () => controller.abort();
  }, [refreshKey]);

  return { expenses, isLoading, error, refresh };
}
