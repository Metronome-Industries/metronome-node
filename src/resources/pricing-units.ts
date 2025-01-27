// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { CursorPage, type CursorPageParams } from '../pagination';

export class PricingUnits extends APIResource {
  /**
   * List all pricing units (known in the API by the legacy term "credit types").
   */
  list(
    query?: PricingUnitListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PricingUnitListResponsesCursorPage, PricingUnitListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<PricingUnitListResponsesCursorPage, PricingUnitListResponse>;
  list(
    query: PricingUnitListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PricingUnitListResponsesCursorPage, PricingUnitListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/credit-types/list', PricingUnitListResponsesCursorPage, {
      query,
      ...options,
    });
  }
}

export class PricingUnitListResponsesCursorPage extends CursorPage<PricingUnitListResponse> {}

export interface PricingUnitListResponse {
  id?: string;

  is_currency?: boolean;

  name?: string;
}

export interface PricingUnitListParams extends CursorPageParams {}

PricingUnits.PricingUnitListResponsesCursorPage = PricingUnitListResponsesCursorPage;

export declare namespace PricingUnits {
  export {
    type PricingUnitListResponse as PricingUnitListResponse,
    PricingUnitListResponsesCursorPage as PricingUnitListResponsesCursorPage,
    type PricingUnitListParams as PricingUnitListParams,
  };
}
