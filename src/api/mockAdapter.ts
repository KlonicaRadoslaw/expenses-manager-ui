import type { AxiosAdapter } from "axios";
import type { Expense } from "@/utils/types";

const database: Expense[] = [
  { id: "1", title: "Product1", amount: 11.22, category: "Cat-1" },
  { id: "2", title: "Product2", amount: 22.44, category: "Cat-2" },
];

export const mockAdapter: AxiosAdapter = (config) => {
  if (config.method === "post") {
    database.push({ id: crypto.randomUUID(), ...JSON.parse(config.data) });
  }

  return Promise.resolve({
    data: [...database],
    status: 200,
    statusText: "OK",
    headers: {},
    config,
  });
};
