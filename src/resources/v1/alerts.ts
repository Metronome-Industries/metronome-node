// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Alerts extends APIResource {
  /**
   * Create a new threshold notification to monitor customer spending, balances, and
   * billing metrics in real-time. Metronome's notification system provides
   * industry-leading speed with immediate evaluation capabilities, enabling you to
   * proactively manage customer accounts and prevent revenue leakage.
   *
   * This endpoint creates configurable threshold notifications that continuously
   * monitor various billing thresholds including spend limits, credit balances,
   * commitment utilization, and invoice totals. Threshold notifications can be
   * configured globally for all customers or targeted to specific customer accounts.
   *
   * ### Use this endpoint to:
   *
   * - Proactively monitor customer spending patterns to prevent unexpected overages
   *   or credit exhaustion
   * - Automate notifications when customers approach commitment limits or credit
   *   thresholds
   * - Enable real-time intervention for accounts at risk of churn or payment issues
   * - Scale billing operations by automating threshold-based workflows and
   *   notifications
   *
   * ### Key response fields:
   *
   * A successful response returns a CustomerAlert object containing:
   *
   * - The threshold notification configuration with its unique ID and current status
   * - The customer's evaluation status (ok, in_alarm, or evaluating)
   * - Threshold notification metadata including type, threshold values, and update
   *   timestamps
   *
   * ### Usage guidelines:
   *
   * - Immediate evaluation: Set `evaluate_on_create` : `true` (default) for instant
   *   evaluation against existing customers
   * - Uniqueness constraints: Each threshold notification must have a unique
   *   `uniqueness_key` within your organization. Use `release_uniqueness_key` :
   *   `true` when archiving to reuse keys
   * - Notification type requirements: Different threshold notification types require
   *   specific fields (e.g., `billable_metric_id` for usage notifications,
   *   `credit_type_id` for credit-based threshold notifications)
   * - Webhook delivery: Threshold notifications trigger webhook notifications for
   *   real-time integration with your systems. Configure webhook endpoints before
   *   creating threshold notifications
   * - Performance at scale: Metronome's event-driven architecture processes
   *   threshold notification evaluations in real-time as usage events stream in,
   *   unlike competitors who rely on periodic polling or batch evaluation cycles
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
  create(body: AlertCreateParams, options?: RequestOptions): APIPromise<AlertCreateResponse> {
    return this._client.post('/v1/alerts/create', { body, ...options });
  }

  /**
   * Permanently disable a threshold notification and remove it from active
   * monitoring across all customers. Archived threshold notifications stop
   * evaluating immediately and can optionally release their uniqueness key for reuse
   * in future threshold notification configurations.
   *
   * ### Use this endpoint to:
   *
   * - Decommission threshold notifications that are no longer needed
   * - Clean up test or deprecated threshold notification configurations
   * - Free up uniqueness keys for reuse with new threshold notifications
   * - Stop threshold notification evaluations without losing historical
   *   configuration data
   * - Disable outdated monitoring rules during pricing model transitions
   *
   * ### Key response fields:
   *
   * - data: Object containing the archived threshold notification's ID
   *
   * ### Usage guidelines:
   *
   * - Irreversible for evaluation: Archived threshold notifications cannot be
   *   re-enabled; create a new threshold notification to resume monitoring
   * - Uniqueness key handling: Set `release_uniqueness_key` : `true` to reuse the
   *   key in future threshold notifications
   * - Immediate effect: Threshold notification evaluation stops instantly across all
   *   customers
   * - Historical preservation: Archive operation maintains threshold notification
   *   history and configuration for compliance and auditing
   *
   * @example
   * ```ts
   * const response = await client.v1.alerts.archive({
   *   id: '8deed800-1b7a-495d-a207-6c52bac54dc9',
   * });
   * ```
   */
  archive(body: AlertArchiveParams, options?: RequestOptions): APIPromise<AlertArchiveResponse> {
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
   * Type of the threshold notification
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
    | 'invoice_total_reached'
    | 'low_remaining_seat_balance_reached';

  /**
   * Name of the threshold notification
   */
  name: string;

  /**
   * Threshold value of the notification policy. Depending upon the notification
   * type, this number may represent a financial amount, the days remaining, or a
   * percentage reached.
   */
  threshold: number;

  /**
   * For threshold notifications of type `usage_threshold_reached`, specifies which
   * billable metric to track the usage for.
   */
  billable_metric_id?: string;

  /**
   * An array of strings, representing a way to filter the credit grant this
   * threshold notification applies to, by looking at the credit_grant_type field on
   * the credit grant. This field is only defined for CreditPercentage and
   * CreditBalance notifications
   */
  credit_grant_type_filters?: Array<string>;

  /**
   * ID of the credit's currency, defaults to USD. If the specific notification type
   * requires a pricing unit/currency, find the ID in the
   * [Metronome app](https://app.metronome.com/offering/pricing-units).
   */
  credit_type_id?: string;

  /**
   * A list of custom field filters for threshold notification types that support
   * advanced filtering. Only present for contract invoices.
   */
  custom_field_filters?: Array<AlertCreateParams.CustomFieldFilter>;

  /**
   * If provided, will create this threshold notification for this specific customer.
   * To create a notification for all customers, do not specify a `customer_id`.
   */
  customer_id?: string;

  /**
   * If true, the threshold notification will evaluate immediately on customers that
   * already meet the notification threshold. If false, it will only evaluate on
   * future customers that trigger the threshold. Defaults to true.
   */
  evaluate_on_create?: boolean;

  /**
   * Only present for `spend_threshold_reached` notifications. Scope notification to
   * a specific group key on individual line items.
   */
  group_values?: Array<AlertCreateParams.GroupValue>;

  /**
   * Only supported for invoice_total_reached threshold notifications. A list of
   * invoice types to evaluate.
   */
  invoice_types_filter?: Array<string>;

  /**
   * If provided, will create this threshold notification for this specific plan. To
   * create a notification for all customers, do not specify a `plan_id`.
   */
  plan_id?: string;

  /**
   * Required for `low_remaining_seat_balance_reached` notifications. The alert is
   * scoped to this seat group key-value pair.
   */
  seat_filter?: AlertCreateParams.SeatFilter;

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

  /**
   * Required for `low_remaining_seat_balance_reached` notifications. The alert is
   * scoped to this seat group key-value pair.
   */
  export interface SeatFilter {
    /**
     * The seat group key (e.g., "seat_id", "user_id")
     */
    seat_group_key: string;

    /**
     * Optional seat identifier the alert is scoped to.
     */
    seat_group_value?: string;
  }
}

export interface AlertArchiveParams {
  /**
   * The Metronome ID of the threshold notification
   */
  id: string;

  /**
   * If true, resets the uniqueness key on this threshold notification so it can be
   * re-used
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
