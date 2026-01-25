import { AxiosError } from "axios";
import { AppError } from "./types/error.type";

export default function exceptionHandler(error: unknown): AppError {
  switch (true) {
    case error instanceof AxiosError:
      if (error.response) {
        const { status, statusText, data } = error.response;

        return {
          url: error.config?.baseURL,
          method: error.config?.method?.toUpperCase(),
          code: data?.meta?.code ?? status,
          status: data?.meta?.status ?? "error",
          statusText,
          message: data?.meta?.message,
        };
      } else if (error.request) {
        return {
          url: error.config?.url,
          method: error.config?.method?.toUpperCase(),
          status: "error",
          statusText: "Request Error",
          message: "No response received from server..",
        };
      }
    default:
      const genericError = error as Error;
      return {
        status: "error",
        statusText: "Unexpected Error",
        message: genericError.message || "An unexpected error occured",
      };
  }
}
