// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
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
import { APIPromise } from '../../../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';

export class RateCards extends APIResource {
  productOrders: ProductOrdersAPI.ProductOrders = new ProductOrdersAPI.ProductOrders(this._client);
  rates: RatesAPI.Rates = new RatesAPI.Rates(this._client);
  namedSchedules: NamedSchedulesAPI.NamedSchedules = new NamedSchedulesAPI.NamedSchedules(this._client);

  /**
   * In Metronome, the rate card is the central location for your pricing. Rate cards
   * were built with new product launches and pricing changes in mind - you can
   * update your products and pricing in one place, and that change will be
   * automatically propagated across your customer cohorts. Most clients need only
   * maintain one or a few rate cards within Metronome.
   *
   * ### Use this endpoint to:
   *
   * - Create a rate card with a name and description
   * - Define the rate card's single underlying fiat currency, and any number of
   *   conversion rates between that fiat currency and custom pricing units. You can
   *   then add products and associated rates in the fiat currency or custom pricing
   *   unit for which you have defined a conversion rate.
   * - Set aliases for the rate card. Aliases are human-readable names that you can
   *   use in the place of the id of the rate card when provisioning a customer's
   *   contract. By using an alias, you can easily create a contract and provision a
   *   customer by choosing the paygo rate card, without storing the rate card id in
   *   your internal systems. This is helpful when launching a new rate card for
   *   paygo customers, you can update the alias for paygo to be scheduled to be
   *   assigned to the new rate card without updating your code.
   *
   * ### Key response fields:
   *
   * - The ID of the rate card you just created
   *
   * ### Usage guidelines:
   *
   * - After creating a rate card, you can now use the addRate or addRates endpoints
   *   to add products and their prices to it
   * - A rate card alias can only be used by one rate card at a time. If you create a
   *   contract with a rate card alias that is already in use by another rate card,
   *   the original rate card's alias schedule will be updated. The alias will
   *   reference the rate card to which it was most recently assigned.
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
  create(body: RateCardCreateParams, options?: RequestOptions): APIPromise<RateCardCreateResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/create', { body, ...options });
  }

  /**
   * Return details for a specific rate card including name, description, and
   * aliases. This endpoint does not return rates - use the dedicated getRates or
   * getRateSchedule endpoints to understand the rates on a rate card.
   *
   * @example
   * ```ts
   * const rateCard =
   *   await client.v1.contracts.rateCards.retrieve({
   *     id: 'f3d51ae8-f283-44e1-9933-a3cf9ad7a6fe',
   *   });
   * ```
   */
  retrieve(body: RateCardRetrieveParams, options?: RequestOptions): APIPromise<RateCardRetrieveResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/get', { body, ...options });
  }

  /**
   * Update the metadata properties of an existing rate card, including its name,
   * description, and aliases. This endpoint is designed for managing rate card
   * identity and reference aliases rather than modifying pricing rates.
   *
   * What This Endpoint Does: Modifies the descriptive properties and alias
   * configuration of a rate card without affecting the underlying pricing rates or
   * schedules. This allows you to update how a rate card is identified and
   * referenced throughout your system.
   *
   * ### Use this endpoint to:
   *
   * - Rate card renaming: Update display names or descriptions for organizational
   *   clarity
   * - Alias management: Add, modify, or schedule alias transitions for seamless rate
   *   card migrations
   * - Documentation updates: Keep rate card descriptions current with business
   *   context
   * - Self-serve provisioning setup: Configure aliases to enable code-free rate card
   *   transitions
   *
   * Active contract impact:
   *
   * - Alias changes: Already-created contracts continue using their originally
   *   assigned rate cards.
   * - Other changes made using this endpoint will only impact the Metronome UI.
   *
   * Grandfathering existing PLG customer pricing:
   *
   * - Rate card aliases support scheduled transitions, enabling seamless rate card
   *   migrations for new customers, allowing existing customers to be grandfathered
   *   into their existing prices without code. Note that there are multiple
   *   mechanisms to support grandfathering in Metronome.
   *
   * How scheduled aliases work for PLG grandfathering: Initial setup:
   *
   * - Add alias to current rate card: Assign a stable alias (e.g.,
   *   "standard-pricing") to your active rate card
   * - Reference alias during contract creation: Configure your self-serve workflow
   *   to create contracts using `rate_card_alias` instead of direct `rate_card_id`
   * - Automatic resolution: New contracts referencing the alias automatically
   *   resolve to the rate card associated with the alias at the point in time of
   *   provisioning
   *
   * Grandfathering process:
   *
   * - Create new rate card: Build your new rate card with updated pricing structure
   * - Schedule alias transition: Add the same alias to the new rate card with a
   *   starting_at timestamp
   * - Automatic cutover: Starting at the scheduled time, new contracts created in
   *   your PLG workflow using that alias will automatically reference the new rate
   *   card
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
  update(body: RateCardUpdateParams, options?: RequestOptions): APIPromise<RateCardUpdateResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/update', { body, ...options });
  }

  /**
   * List all rate cards. Returns rate card IDs, names, descriptions, aliases, and
   * other details. To view the rates associated with a given rate card, use the
   * getRates or getRateSchedule endpoints.
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
    params: RateCardListParams | null | undefined = undefined,
    options?: RequestOptions,
  ): PagePromise<RateCardListResponsesCursorPage, RateCardListResponse> {
    const { limit, next_page, body } = params ?? {};
    return this._client.getAPIList('/v1/contract-pricing/rate-cards/list', CursorPage<RateCardListResponse>, {
      query: { limit, next_page },
      body: body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Permanently disable a rate card by archiving it, preventing use in new contracts
   * while preserving existing contract pricing. Use this when retiring old pricing
   * models, consolidating rate cards, or removing outdated pricing structures.
   * Returns the archived rate card ID and stops the rate card from appearing in
   * contract creation workflows.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.contracts.rateCards.archive({
   *     id: '12b21470-4570-40df-8998-449d0b0bc52f',
   *   });
   * ```
   */
  archive(body: RateCardArchiveParams, options?: RequestOptions): APIPromise<RateCardArchiveResponse> {
    return this._client.post('/v1/contract-pricing/rate-cards/archive', { body, ...options });
  }

  /**
   * A rate card defines the prices that you charge for your products. Rate cards
   * support scheduled changes over time, to allow you to easily roll out pricing
   * changes and new product launches across your customer base. Use this endpoint to
   * understand the rate schedule `starting_at` a given date, optionally filtering
   * the list of rates returned based on product id or pricing group values. For
   * example, you may want to display a schedule of upcoming price changes for a
   * given product in your product experience - use this endpoint to fetch that
   * information from its source of truth in Metronome.
   *
   * If you want to understand the rates for a specific customer's contract,
   * inclusive of contract-level overrides, use the `getContractRateSchedule`
   * endpoint.
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
    options?: RequestOptions,
  ): APIPromise<RateCardRetrieveRateScheduleResponse> {
    const { limit, next_page, ...body } = params;
    return this._client.post('/v1/contract-pricing/rate-cards/getRateSchedule', {
      query: { limit, next_page },
      body,
      ...options,
    });
  }
}

export type RateCardListResponsesCursorPage = CursorPage<RateCardListResponse>;

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

    /**
     * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
     */
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

  /**
   * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
   */
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

    /**
     * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
     */
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
    commit_rate?: Shared.CommitRate;

    ending_before?: string;

    pricing_group_values?: { [key: string]: string };
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

  /**
   * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
   */
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

RateCards.ProductOrders = ProductOrders;
RateCards.Rates = Rates;
RateCards.NamedSchedules = NamedSchedules;

export declare namespace RateCards {
  export {
    type RateCardCreateResponse as RateCardCreateResponse,
    type RateCardRetrieveResponse as RateCardRetrieveResponse,
    type RateCardUpdateResponse as RateCardUpdateResponse,
    type RateCardListResponse as RateCardListResponse,
    type RateCardArchiveResponse as RateCardArchiveResponse,
    type RateCardRetrieveRateScheduleResponse as RateCardRetrieveRateScheduleResponse,
    type RateCardListResponsesCursorPage as RateCardListResponsesCursorPage,
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
    type RateListResponsesCursorPage as RateListResponsesCursorPage,
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
