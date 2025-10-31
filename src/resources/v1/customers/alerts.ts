// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import {
  CursorPageWithoutLimit,
  type CursorPageWithoutLimitParams,
  PagePromise,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Alerts extends APIResource {
  /**
   * Retrieve the real-time evaluation status for a specific threshold
   * notification-customer pair. This endpoint provides instant visibility into
   * whether a customer has triggered a threshold notification condition, enabling
   * you to monitor account health and take proactive action based on current
   * threshold notification states.
   *
   * ### Use this endpoint to:
   *
   * - Check if a specific customer is currently violating an threshold notification
   *   (`in_alarm` status)
   * - Verify threshold notification configuration details and threshold values for a
   *   customer
   * - Monitor the evaluation state of newly created or recently modified threshold
   *   notification
   * - Build dashboards or automated workflows that respond to specific threshold
   *   notification conditions
   * - Validate threshold notification behavior before deploying to production
   *   customers
   * - Integrate threshold notification status checks into customer support tools or
   *   admin interfaces
   *
   * ### Key response fields:
   *
   * A CustomerAlert object containing:
   *
   * - `customer_status`: The current evaluation state
   *
   * - `ok` - Customer is within acceptable thresholds
   * - `in_alarm` - Customer has breached the threshold for the notification
   * - `evaluating` - Notification is currently being evaluated (typically during
   *   initial setup)
   * - `null` - Notification has been archived
   * - `triggered_by`: Additional context about what caused the notification to
   *   trigger (when applicable)
   * - alert: Complete threshold notification configuration including:
   *   - Notification ID, name, and type
   *   - Current threshold values and credit type information
   *   - Notification status (enabled, disabled, or archived)
   *   - Last update timestamp
   *   - Any applied filters (credit grant types, custom fields, group values)
   *
   * ### Usage guidelines:
   *
   * - Customer status: Returns the current evaluation state, not historical data.
   *   For threshold notification history, use webhook notifications or event logs
   * - Required parameters: Both customer_id and alert_id must be valid UUIDs that
   *   exist in your organization
   * - Archived notifications: Returns null for customer_status if the notification
   *   has been archived, but still includes the notification configuration details
   * - Performance considerations: This endpoint queries live evaluation state,
   *   making it ideal for real-time monitoring but not for bulk status checks
   * - Integration patterns: Best used for on-demand status checks in response to
   *   user actions or as part of targeted monitoring workflows
   * - Error handling: Returns 404 if either the customer or alert_id doesn't exist
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
  retrieve(body: AlertRetrieveParams, options?: RequestOptions): APIPromise<AlertRetrieveResponse> {
    return this._client.post('/v1/customer-alerts/get', { body, ...options });
  }

  /**
   * Retrieve all threshold notification configurations and their current statuses
   * for a specific customer in a single API call. This endpoint provides a
   * comprehensive view of all threshold notification monitoring a customer account.
   *
   * ### Use this endpoint to:
   *
   * - Display all active threshold notifications for a customer in dashboards or
   *   admin panels
   * - Quickly identify which threshold notifications a customer is currently
   *   triggering
   * - Audit threshold notification coverage for specific accounts
   * - Filter threshold notifications by status (enabled, disabled, or archived)
   *
   * ### Key response fields:
   *
   * - data: Array of CustomerAlert objects, each containing:
   *   - Current evaluation status (`ok`, `in_alarm`, `evaluating`, or `null`)
   *   - Complete threshold notification configuration and threshold details
   *   - Threshold notification metadata including type, name, and last update time
   * - next_page: Pagination cursor for retrieving additional results
   *
   * ### Usage guidelines:
   *
   * - Default behavior: Returns only enabled threshold notifications unless
   *   `alert_statuses` filter is specified
   * - Pagination: Use the `next_page` cursor to retrieve all results for customers
   *   with many notifications
   * - Performance: Efficiently retrieves multiple threshold notification statuses in
   *   a single request instead of making individual calls
   * - Filtering: Pass the `alert_statuses` array to include disabled or archived
   *   threshold notifications in results
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
    options?: RequestOptions,
  ): PagePromise<CustomerAlertsCursorPageWithoutLimit, CustomerAlert> {
    const { next_page, ...body } = params;
    return this._client.getAPIList('/v1/customer-alerts/list', CursorPageWithoutLimit<CustomerAlert>, {
      query: { next_page },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Force an immediate re-evaluation of a specific threshold notification for a
   * customer, clearing any previous state and triggering a fresh assessment against
   * current thresholds. This endpoint ensures threshold notification accuracy after
   * configuration changes or data corrections.
   *
   * ### Use this endpoint to:
   *
   * - Clear false positive threshold notifications after fixing data issues
   * - Re-evaluate threshold notifications after adjusting customer balances or
   *   credits
   * - Test threshold notification behavior during development and debugging
   * - Resolve stuck threshold notification that may be in an incorrect state
   * - Trigger immediate evaluation after threshold modifications
   *
   * ### Key response fields:
   *
   * - 200 Success: Confirmation that the threshold notification has been reset and
   *   re-evaluation initiated
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
  reset(body: AlertResetParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/customer-alerts/reset', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type CustomerAlertsCursorPageWithoutLimit = CursorPageWithoutLimit<CustomerAlert>;

export interface CustomerAlert {
  alert: CustomerAlert.Alert;

  /**
   * The status of the threshold notification. If the notification is archived, null
   * will be returned.
   */
  customer_status: 'ok' | 'in_alarm' | 'evaluating' | null;

  /**
   * If present, indicates the reason the threshold notification was triggered.
   */
  triggered_by?: string | null;
}

