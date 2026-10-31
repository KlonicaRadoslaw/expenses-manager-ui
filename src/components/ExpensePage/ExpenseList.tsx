import type { Expense } from "@/utils/types";
import { useTranslation } from "react-i18next";

interface ExpenseListProps {
  expenses: Expense[];
}

export default function ExpenseList({ expenses }: ExpenseListProps) {
  const { t } = useTranslation();

  if (expenses.length === 0) {
    return <p>{t("list.empty")}</p>;
  }

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.title} ({expense.category}): {expense.amount.toFixed(2)}
        </li>
      ))}
    </ul>
  );
}
