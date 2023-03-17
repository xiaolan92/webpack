export interface APIResponse<T> {
  message: string;
  code: number;
  data?: T;
}
