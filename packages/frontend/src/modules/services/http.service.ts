import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';
import { APP_KEYS } from '../common/consts';

type RequestConfig<TData = unknown> = AxiosRequestConfig<TData> & {
  url: string;
};

type MutationRequestConfig<TData = unknown> = RequestConfig<TData> & {
  data: TData;
};

export class HttpService {
  private fetchingService: AxiosStatic;

  constructor(
    private baseUrl: string | undefined = process.env.SERVER_URL,
    private apiVersion: string = 'v1'
  ) {
    this.baseUrl = baseUrl;
    this.fetchingService = axios;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string): string {
    return `${this.baseUrl}/api/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig(): Record<string, string> {
    return {
      Authorization: localStorage.getItem(APP_KEYS.STORAGE_KEYS.JWT_TOKEN) ?? ''
    };
  }

  private extractUrlAndDataFromConfig({
    data,
    url,
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
