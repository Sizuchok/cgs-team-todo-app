import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic, isAxiosError } from 'axios';
import { APP_KEYS } from '../common/consts';

type RequestConfig<TData = unknown> = AxiosRequestConfig<TData> & {};

type MutationRequestConfig<TData = unknown> = RequestConfig<TData> & {
  data: TData;
};

export abstract class HttpService {
  private fetchingService: AxiosStatic;

  constructor(
    private baseUrl: string | undefined,
    private resource: string,
    private apiVersion: string = 'v1'
  ) {
    this.baseUrl = baseUrl;
    this.fetchingService = axios;
    this.apiVersion = apiVersion;
    this.resource = resource;

    this.fetchingService.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          if (error.status === 401) {
            localStorage.removeItem(APP_KEYS.STORAGE_KEYS.JWT_TOKEN);
          }
        }

        return Promise.reject(error);
      }
    );
    // disable for prod
    // this.fetchingService.interceptors.request.use((config) =>
    //   new Promise((resolve) => setTimeout(resolve, 1000)).then(() => config)
    // );
  }

  private getFullApiUrl(url: string | undefined): string {
    return `${this.baseUrl}/api/${this.apiVersion}/${this.resource}/${url ?? ''}`;
  }

  private populateTokenToHeaderConfig(): Record<string, string> {
    return {
      Authorization: `Bearer ${localStorage.getItem(APP_KEYS.STORAGE_KEYS.JWT_TOKEN) ?? ''}`
    };
  }

  private extractUrlAndDataFromConfig({
    data,
    ...configWithoutDataAndUrl
  }: RequestConfig): AxiosRequestConfig {
    return configWithoutDataAndUrl;
  }

  protected get<TRespone = unknown, TData = unknown>(
    config: RequestConfig<TData>,
    withAuth = true
  ): Promise<AxiosResponse<TRespone>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }

    return this.fetchingService.get<TRespone>(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  protected post<TRespone = unknown, TData = unknown>(
    config: MutationRequestConfig<TData>,
    withAuth = true
  ): Promise<AxiosResponse<TRespone>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.post<TRespone>(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  protected patch<TRespone = unknown, TData = unknown>(
    config: MutationRequestConfig<TData>,
    withAuth = true
  ): Promise<AxiosResponse<TRespone>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.patch<TRespone>(
      this.getFullApiUrl(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  protected delete<TRespone = unknown, TData = unknown>(
    config: RequestConfig<TData>,
    withAuth = true
  ): Promise<AxiosResponse<TRespone>> {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig()
      };
    }
    return this.fetchingService.delete<TRespone>(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }
}
