import { createContext } from "react";
import type { Expense } from "@/utils/types";

export type ExpensesContextValue = {
  expenses: Expense[];
  isLoading: boolean;
  error: string | null;
  refresh: () => void;
};

export const ExpensesContext = createContext<ExpensesContextValue | undefined>(
  undefined,
);
