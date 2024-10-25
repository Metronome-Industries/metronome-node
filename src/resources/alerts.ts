// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AlertsAPI from './alerts';
import * as Shared from './shared';

export class Alerts extends APIResource {
  /**
   * Create a new alert
   */
  create(body: AlertCreateParams, options?: Core.RequestOptions): Core.APIPromise<AlertCreateResponse> {
    return this._client.post('/alerts/create', { body, ...options });
  }

  /**
   * Archive an existing alert
   */
  archive(body: AlertArchiveParams, options?: Core.RequestOptions): Core.APIPromise<AlertArchiveResponse> {
    return this._client.post('/alerts/archive', { body, ...options });
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

  credit_type_id?: string;

  /**
   * Only present for beta contract invoices. This field's availability is dependent
   * on your client's configuration. A list of custom field filters for alert types
   * that support advanced filtering
   */
  custom_field_filters?: Array<AlertCreateParams.CustomFieldFilter>;

  /**
   * If provided, will create this alert for this specific customer. To create an
   * alert for all customers, do not specify `customer_id` or `plan_id`.
   */
  customer_id?: string;

  /**
   * If true, the alert will evaluate immediately on customers that already meet the
   * alert threshold. If false, it will only evaluate on future customers that
   * trigger the alert threshold. Defaults to true.
   */
  evaluate_on_create?: boolean;

  /**
   * Scopes alert evaluation to a specific presentation group key on individual line
   * items. Only present for spend alerts.
   */
  group_key_filter?: AlertCreateParams.GroupKeyFilter;

  /**
   * Only supported for invoice_total_reached alerts. A list of invoice types to
   * evaluate.
   */
  invoice_types_filter?: Array<string>;

  /**
   * If provided, will create this alert for this specific plan. To create an alert
   * for all customers, do not specify `customer_id` or `plan_id`.
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

  /**
   * Scopes alert evaluation to a specific presentation group key on individual line
   * items. Only present for spend alerts.
   */
  export interface GroupKeyFilter {
    key: string;

    value: string;
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

export namespace Alerts {
  export import AlertCreateResponse = AlertsAPI.AlertCreateResponse;
  export import AlertArchiveResponse = AlertsAPI.AlertArchiveResponse;
  export import AlertCreateParams = AlertsAPI.AlertCreateParams;
  export import AlertArchiveParams = AlertsAPI.AlertArchiveParams;
}
