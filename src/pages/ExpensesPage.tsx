import ExpenseForm from "@/components/ExpensePage/ExpenseForm";
import ExpenseList from "@/components/ExpensePage/ExpenseList";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";
import type { ExpenseFormValues } from "@/utils/expenseSchema";
import type { Expense } from "@/utils/types";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ExpensesPage() {
  const { t } = useTranslation();
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAdd = (values: ExpenseFormValues) => {
    setExpenses((prev) => [...prev, { id: crypto.randomUUID(), ...values }]);
  };

  return (
    <div>
      <h1>{t("header")}</h1>
      <LanguageSwitcher />
      <ExpenseForm onAdd={handleAdd} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}
