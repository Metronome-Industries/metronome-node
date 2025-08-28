// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import { CommitsBodyCursorPage } from '../../shared';
import { type BodyCursorPageParams } from '../../../pagination';

export class Commits extends APIResource {
  /**
   * Creates customer-level commits that establish spending commitments for customers
   * across their Metronome usage. Commits represent contracted spending obligations
   * that can be either prepaid (paid upfront) or postpaid (billed later). Note: In
   * most cases, you should add commitments directly to customer contracts using the
   * contract/create or contract/edit APIs.
   *
   * ### Use this endpoint to:
   *
   * Use this endpoint when you need to establish customer-level spending commitments
   * that can be applied across multiple contracts or scoped to specific contracts.
   * Customer-level commits are ideal for:
   *
   * - Enterprise-wide minimum spending agreements that span multiple contracts
   * - Multi-contract volume commitments with shared spending pools
   * - Cross-contract discount tiers based on aggregate usage
   *
   * Commit type Requirements: You must specify either "prepaid" or "postpaid" as the
   * commit type:
   *
   * - Prepaid commits: Customer pays upfront; invoice_schedule is optional (if
   *   omitted, creates a commit without an invoice)
   * - Postpaid commits: Customer pays when the commitment expires (the end of the
   *   access_schedule); invoice_schedule is required and must match access_schedule
   *   totals.
   *
   * Billing configuration:
   *
   * - invoice_contract_id is required for postpaid commits and for prepaid commits
   *   with billing (only optional for free prepaid commits)
   * - For postpaid commits: access_schedule and invoice_schedule must have matching
   *   amounts
   * - For postpaid commits: only one schedule item is allowed in both schedules.
   *
   * Scoping flexibility: Customer-level commits can be configured in a few ways:
   *
   * - Contract-specific: Use the applicable_contract_ids field to limit the commit
   *   to specific contracts
   * - Cross-contract: Leave applicable_contract_ids empty to allow the commit to be
   *   used across all of the customer's contracts
   *
   * Product targeting: Commits can be scoped to specific products using
   * applicable_product_ids, applicable_product_tags, or specifiers, or left
   * unrestricted to apply to all products.
   *
   * Priority considerations: When multiple commits are applicable, the one with the
   * lower priority value will be consumed first. If there is a tie, contract level
   * commits and credits will be applied before customer level commits and credits.
   * Plan your priority scheme carefully to ensure commits are applied in the desired
   * order.
   *
   * ### Usage guidelines:
   *
   * ⚠️ Preferred Alternative: In most cases, you should add commits directly to
   * contracts using the create contract or edit contract APIs instead of creating
   * customer-level commits. Contract-level commits provide better organization and
   * are the recommended approach for standard use cases.
   *
   * @example
   * ```ts
   * const commit = await client.v1.customers.commits.create({
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
   *   type: 'prepaid',
   *   invoice_contract_id:
   *     'e57d6929-c2f1-4796-a9a8-63cedefe848d',
   *   invoice_schedule: {
   *     credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
   *     schedule_items: [
   *       {
   *         unit_price: 10000000,
   *         quantity: 1,
   *         timestamp: '2020-03-01T00:00:00.000Z',
   *       },
   *     ],
   *     do_not_invoice: false,
   *   },
   *   name: 'My Commit',
   * });
   * ```
   */
  create(body: CommitCreateParams, options?: Core.RequestOptions): Core.APIPromise<CommitCreateResponse> {
    return this._client.post('/v1/contracts/customerCommits/create', { body, ...options });
  }

