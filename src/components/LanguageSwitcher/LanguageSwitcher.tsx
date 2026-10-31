import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <ToggleButtonGroup
      size="small"
      value={i18n.resolvedLanguage}
      onChange={(_, lng: string) => {
        void i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
      }}
    >
      <ToggleButton value="pl">PL</ToggleButton>
      <ToggleButton value="en">EN</ToggleButton>
    </ToggleButtonGroup>
  );
}
