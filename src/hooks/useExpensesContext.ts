import { useContext } from "react";
import { ExpensesContext } from "@/contexts/expenses/ExpensesContext";

export function useExpensesContext() {
  const context = useContext(ExpensesContext);

  if (context === undefined) {
    throw new Error("useExpensesContext wymaga ExpensesProvider");
  }

  return context;
}
