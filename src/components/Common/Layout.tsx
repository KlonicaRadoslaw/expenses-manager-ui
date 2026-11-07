import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher";

export default function Layout() {
  const { t } = useTranslation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ mr: 4 }}>
            {t("header")}
          </Typography>

          <Box component="nav" sx={{ display: "flex", gap: 1, flexGrow: 1 }}>
            <Button component={Link} to="/" color="inherit">
              {t("nav.dashboard")}
            </Button>
            <Button component={Link} to="/expenses" color="inherit">
              {t("nav.expenses")}
            </Button>
            <Button component={Link} to="/summary" color="inherit">
              {t("nav.summary")}
            </Button>
          </Box>

          <LanguageSwitcher />
        </Toolbar>
      </AppBar>

      <main>
        <Outlet />
      </main>
    </>
  );
}
