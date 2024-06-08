// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@metronome/sdk/core';
import { APIResource } from '@metronome/sdk/resource';
import { isRequestOptions } from '@metronome/sdk/core';
import * as PlansAPI from '@metronome/sdk/resources/customers/plans';
import * as Shared from '@metronome/sdk/resources/shared';

export class Plans extends APIResource {
  /**
   * List the given customer's plans in reverse-chronological order.
   */
  list(
    customerId: string,
    query?: PlanListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanListResponse>;
  list(customerId: string, options?: Core.RequestOptions): Core.APIPromise<PlanListResponse>;
  list(
    customerId: string,
    query: PlanListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanListResponse> {
    if (isRequestOptions(query)) {
      return this.list(customerId, {}, query);
    }
    return this._client.get(`/customers/${customerId}/plans`, { query, ...options });
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
  ): Core.APIPromise<PlanListPriceAdjustmentsResponse>;
  listPriceAdjustments(
    customerId: string,
    customerPlanId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanListPriceAdjustmentsResponse>;
  listPriceAdjustments(
    customerId: string,
    customerPlanId: string,
    query: PlanListPriceAdjustmentsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PlanListPriceAdjustmentsResponse> {
    if (isRequestOptions(query)) {
      return this.listPriceAdjustments(customerId, customerPlanId, {}, query);
    }
    return this._client.get(`/customers/${customerId}/plans/${customerPlanId}/priceAdjustments`, {
      query,
      ...options,
    });
  }
}

export interface PlanListResponse {
  data: Array<PlanListResponse.Data>;

  next_page: string | null;
}

export namespace PlanListResponse {
  export interface Data {
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

    trial_info?: Data.TrialInfo;
  }

  export namespace Data {
    export interface TrialInfo {
      ending_before: string;

      spending_caps: Array<TrialInfo.SpendingCap>;
    }

    export namespace TrialInfo {
      export interface SpendingCap {
        amount: number;

        amount_remaining: number;

        credit_type: Shared.CreditType;
      }
    }
  }
}

export interface PlanAddResponse {
  data: Shared.ID;
}

export interface PlanEndResponse {}

export interface PlanListPriceAdjustmentsResponse {
  data: Array<PlanListPriceAdjustmentsResponse.Data>;

  next_page: string | null;
}

export namespace PlanListPriceAdjustmentsResponse {
  export interface Data {
    charge_id: string;

    charge_type: 'usage' | 'fixed' | 'composite' | 'minimum' | 'seat';

    prices: Array<Data.Price>;

    start_period: number;

    quantity?: number;
  }

  export namespace Data {
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
   * An optional list of overage rates that override the rates of the original plan
   * configuration. These new rates will apply to all pricing ramps.
   */
  overage_rate_adjustments?: Array<PlanAddParams.OverageRateAdjustment>;

  /**
   * A list of price adjustments can be applied on top of the pricing in the plans.
   * See the
   * [price adjustments documentation](https://docs.metronome.com/pricing/managing-plans/#price-adjustments)
   * for details.
   */
  price_adjustments?: Array<PlanAddParams.PriceAdjustment>;

  /**
   * A custom trial can be set for the customer's plan. See the
   * [trial configuration documentation](https://docs.metronome.com/provisioning/configure-trials/)
   * for details.
   */
  trial_spec?: PlanAddParams.TrialSpec;
}

export namespace PlanAddParams {
  export interface OverageRateAdjustment {
    custom_credit_type_id: string;

    fiat_currency_credit_type_id: string;

    /**
     * The overage cost in fiat currency for each credit of the custom credit type.
     */
    to_fiat_conversion_factor: number;
  }

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

  /**
   * A custom trial can be set for the customer's plan. See the
   * [trial configuration documentation](https://docs.metronome.com/provisioning/configure-trials/)
   * for details.
   */
  export interface TrialSpec {
    /**
     * Length of the trial period in days.
     */
    length_in_days: number;

    spending_cap?: TrialSpec.SpendingCap;
  }

  export namespace TrialSpec {
    export interface SpendingCap {
      /**
       * The credit amount in the given denomination based on the credit type, e.g. US
       * cents.
       */
      amount: number;

      /**
       * The credit type ID for the spending cap.
       */
      credit_type_id: string;
    }
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

export interface PlanListPriceAdjustmentsParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;

  /**
   * Cursor that indicates where the next page of results should start.
   */
  next_page?: string;
}

export namespace Plans {
  export import PlanListResponse = PlansAPI.PlanListResponse;
  export import PlanAddResponse = PlansAPI.PlanAddResponse;
  export import PlanEndResponse = PlansAPI.PlanEndResponse;
  export import PlanListPriceAdjustmentsResponse = PlansAPI.PlanListPriceAdjustmentsResponse;
  export import PlanListParams = PlansAPI.PlanListParams;
  export import PlanAddParams = PlansAPI.PlanAddParams;
  export import PlanEndParams = PlansAPI.PlanEndParams;
  export import PlanListPriceAdjustmentsParams = PlansAPI.PlanListPriceAdjustmentsParams;
}
