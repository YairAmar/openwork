export interface ServeOptions {
  port?: number;
  headless?: boolean;
  cdpPort?: number;
  profileDir?: string;
  useSystemChrome?: boolean;
}

export interface GetPageRequest {
  name: string;
}

export interface GetPageResponse {
  wsEndpoint: string;
  name: string;
  targetId: string;
}

export interface ListPagesResponse {
  pages: string[];
}

export interface ServerInfoResponse {
  wsEndpoint: string;
}
