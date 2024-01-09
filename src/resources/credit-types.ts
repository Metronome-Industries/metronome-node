// File generated from our OpenAPI spec by Stainless.

import * as Core from 'metronome/core';
import { APIResource } from 'metronome/resource';
import { isRequestOptions } from 'metronome/core';
import * as CreditTypesAPI from 'metronome/resources/credit-types';
import { Page, type PageParams } from 'metronome/pagination';

export class CreditTypes extends APIResource {
  /**
   * List all pricing units (known in the API by the legacy term "credit types").
   */
  list(
    query?: CreditTypeListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreditTypeListResponsesPage, CreditTypeListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<CreditTypeListResponsesPage, CreditTypeListResponse>;
  list(
    query: CreditTypeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreditTypeListResponsesPage, CreditTypeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/credit-types/list', CreditTypeListResponsesPage, { query, ...options });
  }
}

export class CreditTypeListResponsesPage extends Page<CreditTypeListResponse> {}

export interface CreditTypeListResponse {
  id?: string;

  is_currency?: boolean;

  name?: string;
}

export interface CreditTypeListParams extends PageParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;
}

export namespace CreditTypes {
  export import CreditTypeListResponse = CreditTypesAPI.CreditTypeListResponse;
  export import CreditTypeListResponsesPage = CreditTypesAPI.CreditTypeListResponsesPage;
  export import CreditTypeListParams = CreditTypesAPI.CreditTypeListParams;
}
