// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as Shared from '../../../shared';
import * as NamedSchedulesAPI from './named-schedules';
import {
  NamedScheduleRetrieveParams,
  NamedScheduleRetrieveResponse,
  NamedScheduleUpdateParams,
  NamedSchedules,
} from './named-schedules';
import * as ProductOrdersAPI from './product-orders';
import {
  ProductOrderSetParams,
  ProductOrderSetResponse,
  ProductOrderUpdateParams,
  ProductOrderUpdateResponse,
  ProductOrders,
} from './product-orders';
import * as RatesAPI from './rates';
import {
  RateAddManyParams,
  RateAddManyResponse,
  RateAddParams,
  RateAddResponse,
  RateListParams,
  RateListResponse,
  RateListResponsesCursorPage,
  Rates,
} from './rates';
import { CursorPage, type CursorPageParams } from '../../../../pagination';

export class RateCards extends APIResource {
  productOrders: ProductOrdersAPI.ProductOrders = new ProductOrdersAPI.ProductOrders(this._client);
  rates: RatesAPI.Rates = new RatesAPI.Rates(this._client);
  namedSchedules: NamedSchedulesAPI.NamedSchedules = new NamedSchedulesAPI.NamedSchedules(this._client);

  /**
   * Create a new rate card
   *
   * @example
   * ```ts
   * const rateCard = await client.v1.contracts.rateCards.create(
   *   {
   *     name: 'My Rate Card',
   *     aliases: [{ name: 'my-rate-card' }],
   *     credit_type_conversions: [
   *       {
   *         custom_credit_type_id:
   *           '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
   *         fiat_per_custom_credit: 2,
   *       },
   *     ],
   *     description: 'My Rate Card Description',
   *     fiat_credit_type_id:
   *       '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
   *   },
   * );
   * ```
   */
  create(body: RateCardCreateParams, options?: Core.RequestOptions): Core.APIPromise<RateCardCreateResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/create', { body, ...options });
  }

  /**
   * Get a specific rate card NOTE: Use `/contract-pricing/rate-cards/getRates` to
   * retrieve rate card rates.
   *
   * @example
   * ```ts
   * const rateCard =
   *   await client.v1.contracts.rateCards.retrieve({
   *     id: 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe',
   *   });
   * ```
   */
  retrieve(
    body: RateCardRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateCardRetrieveResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/get', { body, ...options });
  }

  /**
   * Update a rate card
   *
   * @example
   * ```ts
   * const rateCard = await client.v1.contracts.rateCards.update(
   *   {
   *     rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *     description: 'My Updated Rate Card Description',
   *     name: 'My Updated Rate Card',
   *   },
   * );
   * ```
   */
  update(body: RateCardUpdateParams, options?: Core.RequestOptions): Core.APIPromise<RateCardUpdateResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/update', { body, ...options });
  }

  /**
   * List rate cards NOTE: Use `/contract-pricing/rate-cards/getRates` to retrieve
   * rate card rates.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const rateCardListResponse of client.v1.contracts.rateCards.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: RateCardListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RateCardListResponsesCursorPage, RateCardListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<RateCardListResponsesCursorPage, RateCardListResponse>;
  list(
    params?: RateCardListParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RateCardListResponsesCursorPage, RateCardListResponse> {
    if (isRequestOptions(params)) {
      return this.list(undefined, params);
    }
    const { limit, next_page, body } = params ?? {};
    return this._client.getAPIList('/v1/contract-pricing/rate-cards/list', RateCardListResponsesCursorPage, {
      query: { limit, next_page },
      body: body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Archive a rate card
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.contracts.rateCards.archive({
   *     id: '12b21470-4570-40df-8998-449d0b0bc52f',
   *   });
   * ```
   */
  archive(
    body: RateCardArchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateCardArchiveResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/archive', { body, ...options });
  }

  /**
   * Get all rates for a rate card from starting_at (either in perpetuity or until
   * ending_before, if provided)
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.contracts.rateCards.retrieveRateSchedule({
   *     rate_card_id: 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe',
   *     starting_at: '2024-01-01T00:00:00.000Z',
   *     selectors: [
   *       {
   *         product_id: 'd6300dbb-882e-4d2d-8dec-5125d16b65d0',
   *         partial_pricing_group_values: {
   *           region: 'us-west-2',
   *           cloud: 'aws',
   *         },
   *       },
   *     ],
   *   });
   * ```
   */
  retrieveRateSchedule(
    params: RateCardRetrieveRateScheduleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateCardRetrieveRateScheduleResponse> {
    const { limit, next_page, ...body } = params;
    return this._client.post('/v1/contract-pricing/rate-cards/getRateSchedule', {
      query: { limit, next_page },
      body,
      ...options,
    });
  }
}

