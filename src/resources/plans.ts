// File generated from our OpenAPI spec by Stainless.

import * as Core from '@metronome-industries/metronome/core';
import { APIResource } from '@metronome-industries/metronome/resource';
import { isRequestOptions } from '@metronome-industries/metronome/core';
import * as PlansAPI from '@metronome-industries/metronome/resources/plans';

export class Plans extends APIResource {
  /**
   * List all available plans.
   */
  list(query?: PlanListParams, options?: Core.RequestOptions): Core.APIPromise<PlanListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PlanListResponse>;
  list(
    query: PlanListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/plans', { query, ...options });
  }

  /**
   * Fetch high level details of a specific plan.
   */
  getDetails(planId: string, options?: Core.RequestOptions): Core.APIPromise<PlanGetDetailsResponse> {
    return this._client.get(`/planDetails/${planId}`, options);
  }

  /**
   * Fetches a list of charges of a specific plan.
   */
  listCharges(
    planId: string,
    query?: PlanListChargesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanListChargesResponse>;
  listCharges(planId: string, options?: Core.RequestOptions): Core.APIPromise<PlanListChargesResponse>;
  listCharges(
    planId: string,
    query: PlanListChargesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanListChargesResponse> {
    if (isRequestOptions(query)) {
      return this.listCharges(planId, {}, query);
    }
    return this._client.get(`/planDetails/${planId}/charges`, { query, ...options });
  }

  /**
   * Fetches a list of customers on a specific plan (by default, only currently
   * active plans are included)
   */
  listCustomers(
    planId: string,
    query?: PlanListCustomersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanListCustomersResponse>;
  listCustomers(planId: string, options?: Core.RequestOptions): Core.APIPromise<PlanListCustomersResponse>;
  listCustomers(
    planId: string,
    query: PlanListCustomersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanListCustomersResponse> {
    if (isRequestOptions(query)) {
      return this.listCustomers(planId, {}, query);
    }
    return this._client.get(`/planDetails/${planId}/customers`, { query, ...options });
  }
}

export interface PlanDetail {
  id: string;

  custom_fields: Record<string, string>;

  name: string;

  credit_grants?: Array<PlanDetail.CreditGrant>;

  description?: string;

  minimums?: Array<PlanDetail.Minimum>;

  overage_rates?: Array<PlanDetail.OverageRate>;
}

export namespace PlanDetail {
  export interface CreditGrant {
    amount_granted: number;

    amount_granted_credit_type: CreditGrant.AmountGrantedCreditType;

    amount_paid: number;

    amount_paid_credit_type: CreditGrant.AmountPaidCreditType;

    effective_duration: number;

    name: string;

    priority: string;

    send_invoice: boolean;

    reason?: string;

    recurrence_duration?: number;

    recurrence_interval?: number;
  }

  export namespace CreditGrant {
    export interface AmountGrantedCreditType {
      id: string;

      name: string;
    }

    export interface AmountPaidCreditType {
      id: string;

      name: string;
    }
  }

  export interface Minimum {
    credit_type: Minimum.CreditType;

    name: string;

    /**
     * Used in price ramps. Indicates how many billing periods pass before the charge
     * applies.
     */
    start_period: number;

    value: number;
  }

  export namespace Minimum {
    export interface CreditType {
      id: string;

      name: string;
    }
  }

  export interface OverageRate {
    credit_type: OverageRate.CreditType;

    fiat_credit_type: OverageRate.FiatCreditType;

    /**
     * Used in price ramps. Indicates how many billing periods pass before the charge
     * applies.
     */
    start_period: number;

    to_fiat_conversion_factor: number;
  }

  export namespace OverageRate {
    export interface CreditType {
      id: string;

      name: string;
    }

    export interface FiatCreditType {
      id: string;

      name: string;
    }
  }
}

export interface PlanListResponse {
  data: Array<PlanListResponse.Data>;

  next_page: string | null;
}

export namespace PlanListResponse {
  export interface Data {
    id: string;

    description: string;

    name: string;
  }
}

export interface PlanGetDetailsResponse {
  data: PlanGetDetailsResponse.Data;
}

export namespace PlanGetDetailsResponse {
  export interface Data {
    id: string;

    custom_fields: Record<string, string>;

    name: string;

    credit_grants?: Array<Data.CreditGrant>;

    description?: string;

    minimums?: Array<Data.Minimum>;

    overage_rates?: Array<Data.OverageRate>;
  }

  export namespace Data {
    export interface CreditGrant {
      amount_granted: number;

      amount_granted_credit_type: CreditGrant.AmountGrantedCreditType;

      amount_paid: number;

      amount_paid_credit_type: CreditGrant.AmountPaidCreditType;

      effective_duration: number;

      name: string;

      priority: string;

      send_invoice: boolean;

      reason?: string;

      recurrence_duration?: number;

      recurrence_interval?: number;
    }

    export namespace CreditGrant {
      export interface AmountGrantedCreditType {
        id: string;

        name: string;
      }

      export interface AmountPaidCreditType {
        id: string;

        name: string;
      }
    }

    export interface Minimum {
      credit_type: Minimum.CreditType;

      name: string;

      /**
       * Used in price ramps. Indicates how many billing periods pass before the charge
       * applies.
       */
      start_period: number;

      value: number;
    }

    export namespace Minimum {
      export interface CreditType {
        id: string;

        name: string;
      }
    }

    export interface OverageRate {
      credit_type: OverageRate.CreditType;

      fiat_credit_type: OverageRate.FiatCreditType;

      /**
       * Used in price ramps. Indicates how many billing periods pass before the charge
       * applies.
       */
      start_period: number;

      to_fiat_conversion_factor: number;
    }

    export namespace OverageRate {
      export interface CreditType {
        id: string;

        name: string;
      }

      export interface FiatCreditType {
        id: string;

        name: string;
      }
    }
  }
}

export interface PlanListChargesResponse {
  data: Array<PlanListChargesResponse.Data>;

  next_page: string | null;
}

export namespace PlanListChargesResponse {
  export interface Data {
    id: string;

    charge_type: 'usage' | 'fixed' | 'composite' | 'minimum' | 'seat';

    credit_type: Data.CreditType;

    custom_fields: Record<string, string>;

    name: string;

    prices: Array<Data.Price>;

    product_id: string;

    product_name: string;

    quantity?: number;

    /**
     * Used in price ramps. Indicates how many billing periods pass before the charge
     * applies.
     */
    start_period?: number;

    /**
     * Specifies how quantities for usage based charges will be converted.
     */
    unit_conversion?: Data.UnitConversion;
  }

  export namespace Data {
    export interface CreditType {
      id: string;

      name: string;
    }

    export interface Price {
      /**
       * Used in pricing tiers. Indicates at what metric value the price applies.
       */
      tier: number;

      value: number;

      collection_interval?: number;

      collection_schedule?: string;

      quantity?: number;
    }

    /**
     * Specifies how quantities for usage based charges will be converted.
     */
    export interface UnitConversion {
      /**
       * The conversion factor
       */
      division_factor: number;

      /**
       * Whether usage should be rounded down or up to the nearest whole number. If null,
       * quantity will be rounded to 20 decimal places.
       */
      rounding_behavior?: 'floor' | 'ceiling';
    }
  }
}

export interface PlanListCustomersResponse {
  data: Array<PlanListCustomersResponse.Data>;

  next_page: string | null;
}

export namespace PlanListCustomersResponse {
  export interface Data {
    customer_details: Data.CustomerDetails;

    plan_details: Data.PlanDetails;
  }

  export namespace Data {
    export interface CustomerDetails {
      /**
       * the Metronome ID of the customer
       */
      id: string;

      current_billable_status: CustomerDetails.CurrentBillableStatus;

      custom_fields: Record<string, string>;

      customer_config: CustomerDetails.CustomerConfig;

      /**
       * (deprecated, use ingest_aliases instead) the first ID (Metronome or ingest
       * alias) that can be used in usage events
       */
      external_id: string;

      /**
       * aliases for this customer that can be used instead of the Metronome customer ID
       * in usage events
       */
      ingest_aliases: Array<string>;

      name: string;
    }

    export namespace CustomerDetails {
      export interface CurrentBillableStatus {
        value: 'billable' | 'unbillable';

        effective_at?: string | null;
      }

      export interface CustomerConfig {
        /**
         * The Salesforce account ID for the customer
         */
        salesforce_account_id: string | null;
      }
    }

    export interface PlanDetails {
      id: string;

      custom_fields: Record<string, string>;

      customer_plan_id: string;

      name: string;

      /**
       * The start date of the plan
       */
      starting_on: string;

      /**
       * The end date of the plan
       */
      ending_before?: string | null;
    }
  }
}

export interface PlanListParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;

  /**
   * Cursor that indicates where the next page of results should start.
   */
  next_page?: string;
}

export interface PlanListChargesParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;

  /**
   * Cursor that indicates where the next page of results should start.
   */
  next_page?: string;
}

export interface PlanListCustomersParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;

  /**
   * Cursor that indicates where the next page of results should start.
   */
  next_page?: string;

  /**
   * Status of customers on a given plan. Defaults to `active`.
   *
   * - `all` - Return current, past, and upcoming customers of the plan.
   * - `active` - Return current customers of the plan.
   * - `ended` - Return past customers of the plan.
   * - `upcoming` - Return upcoming customers of the plan.
   *
   * Multiple statuses can be OR'd together using commas, e.g. `active,ended`.
   * **Note:** `ended,upcoming` combination is not yet supported.
   */
  status?: 'all' | 'active' | 'ended' | 'upcoming';
}

export namespace Plans {
  export import PlanDetail = PlansAPI.PlanDetail;
  export import PlanListResponse = PlansAPI.PlanListResponse;
  export import PlanGetDetailsResponse = PlansAPI.PlanGetDetailsResponse;
  export import PlanListChargesResponse = PlansAPI.PlanListChargesResponse;
  export import PlanListCustomersResponse = PlansAPI.PlanListCustomersResponse;
  export import PlanListParams = PlansAPI.PlanListParams;
  export import PlanListChargesParams = PlansAPI.PlanListChargesParams;
  export import PlanListCustomersParams = PlansAPI.PlanListCustomersParams;
}
