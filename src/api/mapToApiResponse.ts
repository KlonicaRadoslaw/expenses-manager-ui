import type { ApiResponse } from "@/api/types";

export function mapToApiResponse<T>(
  body: Partial<ApiResponse<T>> | undefined,
  httpStatus: number,
): ApiResponse<T> {
  return {
    success: body?.success ?? false,
    data: body?.data ?? null,
    status: httpStatus,
    message: body?.message ?? null,
    errors: body?.errors ?? null,
  };
}
