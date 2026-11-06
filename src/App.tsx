import ExpensesPage from "@/pages/ExpensesPage";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {t("header")}
          </Typography>
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
      <ExpensesPage />
    </>
  );
}

export default App;
