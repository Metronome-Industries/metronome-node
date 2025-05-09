// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as Shared from '../../../shared';
import { CursorPage, type CursorPageParams } from '../../../../pagination';

export class Rates extends APIResource {
  /**
   * Get all rates for a rate card at a point in time
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const rateListResponse of client.v1.contracts.rateCards.rates.list(
   *   {
   *     at: '2024-01-01T00:00:00.000Z',
   *     rate_card_id: 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe',
   *     selectors: [
   *       {
   *         product_id: 'd6300dbb-882e-4d2d-8dec-5125d16b65d0',
   *         partial_pricing_group_values: {
   *           region: 'us-west-2',
   *           cloud: 'aws',
   *         },
   *       },
   *     ],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RateListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RateListResponsesCursorPage, RateListResponse> {
    const { limit, next_page, ...body } = params;
    return this._client.getAPIList('/v1/contract-pricing/rate-cards/getRates', RateListResponsesCursorPage, {
      query: { limit, next_page },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Add a new rate
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.contracts.rateCards.rates.add({
   *     entitled: true,
   *     product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *     rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *     rate_type: 'FLAT',
   *     starting_at: '2020-01-01T00:00:00.000Z',
   *     credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
   *     price: 100,
   *   });
   * ```
   */
  add(body: RateAddParams, options?: Core.RequestOptions): Core.APIPromise<RateAddResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/addRate', { body, ...options });
  }

  /**
   * Add new rates
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.contracts.rateCards.rates.addMany({
   *     rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *     rates: [
   *       {
   *         product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *         starting_at: '2020-01-01T00:00:00.000Z',
   *         entitled: true,
   *         rate_type: 'FLAT',
   *         price: 100,
   *         pricing_group_values: {
   *           region: 'us-west-2',
   *           cloud: 'aws',
   *         },
   *       },
   *       {
   *         product_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *         starting_at: '2020-01-01T00:00:00.000Z',
   *         entitled: true,
   *         rate_type: 'FLAT',
   *         price: 120,
   *         pricing_group_values: {
   *           region: 'us-east-2',
   *           cloud: 'aws',
   *         },
   *       },
   *     ],
   *   });
   * ```
   */
  addMany(body: RateAddManyParams, options?: Core.RequestOptions): Core.APIPromise<RateAddManyResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/addRates', { body, ...options });
  }
}

export class RateListResponsesCursorPage extends CursorPage<RateListResponse> {}

export interface RateListResponse {
  entitled: boolean;

  product_custom_fields: Record<string, string>;

  product_id: string;

  product_name: string;

  product_tags: Array<string>;

  rate: Shared.Rate;

  starting_at: string;

  /**
   * A distinct rate on the rate card. You can choose to use this rate rather than
   * list rate when consuming a credit or commit.
   */
  commit_rate?: RateListResponse.CommitRate;

  ending_before?: string;

  pricing_group_values?: Record<string, string>;
}

export namespace RateListResponse {
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

export interface RateAddResponse {
  data: RateAddResponse.Data;
}

export namespace RateAddResponse {
  export interface Data {
    rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

    /**
     * A distinct rate on the rate card. You can choose to use this rate rather than
     * list rate when consuming a credit or commit.
     */
    commit_rate?: Data.CommitRate;

    credit_type?: Shared.CreditTypeData;

    /**
     * Only set for CUSTOM rate_type. This field is interpreted by custom rate
     * processors.
     */
    custom_rate?: Record<string, unknown>;

    /**
     * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
     * set to true.
     */
    is_prorated?: boolean;

    /**
     * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
     * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
     */
    price?: number;

    /**
     * if pricing groups are used, this will contain the values used to calculate the
     * price
     */
    pricing_group_values?: Record<string, string>;

    /**
     * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
     */
    quantity?: number;

    /**
     * Only set for TIERED rate_type.
     */
    tiers?: Array<Shared.Tier>;

    /**
     * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
     * using list prices rather than the standard rates for this product on the
     * contract.
     */
    use_list_prices?: boolean;
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

export interface RateAddManyResponse {
  /**
   * The ID of the rate card to which the rates were added.
   */
  data: Shared.ID;
}

export interface RateListParams extends CursorPageParams {
  /**
   * Body param: inclusive starting point for the rates schedule
   */
  at: string;

  /**
   * Body param: ID of the rate card to get the schedule for
   */
  rate_card_id: string;

  /**
   * Body param: List of rate selectors, rates matching ANY of the selector will be
   * included in the response Passing no selectors will result in all rates being
   * returned.
   */
  selectors?: Array<RateListParams.Selector>;
}

export namespace RateListParams {
  export interface Selector {
    /**
     * List of pricing group key value pairs, rates containing the matching key / value
     * pairs will be included in the response.
     */
    partial_pricing_group_values?: Record<string, string>;

