import type { AxiosAdapter } from "axios";
import type { Expense } from "@/utils/types";
import type { ApiResponse } from "@/api/types";

const database: Expense[] = [
  { id: "1", title: "Product1", amount: 11.22, category: "Cat-1" },
  { id: "2", title: "Product2", amount: 22.44, category: "Cat-2" },
];

const envelope = <T>(data: T, status: number): ApiResponse<T> => ({
  success: true,
  data,
  status,
  message: null,
  errors: null,
});

export const mockAdapter: AxiosAdapter = async (config) => {
  if (config.method === "post") {
    const created: Expense = {
      id: crypto.randomUUID(),
      ...JSON.parse(config.data),
    };
    database.push(created);
    return {
      data: envelope(created, 201),
      status: 201,
      statusText: "Created",
      headers: {},
      config,
    };
  }

  return {
    data: envelope([...database], 200),
    status: 200,
    statusText: "OK",
    headers: {},
    config,
  };
};
