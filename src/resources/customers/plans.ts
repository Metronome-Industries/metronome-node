// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class Plans extends APIResource {
  /**
   * List the given customer's plans in reverse-chronological order.
   */
  list(
    params: PlanListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListResponsesCursorPage, PlanListResponse> {
    const { customer_id, ...query } = params;
    return this._client.getAPIList(`/customers/${customer_id}/plans`, PlanListResponsesCursorPage, {
      query,
      ...options,
    });
  }

  /**
   * Associate an existing customer with a plan for a specified date range. See the
   * [price adjustments documentation](https://docs.metronome.com/pricing/managing-plans/#price-adjustments)
   * for details on the price adjustments.
   */
  add(params: PlanAddParams, options?: Core.RequestOptions): Core.APIPromise<PlanAddResponse> {
    const { customer_id, ...body } = params;
    return this._client.post(`/customers/${customer_id}/plans/add`, { body, ...options });
  }

  /**
   * Change the end date of a customer's plan.
   */
  end(params: PlanEndParams, options?: Core.RequestOptions): Core.APIPromise<PlanEndResponse> {
    const { customer_id, customer_plan_id, ...body } = params;
    return this._client.post(`/customers/${customer_id}/plans/${customer_plan_id}/end`, { body, ...options });
  }

  /**
   * Lists a customer plans adjustments. See the
   * [price adjustments documentation](https://docs.metronome.com/pricing/managing-plans/#price-adjustments)
   * for details.
   */
  listPriceAdjustments(
    params: PlanListPriceAdjustmentsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PlanListPriceAdjustmentsResponsesCursorPage, PlanListPriceAdjustmentsResponse> {
    const { customer_id, customer_plan_id, ...query } = params;
    return this._client.getAPIList(
      `/customers/${customer_id}/plans/${customer_plan_id}/priceAdjustments`,
      PlanListPriceAdjustmentsResponsesCursorPage,
      { query, ...options },
    );
  }
}

export class PlanListResponsesCursorPage extends CursorPage<PlanListResponse> {}

export class PlanListPriceAdjustmentsResponsesCursorPage extends CursorPage<PlanListPriceAdjustmentsResponse> {}

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

      credit_type: Shared.CreditTypeData;
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

export interface PlanListParams extends CursorPageParams {
  /**
   * Path param:
   */
  customer_id: string;
}

export interface PlanAddParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Body param:
   */
  plan_id: string;

  /**
   * Body param: RFC 3339 timestamp for when the plan becomes active for this
   * customer. Must be at 0:00 UTC (midnight).
   */
  starting_on: string;

  /**
   * Body param: RFC 3339 timestamp for when the plan ends (exclusive) for this
   * customer. Must be at 0:00 UTC (midnight).
   */
  ending_before?: string;

  /**
   * Body param: Number of days after issuance of invoice after which the invoice is
   * due (e.g. Net 30).
   */
  net_payment_terms_days?: number;

  /**
   * Body param: An optional list of overage rates that override the rates of the
   * original plan configuration. These new rates will apply to all pricing ramps.
   */
  overage_rate_adjustments?: Array<PlanAddParams.OverageRateAdjustment>;

  /**
   * Body param: A list of price adjustments can be applied on top of the pricing in
   * the plans. See the
   * [price adjustments documentation](https://docs.metronome.com/pricing/managing-plans/#price-adjustments)
   * for details.
   */
  price_adjustments?: Array<PlanAddParams.PriceAdjustment>;

  /**
   * Body param: A custom trial can be set for the customer's plan. See the
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
   * Path param:
   */
  customer_id: string;

  /**
   * Path param: the ID of a customer-plan relationship
   */
  customer_plan_id: string;

  /**
   * Body param: RFC 3339 timestamp for when the plan ends (exclusive) for this
   * customer. Must be at 0:00 UTC (midnight). If not provided, the plan end date
   * will be cleared.
   */
  ending_before?: string;

  /**
   * Body param: If true, plan end date can be before the last finalized invoice
   * date. Any invoices generated after the plan end date will be voided.
   */
  void_invoices?: boolean;

  /**
   * Body param: Only applicable when void_invoices is set to true. If true, for
   * every invoice that is voided we will also attempt to void/delete the stripe
   * invoice (if any). Stripe invoices will be voided if finalized or deleted if
   * still in draft state.
   */
  void_stripe_invoices?: boolean;
}

export interface PlanListPriceAdjustmentsParams extends CursorPageParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Path param: the ID of a customer-plan relationship
   */
  customer_plan_id: string;
}

Plans.PlanListResponsesCursorPage = PlanListResponsesCursorPage;
Plans.PlanListPriceAdjustmentsResponsesCursorPage = PlanListPriceAdjustmentsResponsesCursorPage;

export declare namespace Plans {
  export {
    type PlanListResponse as PlanListResponse,
    type PlanAddResponse as PlanAddResponse,
    type PlanEndResponse as PlanEndResponse,
    type PlanListPriceAdjustmentsResponse as PlanListPriceAdjustmentsResponse,
    PlanListResponsesCursorPage as PlanListResponsesCursorPage,
    PlanListPriceAdjustmentsResponsesCursorPage as PlanListPriceAdjustmentsResponsesCursorPage,
    type PlanListParams as PlanListParams,
    type PlanAddParams as PlanAddParams,
    type PlanEndParams as PlanEndParams,
    type PlanListPriceAdjustmentsParams as PlanListPriceAdjustmentsParams,
  };
}
