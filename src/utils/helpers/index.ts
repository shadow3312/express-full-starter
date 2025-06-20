import { IHttpError, IHttpResponse } from "@/types/express";

function setJsonReponse<T>(response: IHttpResponse<T>): IHttpResponse<T> {
  return {
    headers: response.headers,
    statusCode: response.statusCode,
    body: response.body,
  };
}

const setJsonError = (statusCode: number, errorMessage: string): IHttpError => {
  return {
    statusCode: statusCode,
    body: { error: errorMessage },
  };
};

function catchError(error: any) {
  return setJsonError(
    error?.statusCode || 500,
    error?.message || "An unexpected error occurred"
  );
}

export { setJsonReponse, setJsonError, catchError };