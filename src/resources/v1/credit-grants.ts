// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class CreditGrants extends APIResource {
  /**
   * Create a new credit grant
   *
   * @example
   * ```ts
   * const creditGrant = await client.v1.creditGrants.create({
   *   customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
   *   expires_at: '2022-04-01T00:00:00Z',
   *   grant_amount: {
   *     amount: 1000,
   *     credit_type_id: '5ae401dc-a648-4b49-9ac3-391bb5bc4d7b',
   *   },
   *   name: 'Acme Corp Promotional Credit Grant',
   *   paid_amount: {
   *     amount: 5000,
   *     credit_type_id: '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
   *   },
   *   priority: 0.5,
   *   credit_grant_type: 'trial',
   *   effective_at: '2022-02-01T00:00:00Z',
   *   reason: 'Incentivize new customer',
   * });
   * ```
   */
  create(
    body: CreditGrantCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditGrantCreateResponse> {
    return this._client.post('/v1/credits/createGrant', { body, ...options });
  }

  /**
   * List credit grants. This list does not included voided grants.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const creditGrantListResponse of client.v1.creditGrants.list(
   *   {
   *     credit_type_ids: [
   *       '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
   *     ],
   *     customer_ids: [
   *       'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *       '0e5b8609-d901-4992-b394-c3c2e3f37b1c',
   *     ],
   *     effective_before: '2022-02-01T00:00:00Z',
   *     not_expiring_before: '2022-02-01T00:00:00Z',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: CreditGrantListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreditGrantListResponsesCursorPage, CreditGrantListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreditGrantListResponsesCursorPage, CreditGrantListResponse>;
  list(
    params: CreditGrantListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreditGrantListResponsesCursorPage, CreditGrantListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { limit, next_page, ...body } = params;
    return this._client.getAPIList('/v1/credits/listGrants', CreditGrantListResponsesCursorPage, {
      query: { limit, next_page },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Edit an existing credit grant
   *
   * @example
   * ```ts
   * const response = await client.v1.creditGrants.edit({
   *   id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
   *   expires_at: '2022-04-01T00:00:00Z',
   *   name: 'Acme Corp Promotional Credit Grant',
   * });
   * ```
   */
  edit(body: CreditGrantEditParams, options?: Core.RequestOptions): Core.APIPromise<CreditGrantEditResponse> {
    return this._client.post('/v1/credits/editGrant', { body, ...options });
  }

  /**
   * Fetches a list of credit ledger entries. Returns lists of ledgers per customer.
   * Ledger entries are returned in chronological order. Ledger entries associated
   * with voided credit grants are not included.
   *
   * @example
   * ```ts
   * const response = await client.v1.creditGrants.listEntries({
   *   credit_type_ids: ['2714e483-4ff1-48e4-9e25-ac732e8f24f2'],
   *   customer_ids: ['6a37bb88-8538-48c5-b37b-a41c836328bd'],
   *   ending_before: '2021-02-01T00:00:00Z',
   *   starting_on: '2021-01-01T00:00:00Z',
   * });
   * ```
   */
  listEntries(
    params?: CreditGrantListEntriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditGrantListEntriesResponse>;
  listEntries(options?: Core.RequestOptions): Core.APIPromise<CreditGrantListEntriesResponse>;
  listEntries(
    params: CreditGrantListEntriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditGrantListEntriesResponse> {
    if (isRequestOptions(params)) {
      return this.listEntries({}, params);
    }
    const { next_page, sort, ...body } = params;
    return this._client.post('/v1/credits/listEntries', { query: { next_page, sort }, body, ...options });
  }

  /**
   * Void a credit grant
   *
   * @example
   * ```ts
   * const response = await client.v1.creditGrants.void({
   *   id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
   * });
   * ```
   */
  void(body: CreditGrantVoidParams, options?: Core.RequestOptions): Core.APIPromise<CreditGrantVoidResponse> {
    return this._client.post('/v1/credits/voidGrant', { body, ...options });
  }
}

export class CreditGrantListResponsesCursorPage extends CursorPage<CreditGrantListResponse> {}

export interface CreditGrantCreateResponse {
  data: CreditGrantCreateResponse.Data;
}

export namespace CreditGrantCreateResponse {
  export interface Data {
    id: string;
  }
}

export interface CreditGrantListResponse {
  /**
   * the Metronome ID of the credit grant
   */
  id: string;

  /**
   * The effective balance of the grant as of the end of the customer's current
   * billing period. Expiration deductions will be included only if the grant expires
   * before the end of the current billing period.
   */
  balance: CreditGrantListResponse.Balance;

  custom_fields: { [key: string]: string };

  /**
   * the Metronome ID of the customer
   */
  customer_id: string;

  deductions: Array<CreditGrantListResponse.Deduction>;

  effective_at: string;

  expires_at: string;

  /**
   * the amount of credits initially granted
   */
  grant_amount: CreditGrantListResponse.GrantAmount;

  name: string;

  /**
   * the amount paid for this credit grant
   */
  paid_amount: CreditGrantListResponse.PaidAmount;

  pending_deductions: Array<CreditGrantListResponse.PendingDeduction>;

  priority: number;

  credit_grant_type?: string | null;

  /**
   * the Metronome ID of the invoice with the purchase charge for this credit grant,
   * if applicable
   */
  invoice_id?: string | null;

  /**
   * The products which these credits will be applied to. (If unspecified, the
   * credits will be applied to charges for all products.)
   */
  products?: Array<CreditGrantListResponse.Product>;

  reason?: string | null;

  /**
   * Prevents the creation of duplicates. If a request to create a record is made
   * with a previously used uniqueness key, a new record will not be created and the
   * request will fail with a 409 error.
   */
  uniqueness_key?: string | null;
}

export namespace CreditGrantListResponse {
  /**
   * The effective balance of the grant as of the end of the customer's current
   * billing period. Expiration deductions will be included only if the grant expires
   * before the end of the current billing period.
   */
  export interface Balance {
    /**
     * The end_date of the customer's current billing period.
     */
    effective_at: string;

    /**
     * The grant's current balance including all posted deductions. If the grant has
     * expired, this amount will be 0.
     */
    excluding_pending: number;

    /**
     * The grant's current balance including all posted and pending deductions. If the
     * grant expires before the end of the customer's current billing period, this
     * amount will be 0.
     */
    including_pending: number;
  }

  export interface Deduction {
    /**
     * an amount representing the change to the customer's credit balance
     */
    amount: number;

    created_by: string;

    /**
     * the credit grant this entry is related to
     */
    credit_grant_id: string;

    effective_at: string;

    reason: string;

    /**
     * the running balance for this credit type at the time of the ledger entry,
     * including all preceding charges
     */
    running_balance: number;

    /**
     * if this entry is a deduction, the Metronome ID of the invoice where the credit
     * deduction was consumed; if this entry is a grant, the Metronome ID of the
     * invoice where the grant's paid_amount was charged
     */
    invoice_id?: string | null;
  }

  /**
   * the amount of credits initially granted
   */
  export interface GrantAmount {
    amount: number;

    /**
     * the credit type for the amount granted
     */
    credit_type: GrantAmount.CreditType;
  }

  export namespace GrantAmount {
    /**
     * the credit type for the amount granted
     */
    export interface CreditType {
      id: string;

      name: string;
    }
  }

  /**
   * the amount paid for this credit grant
   */
  export interface PaidAmount {
    amount: number;

    /**
     * the credit type for the amount paid
     */
    credit_type: PaidAmount.CreditType;
  }

  export namespace PaidAmount {
    /**
     * the credit type for the amount paid
     */
    export interface CreditType {
      id: string;

      name: string;
    }
  }

  export interface PendingDeduction {
    /**
     * an amount representing the change to the customer's credit balance
     */
    amount: number;

    created_by: string;

    /**
     * the credit grant this entry is related to
     */
    credit_grant_id: string;

    effective_at: string;

    reason: string;

    /**
     * the running balance for this credit type at the time of the ledger entry,
     * including all preceding charges
     */
    running_balance: number;

    /**
     * if this entry is a deduction, the Metronome ID of the invoice where the credit
     * deduction was consumed; if this entry is a grant, the Metronome ID of the
     * invoice where the grant's paid_amount was charged
     */
    invoice_id?: string | null;
  }

  export interface Product {
    id: string;

    name: string;
  }
}

export interface CreditGrantEditResponse {
  data: CreditGrantEditResponse.Data;
}

export namespace CreditGrantEditResponse {
  export interface Data {
    id: string;
  }
}

export interface CreditGrantListEntriesResponse {
  data: Array<CreditGrantListEntriesResponse.Data>;

  next_page: string | null;
}

export namespace CreditGrantListEntriesResponse {
  export interface Data {
    customer_id: string;

    ledgers: Array<Data.Ledger>;
  }

  export namespace Data {
    export interface Ledger {
      credit_type: Ledger.CreditType;

      /**
       * the effective balances at the end of the specified time window
       */
      ending_balance: Ledger.EndingBalance;

      entries: Array<Ledger.Entry>;

      pending_entries: Array<Ledger.PendingEntry>;

      starting_balance: Ledger.StartingBalance;
    }

    export namespace Ledger {
      export interface CreditType {
        id: string;

        name: string;
      }

      /**
       * the effective balances at the end of the specified time window
       */
      export interface EndingBalance {
        /**
         * the ending_before request parameter (if supplied) or the current billing
         * period's end date
         */
        effective_at: string;

        /**
         * the ending balance, including the balance of all grants that have not expired
         * before the effective_at date and deductions that happened before the
         * effective_at date
         */
        excluding_pending: number;

        /**
         * the excluding_pending balance plus any pending invoice deductions and
         * expirations that will happen by the effective_at date
         */
        including_pending: number;
      }

      export interface Entry {
        /**
         * an amount representing the change to the customer's credit balance
         */
        amount: number;

        created_by: string;

        /**
         * the credit grant this entry is related to
         */
        credit_grant_id: string;

        effective_at: string;

        reason: string;

        /**
         * the running balance for this credit type at the time of the ledger entry,
         * including all preceding charges
         */
        running_balance: number;

        /**
         * if this entry is a deduction, the Metronome ID of the invoice where the credit
         * deduction was consumed; if this entry is a grant, the Metronome ID of the
         * invoice where the grant's paid_amount was charged
         */
        invoice_id?: string | null;
      }

      export interface PendingEntry {
        /**
         * an amount representing the change to the customer's credit balance
         */
        amount: number;

        created_by: string;

        /**
         * the credit grant this entry is related to
         */
        credit_grant_id: string;

        effective_at: string;

        reason: string;

        /**
         * the running balance for this credit type at the time of the ledger entry,
         * including all preceding charges
         */
        running_balance: number;

        /**
         * if this entry is a deduction, the Metronome ID of the invoice where the credit
         * deduction was consumed; if this entry is a grant, the Metronome ID of the
         * invoice where the grant's paid_amount was charged
         */
        invoice_id?: string | null;
      }

      export interface StartingBalance {
        /**
         * the starting_on request parameter (if supplied) or the first credit grant's
         * effective_at date
         */
        effective_at: string;

        /**
         * the starting balance, including all posted grants, deductions, and expirations
         * that happened at or before the effective_at timestamp
         */
        excluding_pending: number;

        /**
         * the excluding_pending balance plus any pending activity that has not been posted
         * at the time of the query
         */
        including_pending: number;
      }
    }
  }
}

export interface CreditGrantVoidResponse {
  data: CreditGrantVoidResponse.Data;
}

export namespace CreditGrantVoidResponse {
  export interface Data {
    id: string;
  }
}

export interface CreditGrantCreateParams {
  /**
   * the Metronome ID of the customer
   */
  customer_id: string;

  /**
   * The credit grant will only apply to usage or charges dated before this timestamp
   */
  expires_at: string;

  /**
   * the amount of credits granted
   */
  grant_amount: CreditGrantCreateParams.GrantAmount;

  /**
   * the name of the credit grant as it will appear on invoices
   */
  name: string;

  /**
   * the amount paid for this credit grant
   */
  paid_amount: CreditGrantCreateParams.PaidAmount;

  priority: number;

  credit_grant_type?: string;

  /**
   * Custom fields to attach to the credit grant.
   */
  custom_fields?: { [key: string]: string };

  /**
   * The credit grant will only apply to usage or charges dated on or after this
   * timestamp
   */
  effective_at?: string;

  /**
   * The date to issue an invoice for the paid_amount.
   */
  invoice_date?: string;

  /**
   * The product(s) which these credits will be applied to. (If unspecified, the
   * credits will be applied to charges for all products.). The array ordering
   * specified here will be used to determine the order in which credits will be
   * applied to invoice line items
   */
  product_ids?: Array<string>;

  reason?: string;

  /**
   * Configure a rollover for this credit grant so if it expires it rolls over a
   * configured amount to a new credit grant. This feature is currently opt-in only.
   * Contact Metronome to be added to the beta.
   */
  rollover_settings?: CreditGrantCreateParams.RolloverSettings;

  /**
   * Prevents the creation of duplicates. If a request to create a record is made
   * with a previously used uniqueness key, a new record will not be created and the
   * request will fail with a 409 error.
   */
  uniqueness_key?: string;
}

export namespace CreditGrantCreateParams {
  /**
   * the amount of credits granted
   */
  export interface GrantAmount {
    amount: number;

    /**
     * the ID of the pricing unit to be used. Defaults to USD (cents) if not passed.
     */
    credit_type_id: string;
  }

  /**
   * the amount paid for this credit grant
   */
  export interface PaidAmount {
    amount: number;

    /**
     * the ID of the pricing unit to be used. Defaults to USD (cents) if not passed.
     */
    credit_type_id: string;
  }

  /**
   * Configure a rollover for this credit grant so if it expires it rolls over a
   * configured amount to a new credit grant. This feature is currently opt-in only.
   * Contact Metronome to be added to the beta.
   */
  export interface RolloverSettings {
    /**
     * The date to expire the rollover credits.
     */
    expires_at: string;

    /**
     * The priority to give the rollover credit grant that gets created when a rollover
     * happens.
     */
    priority: number;

    /**
     * Specify how much to rollover to the rollover credit grant
     */
    rollover_amount: RolloverSettings.UnionMember0 | RolloverSettings.UnionMember1;
  }

  export namespace RolloverSettings {
    export interface UnionMember0 {
      /**
       * Rollover up to a percentage of the original credit grant amount.
       */
      type: 'MAX_PERCENTAGE';

      /**
       * The maximum percentage (0-1) of the original credit grant to rollover.
       */
      value: number;
    }

    export interface UnionMember1 {
      /**
       * Rollover up to a fixed amount of the original credit grant amount.
       */
      type: 'MAX_AMOUNT';

      /**
       * The maximum amount to rollover.
       */
      value: number;
    }
  }
}

export interface CreditGrantListParams extends CursorPageParams {
  /**
   * Body param: An array of credit grant IDs. If this is specified, neither
   * credit_type_ids nor customer_ids may be specified.
   */
  credit_grant_ids?: Array<string>;

  /**
   * Body param: An array of credit type IDs. This must not be specified if
   * credit_grant_ids is specified.
   */
  credit_type_ids?: Array<string>;

  /**
   * Body param: An array of Metronome customer IDs. This must not be specified if
   * credit_grant_ids is specified.
   */
  customer_ids?: Array<string>;

  /**
   * Body param: Only return credit grants that are effective before this timestamp
   * (exclusive).
   */
  effective_before?: string;

  /**
   * Body param: Only return credit grants that expire at or after this timestamp.
   */
  not_expiring_before?: string;
}

export interface CreditGrantEditParams {
  /**
   * the ID of the credit grant
   */
  id: string;

  /**
   * the updated credit grant type
   */
  credit_grant_type?: string;

  /**
   * the updated expiration date for the credit grant
   */
  expires_at?: string;

  /**
   * the updated name for the credit grant
   */
  name?: string;
}

export interface CreditGrantListEntriesParams {
  /**
   * Query param: Cursor that indicates where the next page of results should start.
   */
  next_page?: string;

  /**
   * Query param: Ledgers sort order by date, asc or desc. Defaults to asc.
   */
  sort?: 'asc' | 'desc';

  /**
   * Body param: A list of Metronome credit type IDs to fetch ledger entries for. If
   * absent, ledger entries for all credit types will be returned.
   */
  credit_type_ids?: Array<string>;

  /**
   * Body param: A list of Metronome customer IDs to fetch ledger entries for. If
   * absent, ledger entries for all customers will be returned.
   */
  customer_ids?: Array<string>;

  /**
   * Body param: If supplied, ledger entries will only be returned with an
   * effective_at before this time. This timestamp must not be in the future. If no
   * timestamp is supplied, all entries up to the start of the customer's next
   * billing period will be returned.
   */
  ending_before?: string;

  /**
   * Body param: If supplied, only ledger entries effective at or after this time
   * will be returned.
   */
  starting_on?: string;
}

export interface CreditGrantVoidParams {
  id: string;

  /**
   * If true, resets the uniqueness key on this grant so it can be re-used
   */
  release_uniqueness_key?: boolean;

  /**
   * If true, void the purchase invoice associated with the grant
   */
  void_credit_purchase_invoice?: boolean;
}

CreditGrants.CreditGrantListResponsesCursorPage = CreditGrantListResponsesCursorPage;

export declare namespace CreditGrants {
  export {
    type CreditGrantCreateResponse as CreditGrantCreateResponse,
    type CreditGrantListResponse as CreditGrantListResponse,
    type CreditGrantEditResponse as CreditGrantEditResponse,
    type CreditGrantListEntriesResponse as CreditGrantListEntriesResponse,
    type CreditGrantVoidResponse as CreditGrantVoidResponse,
    CreditGrantListResponsesCursorPage as CreditGrantListResponsesCursorPage,
    type CreditGrantCreateParams as CreditGrantCreateParams,
    type CreditGrantListParams as CreditGrantListParams,
    type CreditGrantEditParams as CreditGrantEditParams,
    type CreditGrantListEntriesParams as CreditGrantListEntriesParams,
    type CreditGrantVoidParams as CreditGrantVoidParams,
  };
}