    /**
     * List of pricing group key value pairs, rates matching all of the key / value
     * pairs will be included in the response.
     */
    pricing_group_values?: Record<string, string>;

    /**
     * Rates matching the product id will be included in the response.
     */
    product_id?: string;

    /**
     * List of product tags, rates matching any of the tags will be included in the
     * response.
     */
    product_tags?: Array<string>;
  }
}

export interface RateAddParams {
  entitled: boolean;

  /**
   * ID of the product to add a rate for
   */
  product_id: string;

  /**
   * ID of the rate card to update
   */
  rate_card_id: string;

  rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

  /**
   * inclusive effective date
   */
  starting_at: string;

  /**
   * A distinct rate on the rate card. You can choose to use this rate rather than
   * list rate when consuming a credit or commit.
   */
  commit_rate?: RateAddParams.CommitRate;

  /**
   * The Metronome ID of the credit type to associate with price, defaults to USD
   * (cents) if not passed. Used by all rate_types except type PERCENTAGE. PERCENTAGE
   * rates use the credit type of associated rates.
   */
  credit_type_id?: string;

  /**
   * Only set for CUSTOM rate_type. This field is interpreted by custom rate
   * processors.
   */
  custom_rate?: Record<string, unknown>;

  /**
   * exclusive end date
   */
  ending_before?: string;

  /**
   * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
   * set to true.
   */
  is_prorated?: boolean;

  /**
   * Default price. For FLAT and SUBSCRIPTION rate_type, this must be >=0. For
   * PERCENTAGE rate_type, this is a decimal fraction, e.g. use 0.1 for 10%; this
   * must be >=0 and <=1.
   */
  price?: number;

  /**
   * Optional. List of pricing group key value pairs which will be used to calculate
   * the price.
   */
  pricing_group_values?: Record<string, string>;

  /**
   * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
   */
  quantity?: number;

  /**
   * Only set for TIERED rate_type.
   */
  tiers?: Array<Shared.Tier>;

  /**
   * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
   * using list prices rather than the standard rates for this product on the
   * contract.
   */
  use_list_prices?: boolean;
}

export namespace RateAddParams {
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

export interface RateAddManyParams {
  rate_card_id: string;

  rates: Array<RateAddManyParams.Rate>;
}

export namespace RateAddManyParams {
  export interface Rate {
    entitled: boolean;

    /**
     * ID of the product to add a rate for
     */
    product_id: string;

    rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

    /**
     * inclusive effective date
     */
    starting_at: string;

    /**
     * A distinct rate on the rate card. You can choose to use this rate rather than
     * list rate when consuming a credit or commit.
     */
    commit_rate?: Rate.CommitRate;

    /**
     * "The Metronome ID of the credit type to associate with price, defaults to USD
     * (cents) if not passed. Used by all rate_types except type PERCENTAGE. PERCENTAGE
     * rates use the credit type of associated rates."
     */
    credit_type_id?: string;

    /**
     * Only set for CUSTOM rate_type. This field is interpreted by custom rate
     * processors.
     */
    custom_rate?: Record<string, unknown>;

    /**
     * exclusive end date
     */
    ending_before?: string;

    /**
     * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
     * set to true.
     */
    is_prorated?: boolean;

    /**
     * Default price. For FLAT and SUBSCRIPTION rate_type, this must be >=0. For
     * PERCENTAGE rate_type, this is a decimal fraction, e.g. use 0.1 for 10%; this
     * must be >=0 and <=1.
     */
    price?: number;

    /**
     * Optional. List of pricing group key value pairs which will be used to calculate
     * the price.
     */
    pricing_group_values?: Record<string, string>;

    /**
     * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
     */
    quantity?: number;

    /**
     * Only set for TIERED rate_type.
     */
    tiers?: Array<Shared.Tier>;

    /**
     * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
     * using list prices rather than the standard rates for this product on the
     * contract.
     */
    use_list_prices?: boolean;
  }

  export namespace Rate {
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

Rates.RateListResponsesCursorPage = RateListResponsesCursorPage;

export declare namespace Rates {
  export {
    type RateListResponse as RateListResponse,
    type RateAddResponse as RateAddResponse,
    type RateAddManyResponse as RateAddManyResponse,
    RateListResponsesCursorPage as RateListResponsesCursorPage,
    type RateListParams as RateListParams,
    type RateAddParams as RateAddParams,
    type RateAddManyParams as RateAddManyParams,
  };
}
