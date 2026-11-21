export interface ApiError {
  field: string;
  message: string;
  code: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  status: number;
  message: string | null;
  errors: ApiError[] | null;
}
