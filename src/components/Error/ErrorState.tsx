import { Alert, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorState({ message, onRetry }: ErrorStateProps) {
  const { t } = useTranslation();

  return (
    <Alert
      severity="error"
      action={
        <Button color="inherit" size="small" onClick={onRetry}>
          {t("status.retry")}
        </Button>
      }
    >
      {t("status.error")}: {message}
    </Alert>
  );
}
