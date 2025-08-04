// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class PricingUnits extends APIResource {
  /**
   * List all pricing units (known in the API by the legacy term "credit types").
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const pricingUnitListResponse of client.v1.pricingUnits.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PricingUnitListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PricingUnitListResponsesCursorPage, PricingUnitListResponse> {
    return this._client.getAPIList('/v1/credit-types/list', CursorPage<PricingUnitListResponse>, {
      query,
      ...options,
    });
  }
}

export type PricingUnitListResponsesCursorPage = CursorPage<PricingUnitListResponse>;

export interface PricingUnitListResponse {
  id?: string;

  is_currency?: boolean;

  name?: string;
}

export interface PricingUnitListParams extends CursorPageParams {}

export declare namespace PricingUnits {
  export {
    type PricingUnitListResponse as PricingUnitListResponse,
    type PricingUnitListResponsesCursorPage as PricingUnitListResponsesCursorPage,
    type PricingUnitListParams as PricingUnitListParams,
  };
}
