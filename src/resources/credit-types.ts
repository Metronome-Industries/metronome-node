// File generated from our OpenAPI spec by Stainless.

import * as Core from '@metronome-industries/metronome/core';
import { APIResource } from '@metronome-industries/metronome/resource';
import { isRequestOptions } from '@metronome-industries/metronome/core';
import * as CreditTypesAPI from '@metronome-industries/metronome/resources/credit-types';

export class CreditTypes extends APIResource {
  /**
   * List all pricing units (known in the API by the legacy term "credit types").
   */
  list(query?: CreditTypeListParams, options?: Core.RequestOptions): Core.APIPromise<CreditTypeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CreditTypeListResponse>;
  list(
    query: CreditTypeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditTypeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/credit-types/list', { query, ...options });
  }
}

export interface CreditTypeListResponse {
  data: Array<CreditTypeListResponse.Data>;

  next_page: string | null;
}

export namespace CreditTypeListResponse {
  export interface Data {
    id?: string;

    is_currency?: boolean;

    name?: string;
  }
}

export interface CreditTypeListParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;

  /**
   * Cursor that indicates where the next page of results should start.
   */
  next_page?: string;
}

export namespace CreditTypes {
  export import CreditTypeListResponse = CreditTypesAPI.CreditTypeListResponse;
  export import CreditTypeListParams = CreditTypesAPI.CreditTypeListParams;
}