export class RateCardListResponsesCursorPage extends CursorPage<RateCardListResponse> {}

export interface RateCardCreateResponse {
  data: Shared.ID;
}

export interface RateCardRetrieveResponse {
  data: RateCardRetrieveResponse.Data;
}

export namespace RateCardRetrieveResponse {
  export interface Data {
    id: string;

    created_at: string;

    created_by: string;

    name: string;

    aliases?: Array<Data.Alias>;

    credit_type_conversions?: Array<Data.CreditTypeConversion>;

    custom_fields?: { [key: string]: string };

    description?: string;

    fiat_credit_type?: Shared.CreditTypeData;
  }

  export namespace Data {
    export interface Alias {
      name: string;

      ending_before?: string;

      starting_at?: string;
    }

    export interface CreditTypeConversion {
      custom_credit_type: Shared.CreditTypeData;

      fiat_per_custom_credit: string;
    }
  }
}

export interface RateCardUpdateResponse {
  data: Shared.ID;
}

export interface RateCardListResponse {
  id: string;

  created_at: string;

  created_by: string;

  name: string;

  aliases?: Array<RateCardListResponse.Alias>;

  credit_type_conversions?: Array<RateCardListResponse.CreditTypeConversion>;

  custom_fields?: { [key: string]: string };

  description?: string;

  fiat_credit_type?: Shared.CreditTypeData;
}

export namespace RateCardListResponse {
  export interface Alias {
    name: string;

    ending_before?: string;

    starting_at?: string;
  }

  export interface CreditTypeConversion {
    custom_credit_type: Shared.CreditTypeData;

    fiat_per_custom_credit: string;
  }
}

export interface RateCardArchiveResponse {
  data: Shared.ID;
}

export interface RateCardRetrieveRateScheduleResponse {
  data: Array<RateCardRetrieveRateScheduleResponse.Data>;

  next_page?: string | null;
}

export namespace RateCardRetrieveRateScheduleResponse {
  export interface Data {
    entitled: boolean;

    product_custom_fields: { [key: string]: string };

    product_id: string;

    product_name: string;

    product_tags: Array<string>;

    rate: Shared.Rate;

    starting_at: string;

    billing_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

    /**
     * A distinct rate on the rate card. You can choose to use this rate rather than
     * list rate when consuming a credit or commit.
     */
    commit_rate?: Data.CommitRate;

    ending_before?: string;

    pricing_group_values?: { [key: string]: string };
  }

  export namespace Data {
    /**
     * A distinct rate on the rate card. You can choose to use this rate rather than
     * list rate when consuming a credit or commit.
     */
    export interface CommitRate {
      rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

      /**
       * Commit rate price. For FLAT rate_type, this must be >=0.
       */
      price?: number;

      /**
       * Only set for TIERED rate_type.
       */
      tiers?: Array<Shared.Tier>;
    }
  }
}

export interface RateCardCreateParams {
  /**
   * Used only in UI/API. It is not exposed to end customers.
   */
  name: string;

  /**
   * Reference this alias when creating a contract. If the same alias is assigned to
   * multiple rate cards, it will reference the rate card to which it was most
   * recently assigned. It is not exposed to end customers.
   */
  aliases?: Array<RateCardCreateParams.Alias>;

  /**
   * Required when using custom pricing units in rates.
   */
  credit_type_conversions?: Array<RateCardCreateParams.CreditTypeConversion>;

  custom_fields?: { [key: string]: string };

  description?: string;

  /**
   * The Metronome ID of the credit type to associate with the rate card, defaults to
   * USD (cents) if not passed.
   */
  fiat_credit_type_id?: string;
}

export namespace RateCardCreateParams {
  export interface Alias {
    name: string;

    ending_before?: string;

    starting_at?: string;
  }

  export interface CreditTypeConversion {
    custom_credit_type_id: string;

    fiat_per_custom_credit: number;
  }
}

export interface RateCardRetrieveParams {
  id: string;
}

export interface RateCardUpdateParams {
  /**
   * ID of the rate card to update
   */
  rate_card_id: string;

