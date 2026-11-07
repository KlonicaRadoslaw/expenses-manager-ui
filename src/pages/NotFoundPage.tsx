import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h2">
        {t("notFound.title")}
      </Typography>
      <Button component={Link} to="/" variant="contained">
        {t("notFound.back")}
      </Button>
    </Container>
  );
}
