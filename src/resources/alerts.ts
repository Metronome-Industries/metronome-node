// File generated from our OpenAPI spec by Stainless.

import * as Core from 'metronome/core';
import { APIResource } from 'metronome/resource';
import * as AlertsAPI from 'metronome/resources/alerts';
import * as Shared from 'metronome/resources/shared';

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
    | 'usage_threshold_reached';

  /**
   * Name of the alert
   */
  name: string;

  /**
   * Threshold value of the alert policy
   */
  threshold: number;

  /**
   * For alerts of type `usage_threshold_reached`, specifies which billable metric to
   * track the usage for.
   */
  billable_metric_id?: string;

  credit_type_id?: string;

  /**
   * If provided, will create this alert for this specific customer. To create an
   * alert for all customers, do not specify `customer_id` or `plan_id`.
   */
  customer_id?: string;

  /**
   * If provided, will create this alert for this specific plan. To create an alert
   * for all customers, do not specify `customer_id` or `plan_id`.
   */
  plan_id?: string;
}

export interface AlertArchiveParams {
  id: string;
}

export namespace Alerts {
  export import AlertCreateResponse = AlertsAPI.AlertCreateResponse;
  export import AlertArchiveResponse = AlertsAPI.AlertArchiveResponse;
  export import AlertCreateParams = AlertsAPI.AlertCreateParams;
  export import AlertArchiveParams = AlertsAPI.AlertArchiveParams;
}
