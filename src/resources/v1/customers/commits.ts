// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';

export class Commits extends APIResource {
  /**
   * Create a new commit at the customer level.
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
   *   invoice_schedule: {
   *     credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
   *     schedule_items: [
   *       {
   *         unit_price: 10000000,
   *         quantity: 1,
   *         timestamp: '2020-03-01T00:00:00.000Z',
   *       },
   *     ],
   *   },
   *   name: 'My Commit',
   * });
   * ```
   */
  create(body: CommitCreateParams, options?: Core.RequestOptions): Core.APIPromise<CommitCreateResponse> {
    return this._client.post('/v1/contracts/customerCommits/create', { body, ...options });
  }

  /**
   * List commits.
   *
   * @example
   * ```ts
   * const commits = await client.v1.customers.commits.list({
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   commit_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
   *   include_ledgers: true,
   * });
   * ```
   */
  list(body: CommitListParams, options?: Core.RequestOptions): Core.APIPromise<CommitListResponse> {
    return this._client.post('/v1/contracts/customerCommits/list', { body, ...options });
  }

  /**
   * Pull forward the end date of a prepaid commit. Use the "edit a commit" endpoint
   * to extend the end date of a prepaid commit, or to make other edits to the
   * commit.
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

export interface CommitListResponse {
  data: Array<Shared.Commit>;

  next_page: string | null;
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
  specifiers?: Array<CommitCreateParams.Specifier>;

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

  export interface Specifier {
    presentation_group_values?: { [key: string]: string };

    pricing_group_values?: { [key: string]: string };

    /**
     * If provided, the specifier will only apply to the product with the specified ID.
     */
    product_id?: string;

    /**
     * If provided, the specifier will only apply to products with all the specified
     * tags.
     */
    product_tags?: Array<string>;
  }
}

export interface CommitListParams {
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
   * The maximum number of commits to return. Defaults to 25.
   */
  limit?: number;

  /**
   * The next page token from a previous response.
   */
  next_page?: string;

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
    type CommitListResponse as CommitListResponse,
    type CommitUpdateEndDateResponse as CommitUpdateEndDateResponse,
    type CommitCreateParams as CommitCreateParams,
    type CommitListParams as CommitListParams,
    type CommitUpdateEndDateParams as CommitUpdateEndDateParams,
  };
}
