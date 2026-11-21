import { useMemo } from "react";
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ErrorState from "@/components/Error/ErrorState";
import LoadingState from "@/components/Loading/LoadingState";
import { useExpensesContext } from "@/hooks/useExpensesContext";

export default function SummaryPage() {
  const { t } = useTranslation();
  const { expenses, isLoading, error, refresh } = useExpensesContext();

  const total = useMemo(
    () => expenses.reduce((sum, item) => sum + item.amount, 0),
    [expenses],
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h2">
        {t("summary.title")}
      </Typography>

      {isLoading && <LoadingState />}
      {!isLoading && error && <ErrorState message={error} onRetry={refresh} />}
      {!isLoading && !error && (
        <Typography variant="h6">
          {t("summary.total", { total: total.toFixed(2) })}
        </Typography>
      )}
    </Container>
  );
}
