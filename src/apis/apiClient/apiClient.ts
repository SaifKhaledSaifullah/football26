import { ApiError } from '../../common/utils/apiError.utils';
import { API_BASE, API_HEADERS, HTTP_STATUS } from './constants/api.constents';

interface RequestConfig extends RequestInit {
  headers?: Record<string, string>;
}

interface ApiResponse {
  ok: boolean;
  status: number;
  json(): Promise<unknown>;
  blob(): Promise<Blob>;
}
type QueryParams = Record<string, string | number | boolean | undefined | null>;

class ApiClient {
  private readonly baseURL: string;

  constructor(baseURL: string = API_BASE.BASE_URL) {
    this.baseURL = baseURL;
  }
  private getHeaders(customHeaders?: Record<string, string>): Record<string, string> {
    const headers: Record<string, string> = {
      ...API_HEADERS.DEFAULT,
      ...customHeaders,
    };

    return headers;
  }

  private async handleResponse<T>(response: ApiResponse): Promise<T> {
    if (response.status === HTTP_STATUS.NO_CONTENT) {
      return null as unknown as T;
    }

    let responseData: unknown;
    try {
      responseData = await response.json();
    } catch {
      responseData = null;
    }

    if (!response.ok) {
      throw ApiError.fromResponse(response.status, responseData);
    }

    return responseData as T;
  }

  private async request<T>(endpoint: string, options: RequestConfig = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestConfig = {
      ...options,
      headers: this.getHeaders(options.headers),
    };

    try {
      const response = await fetch(url, config);
      return await this.handleResponse<T>(response as ApiResponse);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Network error occurred', 0, { originalError: error });
    }
  }

  private prepareQueryParams(params?: QueryParams): string {
    if (!params) return '';

    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });

    return searchParams.toString();
  }

  async get<T>(endpoint: string, params?: QueryParams): Promise<T> {
    const queryString = this.prepareQueryParams(params);
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    return this.request<T>(url);
  }
}
export const apiClient = new ApiClient();
