// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface CursorPageResponse<Item> {
  /**
   * Cursor to fetch the next page
   */
  next_page: string;

  /**
   * Items of the page
   */
  data: Array<Item>;
}

export interface CursorPageParams {
  /**
   * Cursor to begin fetching from
   */
  next_page?: string;

  /**
   * Number of elements to fetch
   */
  limit?: number;
}

export class CursorPage<Item> extends AbstractPage<Item> implements CursorPageResponse<Item> {
  /**
   * Cursor to fetch the next page
   */
  next_page: string;

  /**
   * Items of the page
   */
  data: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: CursorPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.next_page = body.next_page || '';
    this.data = body.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  override hasNextPage(): boolean {
    return this.nextPageInfo() != null;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<CursorPageParams> | null {
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

export interface BodyCursorPageResponse<Item> {
  /**
   * Cursor to fetch the next page
   */
  next_page: string;

  /**
   * Items of the page
   */
  data: Array<Item>;
}

export interface BodyCursorPageParams {
  /**
   * Cursor to begin fetching from
   */
  next_page?: string;

  /**
   * Number of elements to fetch
   */
  limit?: number;
}

export class BodyCursorPage<Item> extends AbstractPage<Item> implements BodyCursorPageResponse<Item> {
  /**
   * Cursor to fetch the next page
   */
  next_page: string;

  /**
   * Items of the page
   */
  data: Array<Item>;

  constructor(
    client: APIClient,
    response: Response,
    body: BodyCursorPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.next_page = body.next_page || '';
    this.data = body.data || [];
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  override hasNextPage(): boolean {
    return this.nextPageInfo() != null;
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<BodyCursorPageParams> | null {
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
