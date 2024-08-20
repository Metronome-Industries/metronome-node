// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as RateCardsAPI from './rate-cards';
import * as Shared from '../../shared';
import * as NamedSchedulesAPI from './named-schedules';
import * as ProductOrdersAPI from './product-orders';
import * as RatesAPI from './rates';
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
   * Get a specific rate card
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
   * List rate cards
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
   * Get a specific rate schedule including all rate card entries
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

    fiat_credit_type?: Shared.CreditType;
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

        credit_type?: Shared.CreditType;

        custom_rate?: Record<string, unknown>;

        ending_before?: string;

        entitled?: boolean;

        price?: number;

        product_id?: string;

        rate_type?: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

        starting_at?: string;

        tiers?: Array<Current.Tier>;
      }

      export namespace Current {
        export interface Tier {
          price: number;

          size?: number;
        }
      }

      export interface Update {
        id: string;

        created_at: string;

        created_by: string;

        entitled: boolean;

        product_id: string;

        rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

        starting_at: string;

        credit_type?: Shared.CreditType;

        custom_rate?: Record<string, unknown>;

        ending_before?: string;

        is_prorated?: boolean;

        price?: number;

        quantity?: number;

        tiers?: Array<Update.Tier>;
      }

      export namespace Update {
        export interface Tier {
          price: number;

          size?: number;
        }
      }
    }

    export interface Alias {
      name: string;

      ending_before?: string;

      starting_at?: string;
    }

    export interface CreditTypeConversion {
      custom_credit_type: Shared.CreditType;

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

  fiat_credit_type?: Shared.CreditType;
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

      credit_type?: Shared.CreditType;

      custom_rate?: Record<string, unknown>;

      ending_before?: string;

      entitled?: boolean;

      price?: number;

      product_id?: string;

      rate_type?: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

      starting_at?: string;

      tiers?: Array<Current.Tier>;
    }

    export namespace Current {
      export interface Tier {
        price: number;

        size?: number;
      }
    }

    export interface Update {
      id: string;

      created_at: string;

      created_by: string;

      entitled: boolean;

      product_id: string;

      rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

      starting_at: string;

      credit_type?: Shared.CreditType;

      custom_rate?: Record<string, unknown>;

      ending_before?: string;

      is_prorated?: boolean;

      price?: number;

      quantity?: number;

      tiers?: Array<Update.Tier>;
    }

    export namespace Update {
      export interface Tier {
        price: number;

        size?: number;
      }
    }
  }

  export interface Alias {
    name: string;

    ending_before?: string;

    starting_at?: string;
  }

  export interface CreditTypeConversion {
    custom_credit_type: Shared.CreditType;

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
   * "The Metronome ID of the credit type to associate with the rate card, defaults
   * to USD (cents) if not passed."
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

export namespace RateCards {
  export import RateCardCreateResponse = RateCardsAPI.RateCardCreateResponse;
  export import RateCardRetrieveResponse = RateCardsAPI.RateCardRetrieveResponse;
  export import RateCardUpdateResponse = RateCardsAPI.RateCardUpdateResponse;
  export import RateCardListResponse = RateCardsAPI.RateCardListResponse;
  export import RateCardRetrieveRateScheduleResponse = RateCardsAPI.RateCardRetrieveRateScheduleResponse;
  export import RateCardListResponsesCursorPage = RateCardsAPI.RateCardListResponsesCursorPage;
  export import RateCardCreateParams = RateCardsAPI.RateCardCreateParams;
  export import RateCardRetrieveParams = RateCardsAPI.RateCardRetrieveParams;
  export import RateCardUpdateParams = RateCardsAPI.RateCardUpdateParams;
  export import RateCardListParams = RateCardsAPI.RateCardListParams;
  export import RateCardRetrieveRateScheduleParams = RateCardsAPI.RateCardRetrieveRateScheduleParams;
  export import ProductOrders = ProductOrdersAPI.ProductOrders;
  export import ProductOrderUpdateResponse = ProductOrdersAPI.ProductOrderUpdateResponse;
  export import ProductOrderSetResponse = ProductOrdersAPI.ProductOrderSetResponse;
  export import ProductOrderUpdateParams = ProductOrdersAPI.ProductOrderUpdateParams;
  export import ProductOrderSetParams = ProductOrdersAPI.ProductOrderSetParams;
  export import Rates = RatesAPI.Rates;
  export import RateListResponse = RatesAPI.RateListResponse;
  export import RateAddResponse = RatesAPI.RateAddResponse;
  export import RateAddManyResponse = RatesAPI.RateAddManyResponse;
  export import RateListResponsesCursorPage = RatesAPI.RateListResponsesCursorPage;
  export import RateListParams = RatesAPI.RateListParams;
  export import RateAddParams = RatesAPI.RateAddParams;
  export import RateAddManyParams = RatesAPI.RateAddManyParams;
  export import NamedSchedules = NamedSchedulesAPI.NamedSchedules;
  export import NamedScheduleRetrieveResponse = NamedSchedulesAPI.NamedScheduleRetrieveResponse;
  export import NamedScheduleRetrieveParams = NamedSchedulesAPI.NamedScheduleRetrieveParams;
  export import NamedScheduleUpdateParams = NamedSchedulesAPI.NamedScheduleUpdateParams;
}
