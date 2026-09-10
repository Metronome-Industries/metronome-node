// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

/**
 * Use these endpoints to configure a billing API key, a webhook secret, or invoice finalization behavior.
 */
export class PricingUnits extends APIResource {
  /**
   * Create a custom pricing unit. Custom pricing units can be used to charge for
   * usage in a non-fiat pricing unit, for example AI credits.
   *
   * @example
   * ```ts
   * const pricingUnit = await client.v1.pricingUnits.create({
   *   name: 'AI Credits',
   * });
   * ```
   */
  create(body: PricingUnitCreateParams, options?: RequestOptions): APIPromise<PricingUnitCreateResponse> {
    return this._client.post('/v1/credit-types/create', { body, ...options });
  }

  /**
   * List all pricing units. All fiat currency types (for example, USD or GBP) will
   * be included, as well as any custom pricing units that were configured. Custom
   * pricing units can be used to charge for usage in a non-fiat pricing unit, for
   * example AI credits.
   *
   * Note: The USD (cents) pricing unit is 2714e483-4ff1-48e4-9e25-ac732e8f24f2.
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

  /**
   * Archive a custom pricing unit. Once archived, it will no longer appear in
   * pricing unit selectors by default.
   *
   * @example
   * ```ts
   * const response = await client.v1.pricingUnits.archive({
   *   id: 'fa2f1b3d-9d52-4951-a099-25991fd394d6',
   * });
   * ```
   */
  archive(body: PricingUnitArchiveParams, options?: RequestOptions): APIPromise<PricingUnitArchiveResponse> {
    return this._client.post('/v1/credit-types/archive', { body, ...options });
  }
}

export type PricingUnitListResponsesCursorPage = CursorPage<PricingUnitListResponse>;

export interface PricingUnitCreateResponse {
  data: Shared.ID;
}

export interface PricingUnitListResponse {
  id?: string;

  is_currency?: boolean;

  name?: string;
}

export interface PricingUnitArchiveResponse {
  data: Shared.ID;
}

export interface PricingUnitCreateParams {
  /**
   * The name of the custom pricing unit. This will appear on invoices.
   */
  name: string;
}

export interface PricingUnitListParams extends CursorPageParams {}

export interface PricingUnitArchiveParams {
  id: string;
}

export declare namespace PricingUnits {
  export {
    type PricingUnitCreateResponse as PricingUnitCreateResponse,
    type PricingUnitListResponse as PricingUnitListResponse,
    type PricingUnitArchiveResponse as PricingUnitArchiveResponse,
    type PricingUnitListResponsesCursorPage as PricingUnitListResponsesCursorPage,
    type PricingUnitCreateParams as PricingUnitCreateParams,
    type PricingUnitListParams as PricingUnitListParams,
    type PricingUnitArchiveParams as PricingUnitArchiveParams,
  };
}
