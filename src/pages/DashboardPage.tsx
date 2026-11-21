import ErrorState from "@/components/Error/ErrorState";
import LoadingState from "@/components/Loading/LoadingState";
import { useExpensesContext } from "@/hooks/useExpensesContext";
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function DashboardPage() {
  const { t } = useTranslation();
  const { expenses, isLoading, error, refresh } = useExpensesContext();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h2">
        {t("dashboard.title")}
      </Typography>

      {isLoading && <LoadingState />}
      {!isLoading && error && <ErrorState message={error} onRetry={refresh} />}
      {!isLoading && !error && (
        <Typography variant="h6">
          {t("dashboard.count", { count: expenses.length })}
        </Typography>
      )}
    </Container>
  );
}
