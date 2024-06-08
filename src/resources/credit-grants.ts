// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@metronome/sdk/core';
import { APIResource } from '@metronome/sdk/resource';
import { isRequestOptions } from '@metronome/sdk/core';
import * as CreditGrantsAPI from '@metronome/sdk/resources/credit-grants';
import * as Shared from '@metronome/sdk/resources/shared';

export class CreditGrants extends APIResource {
  /**
   * Create a new credit grant
   */
  create(
    body: CreditGrantCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditGrantCreateResponse> {
    return this._client.post('/credits/createGrant', { body, ...options });
  }

  /**
   * List credit grants. This list does not included voided grants.
   */
  list(
    params?: CreditGrantListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditGrantListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CreditGrantListResponse>;
  list(
    params: CreditGrantListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditGrantListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { limit, next_page, ...body } = params;
    return this._client.post('/credits/listGrants', { query: { limit, next_page }, body, ...options });
  }

  /**
   * Edit an existing credit grant
   */
  edit(body: CreditGrantEditParams, options?: Core.RequestOptions): Core.APIPromise<CreditGrantEditResponse> {
    return this._client.post('/credits/editGrant', { body, ...options });
  }

  /**
   * List all pricing units (known in the API by the legacy term "credit types").
   */
  listCreditTypes(
    query?: CreditGrantListCreditTypesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditGrantListCreditTypesResponse>;
  listCreditTypes(options?: Core.RequestOptions): Core.APIPromise<CreditGrantListCreditTypesResponse>;
  listCreditTypes(
    query: CreditGrantListCreditTypesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditGrantListCreditTypesResponse> {
    if (isRequestOptions(query)) {
      return this.listCreditTypes({}, query);
    }
    return this._client.get('/credit-types/list', { query, ...options });
  }

  /**
   * Fetches a list of credit ledger entries. Returns lists of ledgers per customer.
   * Ledger entries are returned in reverse chronological order. Ledger entries
   * associated with voided credit grants are not included.
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
    const { next_page, ...body } = params;
    return this._client.post('/credits/listEntries', { query: { next_page }, body, ...options });
  }

  /**
   * Void a credit grant
   */
  void(body: CreditGrantVoidParams, options?: Core.RequestOptions): Core.APIPromise<CreditGrantVoidResponse> {
    return this._client.post('/credits/voidGrant', { body, ...options });
  }
}

export interface CreditLedgerEntry {
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

export interface RolloverAmountMaxAmount {
  /**
   * Rollover up to a fixed amount of the original credit grant amount.
   */
  type: 'MAX_AMOUNT';

  /**
   * The maximum amount to rollover.
   */
  value: number;
}

export interface RolloverAmountMaxPercentage {
  /**
   * Rollover up to a percentage of the original credit grant amount.
   */
  type: 'MAX_PERCENTAGE';

  /**
   * The maximum percentage (0-1) of the original credit grant to rollover.
   */
  value: number;
}

export interface CreditGrantCreateResponse {
  data: Shared.ID;
}

export interface CreditGrantListResponse {
  data: Array<CreditGrantListResponse.Data>;

  next_page: string | null;
}

export namespace CreditGrantListResponse {
  export interface Data {
    /**
     * the Metronome ID of the credit grant
     */
    id: string;

    /**
     * The effective balance of the grant as of the end of the customer's current
     * billing period. Expiration deductions will be included only if the grant expires
     * before the end of the current billing period.
     */
    balance: Data.Balance;

    custom_fields: Record<string, string>;

    /**
     * the Metronome ID of the customer
     */
    customer_id: string;

    deductions: Array<CreditGrantsAPI.CreditLedgerEntry>;

    effective_at: string;

    expires_at: string;

    /**
     * the amount of credits initially granted
     */
    grant_amount: Data.GrantAmount;

    name: string;

    /**
     * the amount paid for this credit grant
     */
    paid_amount: Data.PaidAmount;

    pending_deductions: Array<CreditGrantsAPI.CreditLedgerEntry>;

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
    products?: Array<Data.Product>;

    reason?: string | null;

    /**
     * Prevents the creation of duplicates. If a request to create a record is made
     * with a previously used uniqueness key, a new record will not be created and the
     * request will fail with a 409 error.
     */
    uniqueness_key?: string | null;
  }

  export namespace Data {
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

    /**
     * the amount of credits initially granted
     */
    export interface GrantAmount {
      amount: number;

      /**
       * the credit type for the amount granted
       */
      credit_type: Shared.CreditType;
    }

    /**
     * the amount paid for this credit grant
     */
    export interface PaidAmount {
      amount: number;

      /**
       * the credit type for the amount paid
       */
      credit_type: Shared.CreditType;
    }

    export interface Product {
      id: string;

      name: string;
    }
  }
}

export interface CreditGrantEditResponse {
  data: Shared.ID;
}

export interface CreditGrantListCreditTypesResponse {
  data: Array<CreditGrantListCreditTypesResponse.Data>;

  next_page: string | null;
}

export namespace CreditGrantListCreditTypesResponse {
  export interface Data {
    id?: string;

    is_currency?: boolean;

    name?: string;
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
      credit_type: Shared.CreditType;

      /**
       * the effective balances at the end of the specified time window
       */
      ending_balance: Ledger.EndingBalance;

      entries: Array<CreditGrantsAPI.CreditLedgerEntry>;

      pending_entries: Array<CreditGrantsAPI.CreditLedgerEntry>;

      starting_balance: Ledger.StartingBalance;
    }

    export namespace Ledger {
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
  data: Shared.ID;
}

export interface CreditGrantCreateParams {
  /**
   * the Metronome ID of the customer
   */
  customer_id: string;

  /**
   * The credit grant will only apply to billing periods that end before this
   * timestamp.
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
  custom_fields?: Record<string, string>;

  /**
   * The credit grant will only apply to billing periods that end at or after this
   * timestamp.
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

    credit_type_id: string;
  }

  /**
   * the amount paid for this credit grant
   */
  export interface PaidAmount {
    amount: number;

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
    rollover_amount: CreditGrantsAPI.RolloverAmountMaxPercentage | CreditGrantsAPI.RolloverAmountMaxAmount;
  }
}

export interface CreditGrantListParams {
  /**
   * Query param: Max number of results that should be returned
   */
  limit?: number;

  /**
   * Query param: Cursor that indicates where the next page of results should start.
   */
  next_page?: string;

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
   * the updated expiration date for the credit grant
   */
  expires_at?: string;

  /**
   * the updated name for the credit grant
   */
  name?: string;
}

export interface CreditGrantListCreditTypesParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;

  /**
   * Cursor that indicates where the next page of results should start.
   */
  next_page?: string;
}

export interface CreditGrantListEntriesParams {
  /**
   * Query param: Cursor that indicates where the next page of results should start.
   */
  next_page?: string;

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
   * If true, void the purchase invoice associated with the grant
   */
  void_credit_purchase_invoice?: boolean;
}

export namespace CreditGrants {
  export import CreditLedgerEntry = CreditGrantsAPI.CreditLedgerEntry;
  export import RolloverAmountMaxAmount = CreditGrantsAPI.RolloverAmountMaxAmount;
  export import RolloverAmountMaxPercentage = CreditGrantsAPI.RolloverAmountMaxPercentage;
  export import CreditGrantCreateResponse = CreditGrantsAPI.CreditGrantCreateResponse;
  export import CreditGrantListResponse = CreditGrantsAPI.CreditGrantListResponse;
  export import CreditGrantEditResponse = CreditGrantsAPI.CreditGrantEditResponse;
  export import CreditGrantListCreditTypesResponse = CreditGrantsAPI.CreditGrantListCreditTypesResponse;
  export import CreditGrantListEntriesResponse = CreditGrantsAPI.CreditGrantListEntriesResponse;
  export import CreditGrantVoidResponse = CreditGrantsAPI.CreditGrantVoidResponse;
  export import CreditGrantCreateParams = CreditGrantsAPI.CreditGrantCreateParams;
  export import CreditGrantListParams = CreditGrantsAPI.CreditGrantListParams;
  export import CreditGrantEditParams = CreditGrantsAPI.CreditGrantEditParams;
  export import CreditGrantListCreditTypesParams = CreditGrantsAPI.CreditGrantListCreditTypesParams;
  export import CreditGrantListEntriesParams = CreditGrantsAPI.CreditGrantListEntriesParams;
  export import CreditGrantVoidParams = CreditGrantsAPI.CreditGrantVoidParams;
}