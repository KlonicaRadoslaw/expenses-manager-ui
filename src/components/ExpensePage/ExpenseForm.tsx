import { expenseSchema, type ExpenseFormValues } from "@/utils/expenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface ExpenseFormProps {
  onAdd: (values: ExpenseFormValues) => void;
}

export default function ExpenseForm({ onAdd }: ExpenseFormProps) {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormValues>({
    resolver: zodResolver(expenseSchema),
    defaultValues: { title: "", category: "" },
  });

  const onSubmit = (values: ExpenseFormValues) => {
    onAdd(values);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: "30%", marginBottom: "20px" }}
    >
      <Stack spacing={2}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t("form.title")}
              error={!!errors.title}
              helperText={errors.title?.message ? t(errors.title.message) : " "}
            />
          )}
        />
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t("form.amount")}
              type="number"
              error={!!errors.amount}
              helperText={
                errors.amount?.message ? t(errors.amount.message) : " "
              }
              value={field.value ?? ""}
              onChange={(e) =>
                field.onChange(
                  e.target.value === "" ? undefined : Number(e.target.value),
                )
              }
            />
          )}
        />
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t("form.category")}
              error={!!errors.category}
              helperText={
                errors.category?.message ? t(errors.category.message) : " "
              }
            />
          )}
        />
        <Button type="submit" variant="contained">
          {t("form.add")}
        </Button>
      </Stack>
    </form>
  );
}
