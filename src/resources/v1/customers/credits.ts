// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import { CreditsBodyCursorPage } from '../../shared';
import { type BodyCursorPageParams } from '../../../pagination';

export class Credits extends APIResource {
  /**
   * Creates customer-level credits that provide spending allowances or free credit
   * balances for customers across their Metronome usage. Note: In most cases, you
   * should add credits directly to customer contracts using the contract/create or
   * contract/edit APIs.
   *
   * When to use this endpoint: Use this endpoint when you need to provision credits
   * directly at the customer level that can be applied across multiple contracts or
   * scoped to specific contracts. Customer-level credits are ideal for:
   *
   * - Customer onboarding incentives that apply globally
   * - Flexible spending allowances that aren't tied to a single contract
   * - Migration scenarios where you need to preserve existing customer balances
   *
   * Scoping Flexibility: Customer-level credits can be configured in two ways:
   *
   * - Contract-specific: Use the applicable_contract_ids field to limit the credit
   *   to specific contracts
   * - Cross-contract: Leave applicable_contract_ids empty to allow the credit to be
   *   used across all of the customer's contracts
   *
   * Product Targeting: Credits can be scoped to specific products using
   * applicable_product_ids or applicable_product_tags, or left unrestricted to apply
   * to all products.
   *
   * Priority Considerations: When multiple credits are applicable, the one with the
   * lower priority value will be consumed first. If there is a tie, contract level
   * commits and credits will be applied before customer level commits and credits.
   * Plan your priority scheme carefully to ensure credits are applied in the desired
   * order.
   *
   * Access Schedule Required: You must provide an access_schedule that defines when
   * and how much credit becomes available to the customer over time. This usually is
   * aligned to the contract schedule or starts immediately and is set to expire in
   * the future.
   *
   * ### Usage Guidelines:
   *
   * ⚠️ Preferred Alternative: In most cases, you should add credits directly to
   * contracts using the contract/create or contract/edit APIs instead of creating
   * customer-level credits. Contract-level credits provide better organization, and
   * are easier for finance teams to recognize revenue, and are the recommended
   * approach for most use cases.
   *
   * @example
   * ```ts
   * const credit = await client.v1.customers.credits.create({
   *   access_schedule: {
   *     credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
   *     schedule_items: [
   *       {
   *         amount: 1000,
   *         starting_at: '2020-01-01T00:00:00.000Z',
   *         ending_before: '2020-02-01T00:00:00.000Z',
   *       },
   *     ],
   *   },
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   priority: 100,
   *   product_id: 'f14d6729-6a44-4b13-9908-9387f1918790',
   *   name: 'My Credit',
   * });
   * ```
   */
  create(body: CreditCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreditCreateResponse> {
    return this._client.post('/v1/contracts/customerCredits/create', { body, ...options });
  }

  /**
   * Retrieve a detailed list of all credits available to a customer, including
   * promotional credits and contract-specific credits. This endpoint provides
   * comprehensive visibility into credit balances, access schedules, and usage
   * rules, enabling you to build credit management interfaces and track available
   * funding.
   *
   * ### Use this endpoint to:
   *
   * - Display all available credits in customer billing dashboards
   * - Show credit balances and expiration dates
   * - Track credit usage history with optional ledger details
   * - Build credit management and reporting tools
   * - Monitor promotional credit utilization • Support customer inquiries about
   *   available credits
   *
   * ### Key response fields:
   *
   * An array of Credit objects containing:
   *
   * - Credit details: Name, priority, and which applicable products/tags it applies
   *   to
   * - Product ID: The `product_id` of the credit. This is for external mapping into
   *   your quote-to-cash stack, not the product it applies to.
   * - Access schedule: When credits become available and expire
   * - Optional ledger entries: Transaction history (if `include_ledgers=true`)
   * - Balance information: Current available amount (if `include_balance=true`)
   * - Metadata: Custom fields and usage specifiers
   *
   * ### Usage guidelines:
   *
   * - Pagination: Results limited to 25 commits per page; use next_page for more
   * - Date filtering options:
   *   - covering_date: Credits active on a specific date
   *   - starting_at: Credits with access on/after a date
   *   - effective_before: Credits with access before a date (exclusive)
   * - Scope options:
   *   - `include_contract_credits`: Include contract-level credits (not just
   *     customer-level)
   *   - `include_archived`: Include archived credits and credits from archived
   *     contracts
   * - Performance considerations:
   *   - include_ledgers: Adds detailed transaction history (slower)
   *   - include_balance: Adds current balance calculation (slower)
   * - Optional filtering: Use credit_id to retrieve a specific commit
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const credit of client.v1.customers.credits.list(
   *   {
   *     customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *     credit_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
   *     include_ledgers: true,
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    body: CreditListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreditsBodyCursorPage, Shared.Credit> {
    return this._client.getAPIList('/v1/contracts/customerCredits/list', CreditsBodyCursorPage, {
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Shortens the end date of an existing customer credit to terminate it earlier
   * than originally scheduled. Only allows moving end dates forward (earlier), not
   * extending them.
   *
   * Note: To extend credit end dates or make comprehensive edits, use the 'edit
   * credit' endpoint instead.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.customers.credits.updateEndDate({
   *     access_ending_before: '2020-01-01T00:00:00.000Z',
   *     credit_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
   *     customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   });
   * ```
   */
  updateEndDate(
    body: CreditUpdateEndDateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditUpdateEndDateResponse> {
    return this._client.post('/v1/contracts/customerCredits/updateEndDate', { body, ...options });
  }
}

export interface CreditCreateResponse {
  data: Shared.ID;
}

export interface CreditUpdateEndDateResponse {
  data: Shared.ID;
}

export interface CreditCreateParams {
  /**
   * Schedule for distributing the credit to the customer.
   */
  access_schedule: CreditCreateParams.AccessSchedule;

  customer_id: string;

  /**
   * If multiple credits or commits are applicable, the one with the lower priority
   * will apply first.
   */
  priority: number;

  product_id: string;

  /**
   * Which contract the credit applies to. If not provided, the credit applies to all
   * contracts.
   */
  applicable_contract_ids?: Array<string>;

  /**
   * Which products the credit applies to. If both applicable_product_ids and
   * applicable_product_tags are not provided, the credit applies to all products.
   */
  applicable_product_ids?: Array<string>;

  /**
   * Which tags the credit applies to. If both applicable_product_ids and
   * applicable_product_tags are not provided, the credit applies to all products.
   */
  applicable_product_tags?: Array<string>;

  /**
   * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
   */
  custom_fields?: { [key: string]: string };

  /**
   * Used only in UI/API. It is not exposed to end customers.
   */
  description?: string;

  /**
   * displayed on invoices
   */
  name?: string;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  netsuite_sales_order_id?: string;

  rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

  /**
   * This field's availability is dependent on your client's configuration.
   */
  salesforce_opportunity_id?: string;

  /**
   * List of filters that determine what kind of customer usage draws down a commit
   * or credit. A customer's usage needs to meet the condition of at least one of the
   * specifiers to contribute to a commit's or credit's drawdown. This field cannot
   * be used together with `applicable_product_ids` or `applicable_product_tags`.
   */
  specifiers?: Array<Shared.CommitSpecifierInput>;

  /**
   * Prevents the creation of duplicates. If a request to create a commit or credit
   * is made with a uniqueness key that was previously used to create a commit or
   * credit, a new record will not be created and the request will fail with a 409
   * error.
   */
  uniqueness_key?: string;
}

export namespace CreditCreateParams {
  /**
   * Schedule for distributing the credit to the customer.
   */
  export interface AccessSchedule {
    schedule_items: Array<AccessSchedule.ScheduleItem>;

    /**
     * Defaults to USD (cents) if not passed
     */
    credit_type_id?: string;
  }

  export namespace AccessSchedule {
    export interface ScheduleItem {
      amount: number;

      /**
       * RFC 3339 timestamp (exclusive)
       */
      ending_before: string;

      /**
       * RFC 3339 timestamp (inclusive)
       */
      starting_at: string;
    }
  }
}

export interface CreditListParams extends BodyCursorPageParams {
  customer_id: string;

  /**
   * Return only credits that have access schedules that "cover" the provided date
   */
  covering_date?: string;

  credit_id?: string;

  /**
   * Include only credits that have any access before the provided date (exclusive)
   */
  effective_before?: string;

  /**
   * Include archived credits and credits from archived contracts.
   */
  include_archived?: boolean;

  /**
   * Include the balance in the response. Setting this flag may cause the query to be
   * slower.
   */
  include_balance?: boolean;

  /**
   * Include credits on the contract level.
   */
  include_contract_credits?: boolean;

  /**
   * Include credit ledgers in the response. Setting this flag may cause the query to
   * be slower.
   */
  include_ledgers?: boolean;

  /**
   * Include only credits that have any access on or after the provided date
   */
  starting_at?: string;
}

export interface CreditUpdateEndDateParams {
  /**
   * RFC 3339 timestamp indicating when access to the credit will end and it will no
   * longer be possible to draw it down (exclusive).
   */
  access_ending_before: string;

  /**
   * ID of the commit to update
   */
  credit_id: string;

  /**
   * ID of the customer whose credit is to be updated
   */
  customer_id: string;
}

export declare namespace Credits {
  export {
    type CreditCreateResponse as CreditCreateResponse,
    type CreditUpdateEndDateResponse as CreditUpdateEndDateResponse,
    type CreditCreateParams as CreditCreateParams,
    type CreditListParams as CreditListParams,
    type CreditUpdateEndDateParams as CreditUpdateEndDateParams,
  };
}

export { CreditsBodyCursorPage };
