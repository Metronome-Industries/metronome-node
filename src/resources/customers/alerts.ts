// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AlertsAPI from './alerts';
import * as Shared from '../shared';

export class Alerts extends APIResource {
  /**
   * Get the customer alert status and alert information for the specified customer
   * and alert
   */
  retrieve(body: AlertRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<AlertRetrieveResponse> {
    return this._client.post('/customer-alerts/get', { body, ...options });
  }

  /**
   * Fetch all customer alert statuses and alert information for a customer
   */
  list(params: AlertListParams, options?: Core.RequestOptions): Core.APIPromise<AlertListResponse> {
    const { next_page, ...body } = params;
    return this._client.post('/customer-alerts/list', { query: { next_page }, body, ...options });
  }

  /**
   * Reset state for an alert by customer id and force re-evaluation
   */
  reset(body: AlertResetParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/customer-alerts/reset', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CustomerAlert {
  alert: CustomerAlert.Alert;

  /**
   * The status of the customer alert. If the alert is archived, null will be
   * returned.
   */
  customer_status: 'ok' | 'in_alarm' | 'evaluating' | null;

  /**
   * If present, indicates the reason the alert was triggered.
   */
  triggered_by?: string | null;
}

export namespace CustomerAlert {
  export interface Alert {
    /**
     * the Metronome ID of the alert
     */
    id: string;

    /**
     * Name of the alert
     */
    name: string;

    /**
     * Status of the alert
     */
    status: 'enabled' | 'archived' | 'disabled';

    /**
     * Threshold value of the alert policy
     */
    threshold: number;

    /**
     * Type of the alert
     */
    type:
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
     * Timestamp for when the alert was last updated
     */
    updated_at: string;

    /**
     * An array of strings, representing a way to filter the credit grant this alert
     * applies to, by looking at the credit_grant_type field on the credit grant. This
     * field is only defined for CreditPercentage and CreditBalance alerts
     */
    credit_grant_type_filters?: Array<string>;

    credit_type?: Shared.CreditType | null;

    /**
     * A list of custom field filters for alert types that support advanced filtering
     */
    custom_field_filters?: Array<Alert.CustomFieldFilter>;

    /**
     * Scopes alert evaluation to a specific presentation group key on individual line
     * items. Only present for spend alerts.
     */
    group_key_filter?: Alert.GroupKeyFilter;

    /**
     * Only supported for invoice_total_reached alerts. A list of invoice types to
     * evaluate.
     */
    invoice_types_filter?: Array<string>;

    /**
     * Prevents the creation of duplicates. If a request to create a record is made
     * with a previously used uniqueness key, a new record will not be created and the
     * request will fail with a 409 error.
     */
    uniqueness_key?: string;
  }

  export namespace Alert {
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
}

export interface AlertRetrieveResponse {
  data: CustomerAlert;
}

export interface AlertListResponse {
  data: Array<CustomerAlert>;

  next_page: string | null;
}

export interface AlertRetrieveParams {
  /**
   * The Metronome ID of the alert
   */
  alert_id: string;

  /**
   * The Metronome ID of the customer
   */
  customer_id: string;
}

export interface AlertListParams {
  /**
   * Body param: The Metronome ID of the customer
   */
  customer_id: string;

  /**
   * Query param: Cursor that indicates where the next page of results should start.
   */
  next_page?: string;

  /**
   * Body param: Optionally filter by alert status. If absent, only enabled alerts
   * will be returned.
   */
  alert_statuses?: Array<'ENABLED' | 'DISABLED' | 'ARCHIVED'>;
}

export interface AlertResetParams {
  /**
   * The Metronome ID of the alert
   */
  alert_id: string;

  /**
   * The Metronome ID of the customer
   */
  customer_id: string;
}

export namespace Alerts {
  export import CustomerAlert = AlertsAPI.CustomerAlert;
  export import AlertRetrieveResponse = AlertsAPI.AlertRetrieveResponse;
  export import AlertListResponse = AlertsAPI.AlertListResponse;
  export import AlertRetrieveParams = AlertsAPI.AlertRetrieveParams;
  export import AlertListParams = AlertsAPI.AlertListParams;
  export import AlertResetParams = AlertsAPI.AlertResetParams;
}