export namespace CustomerAlert {
  export interface Alert {
    /**
     * the Metronome ID of the threshold notification
     */
    id: string;

    /**
     * Name of the threshold notification
     */
    name: string;

    /**
     * Status of the threshold notification
     */
    status: 'enabled' | 'archived' | 'disabled';

    /**
     * Threshold value of the notification policy
     */
    threshold: number;

    /**
     * Type of the threshold notification
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
      | 'low_remaining_seat_balance_reached'
      | 'invoice_total_reached';

    /**
     * Timestamp for when the threshold notification was last updated
     */
    updated_at: string;

    /**
     * An array of strings, representing a way to filter the credit grant this
     * threshold notification applies to, by looking at the credit_grant_type field on
     * the credit grant. This field is only defined for CreditPercentage and
     * CreditBalance notifications
     */
    credit_grant_type_filters?: Array<string>;

    credit_type?: Shared.CreditTypeData | null;

    /**
     * A list of custom field filters for notification types that support advanced
     * filtering
     */
    custom_field_filters?: Array<Alert.CustomFieldFilter>;

    /**
     * Scopes threshold notification evaluation to a specific presentation group key on
     * individual line items. Only present for spend notifications.
     */
    group_key_filter?: Alert.GroupKeyFilter;

    /**
     * Only present for `spend_threshold_reached` notifications. Scope notification to
     * a specific group key on individual line items.
     */
    group_values?: Array<Alert.GroupValue>;

    /**
     * Only supported for invoice_total_reached threshold notifications. A list of
     * invoice types to evaluate.
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
     * Scopes threshold notification evaluation to a specific presentation group key on
     * individual line items. Only present for spend notifications.
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
   * The Metronome ID of the threshold notification
   */
  alert_id: string;

  /**
   * The Metronome ID of the customer
   */
  customer_id: string;

  /**
   * Only present for `spend_threshold_reached` notifications. Retrieve the
   * notification for a specific group key-value pair.
   */
  group_values?: Array<AlertRetrieveParams.GroupValue>;

  /**
   * When parallel threshold notifications are enabled during migration, this flag
   * denotes whether to fetch notifications for plans or contracts.
   */
  plans_or_contracts?: 'PLANS' | 'CONTRACTS';
}

export namespace AlertRetrieveParams {
  /**
   * Scopes threshold notification evaluation to a specific presentation group key on
   * individual line items. Only present for spend notifications.
   */
  export interface GroupValue {
    key: string;

    value: string;
  }
}

export interface AlertListParams extends CursorPageWithoutLimitParams {
  /**
   * Body param: The Metronome ID of the customer
   */
  customer_id: string;

  /**
   * Body param: Optionally filter by threshold notification status. If absent, only
   * enabled notifications will be returned.
   */
  alert_statuses?: Array<'ENABLED' | 'DISABLED' | 'ARCHIVED'>;
}

export interface AlertResetParams {
  /**
   * The Metronome ID of the threshold notification
   */
  alert_id: string;

  /**
   * The Metronome ID of the customer
   */
  customer_id: string;
}

export declare namespace Alerts {
  export {
    type CustomerAlert as CustomerAlert,
    type AlertRetrieveResponse as AlertRetrieveResponse,
    type CustomerAlertsCursorPageWithoutLimit as CustomerAlertsCursorPageWithoutLimit,
    type AlertRetrieveParams as AlertRetrieveParams,
    type AlertListParams as AlertListParams,
    type AlertResetParams as AlertResetParams,
  };
}
