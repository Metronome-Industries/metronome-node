// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Alerts extends APIResource {
  /**
   * Create a new alert
   *
   * @example
   * ```ts
   * const alert = await client.v1.alerts.create({
   *   alert_type: 'spend_threshold_reached',
   *   name: '$100 spend threshold reached',
   *   threshold: 10000,
   *   credit_grant_type_filters: ['enterprise'],
   *   credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
   *   customer_id: '4db51251-61de-4bfe-b9ce-495e244f3491',
   * });
   * ```
   */
  create(body: AlertCreateParams, options?: Core.RequestOptions): Core.APIPromise<AlertCreateResponse> {
    return this._client.post('/v1/alerts/create', { body, ...options });
  }

  /**
   * Archive an existing alert
   *
   * @example
   * ```ts
   * const response = await client.v1.alerts.archive({
   *   id: '8deed800-1b7a-495d-a207-6c52bac54dc9',
   * });
   * ```
   */
  archive(body: AlertArchiveParams, options?: Core.RequestOptions): Core.APIPromise<AlertArchiveResponse> {
    return this._client.post('/v1/alerts/archive', { body, ...options });
  }
}

export interface AlertCreateResponse {
  data: Shared.ID;
}

export interface AlertArchiveResponse {
  data: Shared.ID;
}

export interface AlertCreateParams {
  /**
   * Type of the alert
   */
  alert_type:
    | 'low_credit_balance_reached'
    | 'spend_threshold_reached'
    | 'monthly_invoice_total_spend_threshold_reached'
    | 'low_remaining_days_in_plan_reached'
    | 'low_remaining_credit_percentage_reached'
    | 'usage_threshold_reached'
    | 'low_remaining_days_for_commit_segment_reached'
    | 'low_remaining_commit_balance_reached'
    | 'low_remaining_commit_percentage_reached'
    | 'low_remaining_days_for_contract_credit_segment_reached'
    | 'low_remaining_contract_credit_balance_reached'
    | 'low_remaining_contract_credit_percentage_reached'
    | 'low_remaining_contract_credit_and_commit_balance_reached'
    | 'invoice_total_reached';

  /**
   * Name of the alert
   */
  name: string;

  /**
   * Threshold value of the alert policy. Depending upon the alert type, this number
   * may represent a financial amount, the days remaining, or a percentage reached.
   */
  threshold: number;

  /**
   * For alerts of type `usage_threshold_reached`, specifies which billable metric to
   * track the usage for.
   */
  billable_metric_id?: string;

  /**
   * An array of strings, representing a way to filter the credit grant this alert
   * applies to, by looking at the credit_grant_type field on the credit grant. This
   * field is only defined for CreditPercentage and CreditBalance alerts
   */
  credit_grant_type_filters?: Array<string>;

  /**
   * ID of the credit's currency, defaults to USD. If the specific alert type
   * requires a pricing unit/currency, find the ID in the
   * [Metronome app](https://app.metronome.com/offering/pricing-units).
   */
  credit_type_id?: string;

  /**
   * A list of custom field filters for alert types that support advanced filtering.
   * Only present for contract invoices.
   */
  custom_field_filters?: Array<AlertCreateParams.CustomFieldFilter>;

  /**
   * If provided, will create this alert for this specific customer. To create an
   * alert for all customers, do not specify a `customer_id`.
   */
  customer_id?: string;

  /**
   * If true, the alert will evaluate immediately on customers that already meet the
   * alert threshold. If false, it will only evaluate on future customers that
   * trigger the alert threshold. Defaults to true.
   */
  evaluate_on_create?: boolean;

  /**
   * Only present for `spend_threshold_reached` alerts. Scope alert to a specific
   * group key on individual line items.
   */
  group_values?: Array<AlertCreateParams.GroupValue>;

  /**
   * Only supported for invoice_total_reached alerts. A list of invoice types to
   * evaluate.
   */
  invoice_types_filter?: Array<string>;

  /**
   * If provided, will create this alert for this specific plan. To create an alert
   * for all customers, do not specify a `plan_id`.
   */
  plan_id?: string;

  /**
   * Prevents the creation of duplicates. If a request to create a record is made
   * with a previously used uniqueness key, a new record will not be created and the
   * request will fail with a 409 error.
   */
  uniqueness_key?: string;
}

export namespace AlertCreateParams {
  export interface CustomFieldFilter {
    entity: 'Contract' | 'Commit' | 'ContractCredit';

    key: string;

    value: string;
  }

  export interface GroupValue {
    key: string;

    value?: string;
  }
}

export interface AlertArchiveParams {
  /**
   * The Metronome ID of the alert
   */
  id: string;

  /**
   * If true, resets the uniqueness key on this alert so it can be re-used
   */
  release_uniqueness_key?: boolean;
}

export declare namespace Alerts {
  export {
    type AlertCreateResponse as AlertCreateResponse,
    type AlertArchiveResponse as AlertArchiveResponse,
    type AlertCreateParams as AlertCreateParams,
    type AlertArchiveParams as AlertArchiveParams,
  };
}
