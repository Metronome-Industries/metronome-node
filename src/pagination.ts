// File generated from our OpenAPI spec by Stainless.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface PageResponse<Item> {
  data: Array<Item>;

  next_page: string | null;
}

export interface PageParams {
  /**
   * Cursor that indicates where the next page of results should start.
   */
  next_page?: string | null;
}

export class Page<Item> extends AbstractPage<Item> implements PageResponse<Item> {
  data: Array<Item>;

  next_page: string | null;

  constructor(client: APIClient, response: Response, body: PageResponse<Item>, options: FinalRequestOptions) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.next_page = body.next_page || '';
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<PageParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const cursor = this.next_page;
    if (!cursor) {
      return null;
    }

    return {
      params: {
        next_page: cursor,
      },
    };
  }
}
