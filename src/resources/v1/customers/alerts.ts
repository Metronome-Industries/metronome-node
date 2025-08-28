// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import { CursorPageWithoutLimit, type CursorPageWithoutLimitParams } from '../../../pagination';

export class Alerts extends APIResource {
  /**
   * Retrieve the real-time evaluation status for a specific alert-customer pair.
   * This endpoint provides instant visibility into whether a customer has triggered
   * an alert condition, enabling you to monitor account health and take proactive
   * action based on current alert states.
   *
   * ### Use this endpoint to:
   *
   * - Check if a specific customer is currently violating an alert threshold
   *   (in_alarm status)
   * - Verify alert configuration details and threshold values for a customer
   * - Integrate alert status checks into customer support tools or admin interfaces
   *
   * ### Key response fields:
   *
   * A CustomerAlert object containing:
   *
   * customer_status: The current evaluation state
   *
   * - ok - Customer is within acceptable thresholds
   * - in_alarm- Customer has breached the alert threshold
   * - evaluating - Alert has yet to be evaluated (typically due to a customer or
   *   alert having just been created)
   * - null - Alert has been archived
   * - triggered_by: Additional context about what caused the alert to trigger (when
   *   applicable)
   * - alert: Complete alert configuration including:
   *   - Alert ID, name, and type
   *   - Current threshold values and credit type information
   *   - Alert status (enabled, disabled, or archived)
   *   - Last update timestamp
   *   - Any applied filters (credit grant types, custom fields, group values)
   *
   * ### Usage guidelines:
   *
   * - Customer status: Returns the current evaluation state, not historical data.
   *   For alert history, use webhook notifications or event logs
   * - Archived alerts: Returns null for customer_status if the alert has been
   *   archived, but still includes the alert configuration details
   * - Integration patterns: This endpoint can be used to check a customer's alert
   *   status, but shouldn't be scraped. You should instead rely on the webhook
   *   notification to understand when customers are moved to IN_ALARM.
   * - Error handling: Returns 404 if either the customer or alert ID doesn't exist
   *   or isn't accessible to your organization
   *
   * @example
   * ```ts
   * const alert = await client.v1.customers.alerts.retrieve({
   *   alert_id: '8deed800-1b7a-495d-a207-6c52bac54dc9',
   *   customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
   * });
   * ```
   */
  retrieve(body: AlertRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<AlertRetrieveResponse> {
    return this._client.post('/v1/customer-alerts/get', { body, ...options });
  }

  /**
   * Retrieve all alert configurations and their current statuses for a specific
   * customer in a single API call. This endpoint provides a comprehensive view of
   * all alerts monitoring a customer account.
   *
   * ### Use this endpoint to:
   *
   * - Display all active alerts for a customer in dashboards or admin panels
   * - Quickly identify which alerts a customer is currently triggering
   * - Audit alert coverage for specific accounts
   * - Filter alerts by status (enabled, disabled, or archived)
   *
   * ### Key response fields:
   *
   * - data: Array of CustomerAlert objects, each containing:
   *   - Current evaluation status (ok, in_alarm, evaluating, or null)
   *   - Complete alert configuration and threshold details
   *   - Alert metadata including type, name, and last update time
   * - next_page: Pagination cursor for retrieving additional results
   *
   * ### Usage guidelines:
   *
   * - Default behavior: Returns only enabled alerts unless alert_statuses filter is
   *   specified
   * - Pagination: Use the next_page cursor to retrieve all results for customers
   *   with many alerts
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customerAlert of client.v1.customers.alerts.list(
   *   { customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: AlertListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerAlertsCursorPageWithoutLimit, CustomerAlert> {
    const { next_page, ...body } = params;
    return this._client.getAPIList('/v1/customer-alerts/list', CustomerAlertsCursorPageWithoutLimit, {
      query: { next_page },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Force an immediate re-evaluation of a specific alert for a customer, clearing
   * any previous state and triggering a fresh assessment against current thresholds.
   * This endpoint ensures alert accuracy after configuration changes or data
   * corrections.
   *
   * ### Use this endpoint to:
   *
   * - Clear false positive alerts after fixing data issues
   * - Re-evaluate alerts after adjusting customer balances or credits
   * - Test alert behavior during development and debugging
   * - Resolve stuck alerts that may be in an incorrect state
   * - Trigger immediate evaluation after threshold modifications
   *
   * ### Key response fields:
   *
   * - 200 Success: Confirmation that the alert has been reset and re-evaluation
   *   initiated
   * - No response body is returned - the operation completes asynchronously
   *
   * ### Usage guidelines:
   *
   * - Immediate effect: Triggers re-evaluation instantly, which may result in new
   *   webhook notifications if thresholds are breached
   * - State clearing: Removes any cached evaluation state, ensuring a fresh
   *   assessment
   * - Use sparingly: Intended for exceptional cases, not routine operations
   * - Asynchronous processing: The reset completes immediately, but re-evaluation
   *   happens in the background
   *
   * @example
   * ```ts
   * await client.v1.customers.alerts.reset({
   *   alert_id: '5e8691bf-b22a-4672-922d-f80eee940f01',
   *   customer_id: '4c83caf3-8af4-44e2-9aeb-e290531726d9',
   * });
   * ```
   */
  reset(body: AlertResetParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/customer-alerts/reset', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class CustomerAlertsCursorPageWithoutLimit extends CursorPageWithoutLimit<CustomerAlert> {}

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

    credit_type?: Shared.CreditTypeData | null;

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
     * Only present for `spend_threshold_reached` alerts. Scope alert to a specific
     * group key on individual line items.
     */
    group_values?: Array<Alert.GroupValue>;

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

    export interface GroupValue {
      key: string;

      value?: string;
    }
  }
}

export interface AlertRetrieveResponse {
  data: CustomerAlert;
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

  /**
   * When parallel alerts are enabled during migration, this flag denotes whether to
   * fetch alerts for plans or contracts.
   */
  plans_or_contracts?: 'PLANS' | 'CONTRACTS';
}

export interface AlertListParams extends CursorPageWithoutLimitParams {
  /**
   * Body param: The Metronome ID of the customer
   */
  customer_id: string;

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

Alerts.CustomerAlertsCursorPageWithoutLimit = CustomerAlertsCursorPageWithoutLimit;

export declare namespace Alerts {
  export {
    type CustomerAlert as CustomerAlert,
    type AlertRetrieveResponse as AlertRetrieveResponse,
    CustomerAlertsCursorPageWithoutLimit as CustomerAlertsCursorPageWithoutLimit,
    type AlertRetrieveParams as AlertRetrieveParams,
    type AlertListParams as AlertListParams,
    type AlertResetParams as AlertResetParams,
  };
}