  /**
   * Reference this alias when creating a contract. If the same alias is assigned to
   * multiple rate cards, it will reference the rate card to which it was most
   * recently assigned. It is not exposed to end customers.
   */
  aliases?: Array<RateCardUpdateParams.Alias>;

  description?: string;

  /**
   * Used only in UI/API. It is not exposed to end customers.
   */
  name?: string;
}

export namespace RateCardUpdateParams {
  export interface Alias {
    name: string;

    ending_before?: string;

    starting_at?: string;
  }
}

export interface RateCardListParams extends CursorPageParams {
  /**
   * Body param:
   */
  body?: unknown;
}

export interface RateCardArchiveParams {
  id: string;
}

export interface RateCardRetrieveRateScheduleParams {
  /**
   * Body param: ID of the rate card to get the schedule for
   */
  rate_card_id: string;

  /**
   * Body param: inclusive starting point for the rates schedule
   */
  starting_at: string;

  /**
   * Query param: Max number of results that should be returned
   */
  limit?: number;

  /**
   * Query param: Cursor that indicates where the next page of results should start.
   */
  next_page?: string;

  /**
   * Body param: optional exclusive end date for the rates schedule. When not
   * specified rates will show all future schedule segments.
   */
  ending_before?: string;

  /**
   * Body param: List of rate selectors, rates matching ANY of the selector will be
   * included in the response Passing no selectors will result in all rates being
   * returned.
   */
  selectors?: Array<RateCardRetrieveRateScheduleParams.Selector>;
}

export namespace RateCardRetrieveRateScheduleParams {
  export interface Selector {
    /**
     * Subscription rates matching the billing frequency will be included in the
     * response.
     */
    billing_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

    /**
     * List of pricing group key value pairs, rates containing the matching key / value
     * pairs will be included in the response.
     */
    partial_pricing_group_values?: { [key: string]: string };

    /**
     * List of pricing group key value pairs, rates matching all of the key / value
     * pairs will be included in the response.
     */
    pricing_group_values?: { [key: string]: string };

    /**
     * Rates matching the product id will be included in the response.
     */
    product_id?: string;
  }
}

RateCards.RateCardListResponsesCursorPage = RateCardListResponsesCursorPage;
RateCards.ProductOrders = ProductOrders;
RateCards.Rates = Rates;
RateCards.RateListResponsesCursorPage = RateListResponsesCursorPage;
RateCards.NamedSchedules = NamedSchedules;

export declare namespace RateCards {
  export {
    type RateCardCreateResponse as RateCardCreateResponse,
    type RateCardRetrieveResponse as RateCardRetrieveResponse,
    type RateCardUpdateResponse as RateCardUpdateResponse,
    type RateCardListResponse as RateCardListResponse,
    type RateCardArchiveResponse as RateCardArchiveResponse,
    type RateCardRetrieveRateScheduleResponse as RateCardRetrieveRateScheduleResponse,
    RateCardListResponsesCursorPage as RateCardListResponsesCursorPage,
    type RateCardCreateParams as RateCardCreateParams,
    type RateCardRetrieveParams as RateCardRetrieveParams,
    type RateCardUpdateParams as RateCardUpdateParams,
    type RateCardListParams as RateCardListParams,
    type RateCardArchiveParams as RateCardArchiveParams,
    type RateCardRetrieveRateScheduleParams as RateCardRetrieveRateScheduleParams,
  };

  export {
    ProductOrders as ProductOrders,
    type ProductOrderUpdateResponse as ProductOrderUpdateResponse,
    type ProductOrderSetResponse as ProductOrderSetResponse,
    type ProductOrderUpdateParams as ProductOrderUpdateParams,
    type ProductOrderSetParams as ProductOrderSetParams,
  };

  export {
    Rates as Rates,
    type RateListResponse as RateListResponse,
    type RateAddResponse as RateAddResponse,
    type RateAddManyResponse as RateAddManyResponse,
    RateListResponsesCursorPage as RateListResponsesCursorPage,
    type RateListParams as RateListParams,
    type RateAddParams as RateAddParams,
    type RateAddManyParams as RateAddManyParams,
  };

  export {
    NamedSchedules as NamedSchedules,
    type NamedScheduleRetrieveResponse as NamedScheduleRetrieveResponse,
    type NamedScheduleRetrieveParams as NamedScheduleRetrieveParams,
    type NamedScheduleUpdateParams as NamedScheduleUpdateParams,
  };
}