  /**
   * Retrieve all commit agreements for a customer, including both prepaid and
   * postpaid commitments. This endpoint provides comprehensive visibility into
   * contractual spending obligations, enabling you to track commitment utilization
   * and manage customer contracts effectively.
   *
   * ### Use this endpoint to:
   *
   * - Display commitment balances and utilization in customer dashboards
   * - Track prepaid commitment drawdown and remaining balances
   * - Monitor postpaid commitment progress toward minimum thresholds
   * - Build commitment tracking and forecasting tools
   * - Show commitment history with optional ledger details
   * - Manage rollover balances between contract periods
   *
   * ### Key response fields:
   *
   * An array of Commit objects containing:
   *
   * - Commit type: PREPAID (pay upfront) or POSTPAID (pay at true-up)
   * - Rate type: COMMIT_RATE (discounted) or LIST_RATE (standard pricing)
   * - Access schedule: When commitment funds become available
   * - Invoice schedule: When the customer is billed
   * - Product targeting: Which product(s) usage is eligible to draw from this commit
   * - Optional ledger entries: Transaction history (if `include_ledgers=true`)
   * - Balance information: Current available amount (if `include_balance=true`)
   * - Rollover settings: Fraction of unused amount that carries forward
   *
   * ### Usage guidelines:
   *
   * - Pagination: Results limited to 25 commits per page; use 'next_page' for more
   * - Date filtering options:
   *   - covering_date: Commits active on a specific date
   *   - starting_at: Commits with access on/after a date
   *   - effective_before: Commits with access before a date (exclusive)
   * - Scope options:
   *   - `include_contract_commits`: Include contract-level commits (not just
   *     customer-level)
   *   - `include_archived`: Include archived commits and commits from archived
   *     contracts
   * - Performance considerations:
   *   - include_ledgers: Adds detailed transaction history (slower)
   *   - include_balance: Adds current balance calculation (slower)
   * - Optional filtering: Use commit_id to retrieve a specific commit
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const commit of client.v1.customers.commits.list(
   *   {
   *     customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *     commit_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
   *     include_ledgers: true,
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    body: CommitListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CommitsBodyCursorPage, Shared.Commit> {
    return this._client.getAPIList('/v1/contracts/customerCommits/list', CommitsBodyCursorPage, {
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Shortens the end date of a prepaid commit to terminate it earlier than
   * originally scheduled. Use this endpoint when you need to cancel or reduce the
   * duration of an existing prepaid commit. Only works with prepaid commit types and
   * can only move the end date forward (earlier), not extend it.
   *
   * ### Usage guidelines:
   *
   * To extend commit end dates or make other comprehensive edits, use the 'edit
   * commit' endpoint instead.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.customers.commits.updateEndDate({
   *     commit_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
   *     customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *     access_ending_before: '2020-01-01T00:00:00.000Z',
   *     invoices_ending_before: '2020-01-01T00:00:00.000Z',
   *   });
   * ```
   */
  updateEndDate(
    body: CommitUpdateEndDateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommitUpdateEndDateResponse> {
    return this._client.post('/v1/contracts/customerCommits/updateEndDate', { body, ...options });
  }
}

export interface CommitCreateResponse {
  data: Shared.ID;
}

export interface CommitUpdateEndDateResponse {
  data: Shared.ID;
}

export interface CommitCreateParams {
  /**
   * Schedule for distributing the commit to the customer. For "POSTPAID" commits
   * only one schedule item is allowed and amount must match invoice_schedule total.
   */
  access_schedule: CommitCreateParams.AccessSchedule;

  customer_id: string;

  /**
   * If multiple credits or commits are applicable, the one with the lower priority
   * will apply first.
   */
  priority: number;

  /**
   * ID of the fixed product associated with the commit. This is required because
   * products are used to invoice the commit amount.
   */
  product_id: string;

  type: 'PREPAID' | 'POSTPAID';

  /**
   * Which contract the commit applies to. If not provided, the commit applies to all
   * contracts.
   */
  applicable_contract_ids?: Array<string>;

  /**
   * Which products the commit applies to. If applicable_product_ids,
   * applicable_product_tags or specifiers are not provided, the commit applies to
   * all products.
   */
  applicable_product_ids?: Array<string>;

  /**
   * Which tags the commit applies to. If applicable_product_ids,
   * applicable_product_tags or specifiers are not provided, the commit applies to
   * all products.
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
   * The contract that this commit will be billed on. This is required for "POSTPAID"
   * commits and for "PREPAID" commits unless there is no invoice schedule above
   * (i.e., the commit is 'free').
   */
  invoice_contract_id?: string;

  /**
   * Required for "POSTPAID" commits: the true up invoice will be generated at this
   * time and only one schedule item is allowed; the total must match
   * accesss_schedule amount. Optional for "PREPAID" commits: if not provided, this
   * will be a "complimentary" commit with no invoice.
   */
  invoice_schedule?: CommitCreateParams.InvoiceSchedule;

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

export namespace CommitCreateParams {
  /**
   * Schedule for distributing the commit to the customer. For "POSTPAID" commits
   * only one schedule item is allowed and amount must match invoice_schedule total.
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

  /**
   * Required for "POSTPAID" commits: the true up invoice will be generated at this
   * time and only one schedule item is allowed; the total must match
   * accesss_schedule amount. Optional for "PREPAID" commits: if not provided, this
   * will be a "complimentary" commit with no invoice.
   */
  export interface InvoiceSchedule {
    /**
     * Defaults to USD (cents) if not passed.
     */
    credit_type_id?: string;

