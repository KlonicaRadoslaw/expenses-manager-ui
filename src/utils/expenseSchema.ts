import { z } from 'zod';

export const expenseSchema = z.object({
    title: z.string().min(1, 'errors.titleRequired').min(2, 'errors.titleMin'),
    amount: z.number({error: 'errors.amountRequired'}).positive('errors.amountPositive'),
    category: z.string().min(1, 'errors.categoryRequired'),
});

export type ExpenseFormValues = z.infer<typeof expenseSchema>;