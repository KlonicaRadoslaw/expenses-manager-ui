import { expenseSchema, type ExpenseFormValues } from "@/utils/expenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface ExpenseFormProps {
  onAdd: (values: ExpenseFormValues) => void;
}

const fieldStyle = { marginBottom: 12 };
const labelStyle = { display: "block", marginBottom: 4 };
const inputStyle = {
  width: "100%",
  padding: 6,
  boxSizing: "border-box" as const,
};
const errorStyle = { color: "crimson", fontSize: 13, margin: "4px 0 0" };

export default function ExpenseForm({ onAdd }: ExpenseFormProps) {
  const { t } = useTranslation();
  const {
    register,
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
      noValidate
      style={{ maxWidth: 400 }}
    >
      <div style={fieldStyle}>
        <label htmlFor="title" style={labelStyle}>
          {t("form.title")}
        </label>
        <input id="title" style={inputStyle} {...register("title")} />
        {errors.title && (
          <p style={errorStyle}>{t(errors.title.message as string)}</p>
        )}
      </div>

      <div style={fieldStyle}>
        <label htmlFor="amount" style={labelStyle}>
          {t("form.amount")}
        </label>
        <input
          id="amount"
          type="number"
          step="any"
          style={inputStyle}
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p style={errorStyle}>{t(errors.amount.message as string)}</p>
        )}
      </div>

      <div style={fieldStyle}>
        <label htmlFor="category" style={labelStyle}>
          {t("form.category")}
        </label>
        <input id="category" style={inputStyle} {...register("category")} />
        {errors.category && (
          <p style={errorStyle}>{t(errors.category.message as string)}</p>
        )}
      </div>

      <button type="submit">{t("form.add")}</button>
    </form>
  );
}
