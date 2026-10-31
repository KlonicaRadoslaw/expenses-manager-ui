import { expenseSchema, type ExpenseFormValues } from "@/utils/expenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface ExpenseFormProps {
  onAdd: (values: ExpenseFormValues) => void;
}

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>{t("form.title")}</label>
        <input {...register("title")} />
        {errors.title && <p>{t(errors.title.message as string)}</p>}
      </div>

      <div>
        <label>{t("form.amount")}</label>
        <input {...register("amount")} />
        {errors.amount && <p>{t(errors.amount.message as string)}</p>}
      </div>

      <div>
        <label>{t("form.category")}</label>
        <input {...register("category")} />
        {errors.category && <p>{t(errors.category.message as string)}</p>}
      </div>

      <button type="submit">{t("form.add")}</button>
    </form>
  );
}
