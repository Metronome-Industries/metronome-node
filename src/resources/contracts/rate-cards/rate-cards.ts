// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
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
import { CursorPage, type CursorPageParams } from '../../../pagination';

export class RateCards extends APIResource {
  productOrders: ProductOrdersAPI.ProductOrders = new ProductOrdersAPI.ProductOrders(this._client);
  rates: RatesAPI.Rates = new RatesAPI.Rates(this._client);
  namedSchedules: NamedSchedulesAPI.NamedSchedules = new NamedSchedulesAPI.NamedSchedules(this._client);

  /**
   * Create a new rate card
   */
  create(body: RateCardCreateParams, options?: Core.RequestOptions): Core.APIPromise<RateCardCreateResponse> {
    return this._client.post('/contract-pricing/rate-cards/create', { body, ...options });
  }

  /**
   * Get a specific rate card NOTE: Use `/contract-pricing/rate-cards/getRates` to
   * retrieve rate card rates.
   */
  retrieve(
    body: RateCardRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateCardRetrieveResponse> {
    return this._client.post('/contract-pricing/rate-cards/get', { body, ...options });
  }

  /**
   * Update a rate card
   */
  update(body: RateCardUpdateParams, options?: Core.RequestOptions): Core.APIPromise<RateCardUpdateResponse> {
    return this._client.post('/contract-pricing/rate-cards/update', { body, ...options });
  }

  /**
   * List rate cards NOTE: Use `/contract-pricing/rate-cards/getRates` to retrieve
   * rate card rates.
   */
  list(
    params: RateCardListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RateCardListResponsesCursorPage, RateCardListResponse> {
    const { body, limit, next_page } = params;
    return this._client.getAPIList('/contract-pricing/rate-cards/list', RateCardListResponsesCursorPage, {
      query: { limit, next_page },
      body: body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Get all rates for a rate card from starting_at (either in perpetuity or until
   * ending_before, if provided)
   */
  retrieveRateSchedule(
    params: RateCardRetrieveRateScheduleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RateCardRetrieveRateScheduleResponse> {
    const { limit, next_page, ...body } = params;
    return this._client.post('/contract-pricing/rate-cards/getRateSchedule', {
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

    rate_card_entries: Record<string, Data.RateCardEntries>;

    aliases?: Array<Data.Alias>;

    credit_type_conversions?: Array<Data.CreditTypeConversion>;

    custom_fields?: Record<string, string>;

    description?: string;

    fiat_credit_type?: Shared.CreditTypeData;
  }

  export namespace Data {
    export interface RateCardEntries {
      current?: RateCardEntries.Current | null;

      updates?: Array<RateCardEntries.Update>;
    }

    export namespace RateCardEntries {
      export interface Current {
        id?: string;

        created_at?: string;

        created_by?: string;

        credit_type?: Shared.CreditTypeData;

        custom_rate?: Record<string, unknown>;

        ending_before?: string;

        entitled?: boolean;

        price?: number;

        product_id?: string;

        rate_type?: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

        starting_at?: string;

        tiers?: Array<Shared.Tier>;
      }

      export interface Update {
        id: string;

        created_at: string;

        created_by: string;

        entitled: boolean;

        product_id: string;

        rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

        starting_at: string;

        credit_type?: Shared.CreditTypeData;

        custom_rate?: Record<string, unknown>;

        ending_before?: string;

        is_prorated?: boolean;

        price?: number;

        quantity?: number;

        tiers?: Array<Shared.Tier>;
      }
    }

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

  rate_card_entries: Record<string, RateCardListResponse.RateCardEntries>;

  aliases?: Array<RateCardListResponse.Alias>;

  credit_type_conversions?: Array<RateCardListResponse.CreditTypeConversion>;

  custom_fields?: Record<string, string>;

  description?: string;

  fiat_credit_type?: Shared.CreditTypeData;
}

export namespace RateCardListResponse {
  export interface RateCardEntries {
    current?: RateCardEntries.Current | null;

    updates?: Array<RateCardEntries.Update>;
  }

  export namespace RateCardEntries {
    export interface Current {
      id?: string;

      created_at?: string;

      created_by?: string;

      credit_type?: Shared.CreditTypeData;

      custom_rate?: Record<string, unknown>;

      ending_before?: string;

      entitled?: boolean;

      price?: number;

      product_id?: string;

      rate_type?: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

      starting_at?: string;

      tiers?: Array<Shared.Tier>;
    }

    export interface Update {
      id: string;

      created_at: string;

      created_by: string;

      entitled: boolean;

      product_id: string;

      rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

      starting_at: string;

      credit_type?: Shared.CreditTypeData;

      custom_rate?: Record<string, unknown>;

      ending_before?: string;

      is_prorated?: boolean;

      price?: number;

      quantity?: number;

      tiers?: Array<Shared.Tier>;
    }
  }

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

export interface RateCardRetrieveRateScheduleResponse {
  data: Array<RateCardRetrieveRateScheduleResponse.Data>;

  next_page?: string | null;
}

export namespace RateCardRetrieveRateScheduleResponse {
  export interface Data {
    entitled: boolean;

    product_id: string;

    product_name: string;

    product_tags: Array<string>;

    rate: Shared.Rate;

    starting_at: string;

    ending_before?: string;

    pricing_group_values?: Record<string, string>;
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

  custom_fields?: Record<string, string>;

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

  custom_fields?: Record<string, string>;

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
  body: unknown;
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
    type RateCardRetrieveRateScheduleResponse as RateCardRetrieveRateScheduleResponse,
    RateCardListResponsesCursorPage as RateCardListResponsesCursorPage,
    type RateCardCreateParams as RateCardCreateParams,
    type RateCardRetrieveParams as RateCardRetrieveParams,
    type RateCardUpdateParams as RateCardUpdateParams,
    type RateCardListParams as RateCardListParams,
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
