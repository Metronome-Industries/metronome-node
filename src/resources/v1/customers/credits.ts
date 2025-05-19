// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';

export class Credits extends APIResource {
  /**
   * Create a new credit at the customer level.
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
   * List credits.
   *
   * @example
   * ```ts
   * const credits = await client.v1.customers.credits.list({
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   credit_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
   *   include_ledgers: true,
   * });
   * ```
   */
  list(body: CreditListParams, options?: Core.RequestOptions): Core.APIPromise<CreditListResponse> {
    return this._client.post('/v1/contracts/customerCredits/list', { body, ...options });
  }

  /**
   * Pull forward the end date of a credit. Use the "edit a credit" endpoint to
   * extend the end date of a credit, or to make other edits to the credit.
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

export interface CreditListResponse {
  data: Array<Shared.Credit>;

  next_page: string | null;
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

  custom_fields?: Record<string, string>;

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
  specifiers?: Array<CreditCreateParams.Specifier>;

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

  export interface Specifier {
    presentation_group_values?: Record<string, string>;

    pricing_group_values?: Record<string, string>;

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

export interface CreditListParams {
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
   * The next page token from a previous response.
   */
  next_page?: string;

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
    type CreditListResponse as CreditListResponse,
    type CreditUpdateEndDateResponse as CreditUpdateEndDateResponse,
    type CreditCreateParams as CreditCreateParams,
    type CreditListParams as CreditListParams,
    type CreditUpdateEndDateParams as CreditUpdateEndDateParams,
  };
}
