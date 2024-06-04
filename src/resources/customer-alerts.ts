// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as CustomerAlertsAPI from './customer-alerts';

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
  ): Core.APIPromise<CustomerAlertListResponse> {
    const { next_page, ...body } = params;
    return this._client.post('/customer-alerts/list', { query: { next_page }, body, ...options });
  }

  /**
   * Reset state for an alert by customer id and force re-evaluation
   */
  reset(body: CustomerAlertResetParams, options?: Core.RequestOptions): Core.APIPromise<void> {
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
      | 'low_remaining_contract_credit_percentage_reached';

    /**
     * Timestamp for when the alert was last updated
     */
    updated_at: string;

    credit_type?: Alert.CreditType | null;

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
     * Prevents the creation of duplicates. If a request to create a record is made
     * with a previously used uniqueness key, a new record will not be created and the
     * request will fail with a 409 error.
     */
    uniqueness_key?: string;
  }

  export namespace Alert {
    export interface CreditType {
      id: string;

      name: string;
    }

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

export interface CustomerAlertRetrieveResponse {
  data: CustomerAlertRetrieveResponse.Data;
}

export namespace CustomerAlertRetrieveResponse {
  export interface Data {
    alert: Data.Alert;

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

  export namespace Data {
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
        | 'low_remaining_contract_credit_percentage_reached';

      /**
       * Timestamp for when the alert was last updated
       */
      updated_at: string;

      credit_type?: Alert.CreditType | null;

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
       * Prevents the creation of duplicates. If a request to create a record is made
       * with a previously used uniqueness key, a new record will not be created and the
       * request will fail with a 409 error.
       */
      uniqueness_key?: string;
    }

    export namespace Alert {
      export interface CreditType {
        id: string;

        name: string;
      }

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
}

export interface CustomerAlertListResponse {
  data: Array<CustomerAlertListResponse.Data>;

  next_page: string | null;
}

export namespace CustomerAlertListResponse {
  export interface Data {
    alert: Data.Alert;

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

  export namespace Data {
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
        | 'low_remaining_contract_credit_percentage_reached';

      /**
       * Timestamp for when the alert was last updated
       */
      updated_at: string;

      credit_type?: Alert.CreditType | null;

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
       * Prevents the creation of duplicates. If a request to create a record is made
       * with a previously used uniqueness key, a new record will not be created and the
       * request will fail with a 409 error.
       */
      uniqueness_key?: string;
    }

    export namespace Alert {
      export interface CreditType {
        id: string;

        name: string;
      }

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

export interface CustomerAlertListParams {
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

export interface CustomerAlertResetParams {
  /**
   * The Metronome ID of the alert
   */
  alert_id: string;

  /**
   * The Metronome ID of the customer
   */
  customer_id: string;
}

export namespace CustomerAlerts {
  export import CustomerAlert = CustomerAlertsAPI.CustomerAlert;
  export import CustomerAlertRetrieveResponse = CustomerAlertsAPI.CustomerAlertRetrieveResponse;
  export import CustomerAlertListResponse = CustomerAlertsAPI.CustomerAlertListResponse;
  export import CustomerAlertRetrieveParams = CustomerAlertsAPI.CustomerAlertRetrieveParams;
  export import CustomerAlertListParams = CustomerAlertsAPI.CustomerAlertListParams;
  export import CustomerAlertResetParams = CustomerAlertsAPI.CustomerAlertResetParams;
}
