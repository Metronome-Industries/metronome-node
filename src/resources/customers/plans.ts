// File generated from our OpenAPI spec by Stainless.

import * as Core from '@metronome-industries/metronome/core';
import { APIResource } from '@metronome-industries/metronome/resource';
import { isRequestOptions } from '@metronome-industries/metronome/core';
import * as PlansAPI from '@metronome-industries/metronome/resources/customers/plans';
import * as Shared from '@metronome-industries/metronome/resources/shared';
import { Page, type PageParams } from '@metronome-industries/metronome/pagination';

export class Plans extends APIResource {
  /**
   * List the given customer's plans in reverse-chronological order.
   */
  list(
    customerId: string,
    query?: PlanListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListResponsesPage, PlanListResponse>;
  list(
    customerId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListResponsesPage, PlanListResponse>;
  list(
    customerId: string,
    query: PlanListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListResponsesPage, PlanListResponse> {
    if (isRequestOptions(query)) {
      return this.list(customerId, {}, query);
    }
    return this._client.getAPIList(`/customers/${customerId}/plans`, PlanListResponsesPage, {
      query,
      ...options,
    });
  }

  /**
   * Associate an existing customer with a plan for a specified date range. See the
   * [price adjustments documentation](https://docs.metronome.com/pricing/managing-plans/#price-adjustments)
   * for details on the price adjustments.
   */
  add(
    customerId: string,
    body: PlanAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanAddResponse> {
    return this._client.post(`/customers/${customerId}/plans/add`, { body, ...options });
  }

  /**
   * Change the end date of a customer's plan.
   */
  end(
    customerId: string,
    customerPlanId: string,
    body?: PlanEndParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanEndResponse>;
  end(
    customerId: string,
    customerPlanId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanEndResponse>;
  end(
    customerId: string,
    customerPlanId: string,
    body: PlanEndParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanEndResponse> {
    if (isRequestOptions(body)) {
      return this.end(customerId, customerPlanId, {}, body);
    }
    return this._client.post(`/customers/${customerId}/plans/${customerPlanId}/end`, { body, ...options });
  }

  /**
   * Lists a customer plans adjustments. See the
   * [price adjustments documentation](https://docs.metronome.com/pricing/managing-plans/#price-adjustments)
   * for details.
   */
  listPriceAdjustments(
    customerId: string,
    customerPlanId: string,
    query?: PlanListPriceAdjustmentsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListPriceAdjustmentsResponsesPage, PlanListPriceAdjustmentsResponse>;
  listPriceAdjustments(
    customerId: string,
    customerPlanId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListPriceAdjustmentsResponsesPage, PlanListPriceAdjustmentsResponse>;
  listPriceAdjustments(
    customerId: string,
    customerPlanId: string,
    query: PlanListPriceAdjustmentsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListPriceAdjustmentsResponsesPage, PlanListPriceAdjustmentsResponse> {
    if (isRequestOptions(query)) {
      return this.listPriceAdjustments(customerId, customerPlanId, {}, query);
    }
    return this._client.getAPIList(
      `/customers/${customerId}/plans/${customerPlanId}/priceAdjustments`,
      PlanListPriceAdjustmentsResponsesPage,
      { query, ...options },
    );
  }
}

export class PlanListResponsesPage extends Page<PlanListResponse> {}

export class PlanListPriceAdjustmentsResponsesPage extends Page<PlanListPriceAdjustmentsResponse> {}

export interface PlanListResponse {
  /**
   * the ID of the customer plan
   */
  id: string;

  custom_fields: Record<string, string>;

  plan_description: string;

  /**
   * the ID of the plan
   */
  plan_id: string;

  plan_name: string;

  starting_on: string;

  ending_before?: string;

  net_payment_terms_days?: number;

  trial_info?: PlanListResponse.TrialInfo;
}

export namespace PlanListResponse {
  export interface TrialInfo {
    ending_before: string;

    spending_caps: Array<TrialInfo.SpendingCap>;
  }

  export namespace TrialInfo {
    export interface SpendingCap {
      amount: number;

      amount_remaining: number;

      credit_type: SpendingCap.CreditType;
    }

    export namespace SpendingCap {
      export interface CreditType {
        id: string;

        name: string;
      }
    }
  }
}

export interface PlanAddResponse {
  data: Shared.ID;
}

export interface PlanEndResponse {}

export interface PlanListPriceAdjustmentsResponse {
  charge_id: string;

  charge_type: 'usage' | 'fixed' | 'composite' | 'minimum' | 'seat';

  prices: Array<PlanListPriceAdjustmentsResponse.Price>;

  start_period: number;

  quantity?: number;
}

export namespace PlanListPriceAdjustmentsResponse {
  export interface Price {
    /**
     * Determines how the value will be applied.
     */
    adjustment_type: 'fixed' | 'quantity' | 'percentage' | 'override';

    /**
     * Used in pricing tiers. Indicates at what metric value the price applies.
     */
    tier?: number;

    value?: number;
  }
}

export interface PlanListParams extends PageParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;
}

export interface PlanAddParams {
  plan_id: string;

  /**
   * RFC 3339 timestamp for when the plan becomes active for this customer. Must be
   * at 0:00 UTC (midnight).
   */
  starting_on: string;

  /**
   * RFC 3339 timestamp for when the plan ends (exclusive) for this customer. Must be
   * at 0:00 UTC (midnight).
   */
  ending_before?: string;

  /**
   * Number of days after issuance of invoice after which the invoice is due (e.g.
   * Net 30).
   */
  net_payment_terms_days?: number;

  /**
   * A list of price adjustments can be applied on top of the pricing in the plans.
   * See the
   * [price adjustments documentation](https://docs.metronome.com/pricing/managing-plans/#price-adjustments)
   * for details.
   */
  price_adjustments?: Array<PlanAddParams.PriceAdjustment>;
}

export namespace PlanAddParams {
  export interface PriceAdjustment {
    adjustment_type: 'percentage' | 'fixed' | 'override' | 'quantity';

    charge_id: string;

    /**
     * Used in price ramps. Indicates how many billing periods pass before the charge
     * applies.
     */
    start_period: number;

    /**
     * the overridden quantity for a fixed charge
     */
    quantity?: number;

    /**
     * Used in pricing tiers. Indicates at what metric value the price applies.
     */
    tier?: number;

    /**
     * The amount of change to a price. Percentage and fixed adjustments can be
     * positive or negative. Percentage-based adjustments should be decimals, e.g.
     * -0.05 for a 5% discount.
     */
    value?: number;
  }
}

export interface PlanEndParams {
  /**
   * RFC 3339 timestamp for when the plan ends (exclusive) for this customer. Must be
   * at 0:00 UTC (midnight). If not provided, the plan end date will be cleared.
   */
  ending_before?: string;

  /**
   * If true, plan end date can be before the last finalized invoice date. Any
   * invoices generated after the plan end date will be voided.
   */
  void_invoices?: boolean;

  /**
   * Only applicable when void_invoices is set to true. If true, for every invoice
   * that is voided we will also attempt to void/delete the stripe invoice (if any).
   * Stripe invoices will be voided if finalized or deleted if still in draft state.
   */
  void_stripe_invoices?: boolean;
}

export interface PlanListPriceAdjustmentsParams extends PageParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;
}

export namespace Plans {
  export import PlanListResponse = PlansAPI.PlanListResponse;
  export import PlanAddResponse = PlansAPI.PlanAddResponse;
  export import PlanEndResponse = PlansAPI.PlanEndResponse;
  export import PlanListPriceAdjustmentsResponse = PlansAPI.PlanListPriceAdjustmentsResponse;
  export import PlanListResponsesPage = PlansAPI.PlanListResponsesPage;
  export import PlanListPriceAdjustmentsResponsesPage = PlansAPI.PlanListPriceAdjustmentsResponsesPage;
  export import PlanListParams = PlansAPI.PlanListParams;
  export import PlanAddParams = PlansAPI.PlanAddParams;
  export import PlanEndParams = PlansAPI.PlanEndParams;
  export import PlanListPriceAdjustmentsParams = PlansAPI.PlanListPriceAdjustmentsParams;
}
