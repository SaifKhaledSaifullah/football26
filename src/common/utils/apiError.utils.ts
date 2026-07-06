import { HTTP_STATUS } from '../../apis/apiClient/constants/api.constents';

interface BackendErrorData {
  Title?: string;
  RequestPath?: string;
  Status?: number;
  message?: string;
}
export class ApiError extends Error {
  public readonly status: number;
  public readonly data?: unknown;
  public readonly timestamp: string;
  public readonly title?: string;
  public readonly requestPath?: string;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.timestamp = new Date().toISOString();

    if (data && typeof data === 'object') {
      const errorData = data as BackendErrorData;
      this.title = errorData.Title;
      this.requestPath = errorData.RequestPath;
      this.status = errorData.Status || status;
      this.data = data;
    } else {
      this.status = status;
      this.data = data;
    }

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }

  static fromResponse(status: number, responseData?: unknown): ApiError {
    if (responseData && typeof responseData === 'object') {
      const errorData = responseData as BackendErrorData;
      const message =
        errorData.Title || errorData.message || `Request failed with status ${status}`;
      return new ApiError(message, errorData.Status || status, responseData);
    }

    return new ApiError(`Request failed with status ${status}`, status, responseData);
  }

  get isNetworkError(): boolean {
    return this.status === 0 || (typeof window !== 'undefined' && !window.navigator.onLine);
  }

  get isClientError(): boolean {
    return this.status >= 400 && this.status < 500;
  }

  get isServerError(): boolean {
    return this.status >= 500;
  }

  get isNotFound(): boolean {
    return this.status === HTTP_STATUS.NOT_FOUND;
  }
}
