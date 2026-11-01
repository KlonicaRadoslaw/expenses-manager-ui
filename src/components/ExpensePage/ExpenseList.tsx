import type { Expense } from "@/utils/types";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

interface ExpenseListProps {
  expenses: Expense[];
}

export default function ExpenseList({ expenses }: ExpenseListProps) {
  const { t } = useTranslation();

  if (expenses.length === 0) {
    return <Typography color="text.secondary">{t("list.empty")}</Typography>;
  }

  return (
    <TableContainer sx={{ width: "50%" }} component={Paper} variant="outlined">
      <Table size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "action.hover" }}>
            <TableCell>{t("form.title")}</TableCell>
            <TableCell>{t("form.category")}</TableCell>
            <TableCell>{t("form.amount")}</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id} hover>
              <TableCell>{expense.title}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell align="right">{expense.amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow
            sx={{
              "& td": {
                borderTop: "2px solid",
                borderTopColor: "text.primary",
                borderBottom: "none",
                fontWeight: "bold",
              },
            }}
          >
            <TableCell />
            <TableCell>{t("form.sum")}</TableCell>
            <TableCell align="right">
              {expenses
                .reduce((sum, expense) => sum + expense.amount, 0)
                .toFixed(2)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