    /**
     * This field is only applicable to commit invoice schedules. If true, this
     * schedule will not generate an invoice.
     */
    do_not_invoice?: boolean;

    /**
     * Enter the unit price and quantity for the charge or instead only send the
     * amount. If amount is sent, the unit price is assumed to be the amount and
     * quantity is inferred to be 1.
     */
    recurring_schedule?: InvoiceSchedule.RecurringSchedule;

    /**
     * Either provide amount or provide both unit_price and quantity.
     */
    schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
  }

  export namespace InvoiceSchedule {
    /**
     * Enter the unit price and quantity for the charge or instead only send the
     * amount. If amount is sent, the unit price is assumed to be the amount and
     * quantity is inferred to be 1.
     */
    export interface RecurringSchedule {
      amount_distribution: 'DIVIDED' | 'DIVIDED_ROUNDED' | 'EACH';

      /**
       * RFC 3339 timestamp (exclusive).
       */
      ending_before: string;

      frequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';

      /**
       * RFC 3339 timestamp (inclusive).
       */
      starting_at: string;

      /**
       * Amount for the charge. Can be provided instead of unit_price and quantity. If
       * amount is sent, the unit_price is assumed to be the amount and quantity is
       * inferred to be 1.
       */
      amount?: number;

      /**
       * Quantity for the charge. Will be multiplied by unit_price to determine the
       * amount and must be specified with unit_price. If specified amount cannot be
       * provided.
       */
      quantity?: number;

      /**
       * Unit price for the charge. Will be multiplied by quantity to determine the
       * amount and must be specified with quantity. If specified amount cannot be
       * provided.
       */
      unit_price?: number;
    }

    export interface ScheduleItem {
      /**
       * timestamp of the scheduled event
       */
      timestamp: string;

      /**
       * Amount for the charge. Can be provided instead of unit_price and quantity. If
       * amount is sent, the unit_price is assumed to be the amount and quantity is
       * inferred to be 1.
       */
      amount?: number;

      /**
       * Quantity for the charge. Will be multiplied by unit_price to determine the
       * amount and must be specified with unit_price. If specified amount cannot be
       * provided.
       */
      quantity?: number;

      /**
       * Unit price for the charge. Will be multiplied by quantity to determine the
       * amount and must be specified with quantity. If specified amount cannot be
       * provided.
       */
      unit_price?: number;
    }
  }
}

export interface CommitListParams extends BodyCursorPageParams {
  customer_id: string;

  commit_id?: string;

  /**
   * Include only commits that have access schedules that "cover" the provided date
   */
  covering_date?: string;

  /**
   * Include only commits that have any access before the provided date (exclusive)
   */
  effective_before?: string;

  /**
   * Include archived commits and commits from archived contracts.
   */
  include_archived?: boolean;

  /**
   * Include the balance in the response. Setting this flag may cause the query to be
   * slower.
   */
  include_balance?: boolean;

  /**
   * Include commits on the contract level.
   */
  include_contract_commits?: boolean;

  /**
   * Include commit ledgers in the response. Setting this flag may cause the query to
   * be slower.
   */
  include_ledgers?: boolean;

  /**
   * Include only commits that have any access on or after the provided date
   */
  starting_at?: string;
}

export interface CommitUpdateEndDateParams {
  /**
   * ID of the commit to update. Only supports "PREPAID" commits.
   */
  commit_id: string;

  /**
   * ID of the customer whose commit is to be updated
   */
  customer_id: string;

  /**
   * RFC 3339 timestamp indicating when access to the commit will end and it will no
   * longer be possible to draw it down (exclusive). If not provided, the access will
   * not be updated.
   */
  access_ending_before?: string;

  /**
   * RFC 3339 timestamp indicating when the commit will stop being invoiced
   * (exclusive). If not provided, the invoice schedule will not be updated.
   */
  invoices_ending_before?: string;
}

export declare namespace Commits {
  export {
    type CommitCreateResponse as CommitCreateResponse,
    type CommitUpdateEndDateResponse as CommitUpdateEndDateResponse,
    type CommitCreateParams as CommitCreateParams,
    type CommitListParams as CommitListParams,
    type CommitUpdateEndDateParams as CommitUpdateEndDateParams,
  };
}

export { CommitsBodyCursorPage };
