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
    <table style={{ borderCollapse: "collapse", width: "50%" }}>
      <thead>
        <tr>
          <th style={{ textAlign: "left" }}>{t("form.title")}</th>
          <th style={{ textAlign: "left" }}>{t("form.category")}</th>
          <th style={{ textAlign: "right" }}>{t("form.amount")}</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.title}</td>
            <td>{expense.category}</td>
            <td style={{ textAlign: "right" }}>{expense.amount.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
