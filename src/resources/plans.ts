// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@metronome/sdk/core';
import { APIResource } from '@metronome/sdk/resource';
import { isRequestOptions } from '@metronome/sdk/core';
import * as PlansAPI from '@metronome/sdk/resources/plans';
import * as Shared from '@metronome/sdk/resources/shared';
import * as CustomersAPI from '@metronome/sdk/resources/customers/customers';
import { CursorPage, type CursorPageParams } from '@metronome/sdk/pagination';

export class Plans extends APIResource {
  /**
   * List all available plans.
   */
  list(
    query?: PlanListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListResponsesCursorPage, PlanListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<PlanListResponsesCursorPage, PlanListResponse>;
  list(
    query: PlanListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListResponsesCursorPage, PlanListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/plans', PlanListResponsesCursorPage, { query, ...options });
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
  ): Core.PagePromise<PlanListChargesResponsesCursorPage, PlanListChargesResponse>;
  listCharges(
    planId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListChargesResponsesCursorPage, PlanListChargesResponse>;
  listCharges(
    planId: string,
    query: PlanListChargesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListChargesResponsesCursorPage, PlanListChargesResponse> {
    if (isRequestOptions(query)) {
      return this.listCharges(planId, {}, query);
    }
    return this._client.getAPIList(`/planDetails/${planId}/charges`, PlanListChargesResponsesCursorPage, {
      query,
      ...options,
    });
  }

  /**
   * Fetches a list of customers on a specific plan (by default, only currently
   * active plans are included)
   */
  listCustomers(
    planId: string,
    query?: PlanListCustomersParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListCustomersResponsesCursorPage, PlanListCustomersResponse>;
  listCustomers(
    planId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListCustomersResponsesCursorPage, PlanListCustomersResponse>;
  listCustomers(
    planId: string,
    query: PlanListCustomersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListCustomersResponsesCursorPage, PlanListCustomersResponse> {
    if (isRequestOptions(query)) {
      return this.listCustomers(planId, {}, query);
    }
    return this._client.getAPIList(`/planDetails/${planId}/customers`, PlanListCustomersResponsesCursorPage, {
      query,
      ...options,
    });
  }
}

export class PlanListResponsesCursorPage extends CursorPage<PlanListResponse> {}

export class PlanListChargesResponsesCursorPage extends CursorPage<PlanListChargesResponse> {}

export class PlanListCustomersResponsesCursorPage extends CursorPage<PlanListCustomersResponse> {}

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

    amount_granted_credit_type: Shared.CreditType;

    amount_paid: number;

    amount_paid_credit_type: Shared.CreditType;

    effective_duration: number;

    name: string;

    priority: string;

    send_invoice: boolean;

    reason?: string;

    recurrence_duration?: number;

    recurrence_interval?: number;
  }

  export interface Minimum {
    credit_type: Shared.CreditType;

    name: string;

    /**
     * Used in price ramps. Indicates how many billing periods pass before the charge
     * applies.
     */
    start_period: number;

    value: number;
  }

  export interface OverageRate {
    credit_type: Shared.CreditType;

    fiat_credit_type: Shared.CreditType;

    /**
     * Used in price ramps. Indicates how many billing periods pass before the charge
     * applies.
     */
    start_period: number;

    to_fiat_conversion_factor: number;
  }
}

export interface PlanListResponse {
  id: string;

  description: string;

  name: string;

  custom_fields?: Record<string, string>;
}

export interface PlanGetDetailsResponse {
  data: PlanDetail;
}

export interface PlanListChargesResponse {
  id: string;

  charge_type: 'usage' | 'fixed' | 'composite' | 'minimum' | 'seat';

  credit_type: Shared.CreditType;

  custom_fields: Record<string, string>;

  name: string;

  prices: Array<PlanListChargesResponse.Price>;

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
  unit_conversion?: PlanListChargesResponse.UnitConversion;
}

export namespace PlanListChargesResponse {
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

export interface PlanListCustomersResponse {
  customer_details: CustomersAPI.CustomerDetail;

  plan_details: PlanListCustomersResponse.PlanDetails;
}

export namespace PlanListCustomersResponse {
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

export interface PlanListParams extends CursorPageParams {}

export interface PlanListChargesParams extends CursorPageParams {}

export interface PlanListCustomersParams extends CursorPageParams {
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
  export import PlanListResponsesCursorPage = PlansAPI.PlanListResponsesCursorPage;
  export import PlanListChargesResponsesCursorPage = PlansAPI.PlanListChargesResponsesCursorPage;
  export import PlanListCustomersResponsesCursorPage = PlansAPI.PlanListCustomersResponsesCursorPage;
  export import PlanListParams = PlansAPI.PlanListParams;
  export import PlanListChargesParams = PlansAPI.PlanListChargesParams;
  export import PlanListCustomersParams = PlansAPI.PlanListCustomersParams;
}
