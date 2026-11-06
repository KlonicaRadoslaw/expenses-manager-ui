import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <ToggleButtonGroup
      size="small"
      exclusive
      value={i18n.resolvedLanguage}
      onChange={(_, lng: string) => {
        void i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
      }}
      sx={{
        "& .MuiToggleButton-root": {
          color: "primary.contrastText",
          borderColor: "primary.contrastText",
        },
        "& .Mui-selected": {
          backgroundColor: "rgba(255, 255, 255, 0.25) !important",
        },
      }}
    >
      <ToggleButton value="pl">PL</ToggleButton>
      <ToggleButton value="en">EN</ToggleButton>
    </ToggleButtonGroup>
  );
}
