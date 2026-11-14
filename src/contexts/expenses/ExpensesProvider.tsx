import type { ReactNode } from "react";
import { useExpenses } from "@/hooks/useExpenses";
import { ExpensesContext } from "@/contexts/expenses/ExpensesContext";

export function ExpensesProvider({ children }: { children: ReactNode }) {
  const expensesState = useExpenses();

  return <ExpensesContext value={expensesState}>{children}</ExpensesContext>;
}
