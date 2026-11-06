import ExpenseForm from "@/components/ExpensePage/ExpenseForm";
import ExpenseList from "@/components/ExpensePage/ExpenseList";
import type { ExpenseFormValues } from "@/utils/expenseSchema";
import type { Expense } from "@/utils/types";
import { Box, Container } from "@mui/material";
import { useState } from "react";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const handleAdd = (values: ExpenseFormValues) => {
    setExpenses((prev) => [...prev, { id: crypto.randomUUID(), ...values }]);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: 360 }, flexShrink: 0 }}>
          <ExpenseForm onAdd={handleAdd} />
        </Box>

        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <ExpenseList expenses={expenses} />
        </Box>
      </Box>
    </Container>
  );
}
