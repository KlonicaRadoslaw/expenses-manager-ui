import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const EmptyBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  border: `1px dashed ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.text.secondary,
  textAlign: "center",
}));

export default function EmptyExpenses() {
  const { t } = useTranslation();

  return <EmptyBox>{t("list.empty")}</EmptyBox>;
}
