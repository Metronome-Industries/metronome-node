// File generated from our OpenAPI spec by Stainless.

import * as Core from '@metronome-industries/metronome/core';
import { APIResource } from '@metronome-industries/metronome/resource';
import * as CustomerAlertsAPI from '@metronome-industries/metronome/resources/customer-alerts';
import { Page, type PageParams } from '@metronome-industries/metronome/pagination';

export class CustomerAlerts extends APIResource {
  /**
   * Get the customer alert status and alert information for the specified customer
   * and alert
   */
  retrieve(
    body: CustomerAlertRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerAlertRetrieveResponse> {
    return this._client.post('/customer-alerts/get', { body, ...options });
  }

  /**
   * Fetch all customer alert statuses and alert information for a customer
   */
  list(
    params: CustomerAlertListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerAlertsPage, CustomerAlert> {
    const { next_page, ...body } = params;
    return this._client.getAPIList('/customer-alerts/list', CustomerAlertsPage, {
      query: { next_page },
      body,
      method: 'post',
      ...options,
    });
  }
}

export class CustomerAlertsPage extends Page<CustomerAlert> {}

export interface CustomerAlert {
  alert: CustomerAlert.Alert;

  /**
   * The status of the customer alert. If the alert is archived, null will be
   * returned.
   */
  customer_status: 'ok' | 'in_alarm' | 'evaluating' | null;
}

export namespace CustomerAlert {
  export interface Alert {
    /**
     * the Metronome ID of the alert
     */
    id: string;

    credit_type: Alert.CreditType | null;

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
      | 'usage_threshold_reached';

    /**
     * Timestamp for when the alert was last updated
     */
    updated_at: string;
  }

  export namespace Alert {
    export interface CreditType {
      id: string;

      name: string;
    }
  }
}

export interface CustomerAlertRetrieveResponse {
  data: CustomerAlert;
}

export interface CustomerAlertRetrieveParams {
  /**
   * The Metronome ID of the alert
   */
  alert_id: string;

  /**
   * The Metronome ID of the customer
   */
  customer_id: string;
}

export interface CustomerAlertListParams extends PageParams {
  /**
   * Body param: The Metronome ID of the customer
   */
  customer_id: string;

  /**
   * Body param: Optionally filter by alert status. If absent, only enabled alerts
   * will be returned.
   */
  alert_statuses?: Array<
    | 'enabled'
    | 'disabled'
    | 'archived'
    | 'ENABLED'
    | 'DISABLED'
    | 'ARCHIVED'
    | 'Enabled'
    | 'Disabled'
    | 'Archived'
  >;
}

export namespace CustomerAlerts {
  export import CustomerAlert = CustomerAlertsAPI.CustomerAlert;
  export import CustomerAlertRetrieveResponse = CustomerAlertsAPI.CustomerAlertRetrieveResponse;
  export import CustomerAlertsPage = CustomerAlertsAPI.CustomerAlertsPage;
  export import CustomerAlertRetrieveParams = CustomerAlertsAPI.CustomerAlertRetrieveParams;
  export import CustomerAlertListParams = CustomerAlertsAPI.CustomerAlertListParams;
}
