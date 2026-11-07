import { expensesService } from "@/api/services/expenseService";
import ErrorState from "@/components/Error/ErrorState";
import EmptyExpenses from "@/components/ExpensePage/ExpenseEmpty";
import ExpenseForm from "@/components/ExpensePage/ExpenseForm";
import LoadingState from "@/components/Loading/LoadingState";
import { useExpenses } from "@/hooks/useExpenses";
import type { ExpenseFormValues } from "@/utils/expenseSchema";
import { Box, Container } from "@mui/material";

export default function ExpensesPage() {
  const { expenses, isLoading, error, refresh } = useExpenses();

  const handleAdd = (values: ExpenseFormValues) => {
    expensesService.create(values);
    refresh();
  };

  const renderContent = () => {
    if (isLoading) return <LoadingState />;
    if (error) return <ErrorState message={error} onRetry={refresh} />;
    if (expenses.length === 0) return <EmptyExpenses />;
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

        <Box sx={{ flexGrow: 1, width: "100%" }}>{renderContent()}</Box>
      </Box>
    </Container>
  );
}
