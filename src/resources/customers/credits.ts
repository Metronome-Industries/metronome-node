// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CreditsAPI from './credits';
import * as Shared from '../shared';

export class Credits extends APIResource {
  /**
   * Create a new credit at the customer level.
   */
  create(body: CreditCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreditCreateResponse> {
    return this._client.post('/contracts/customerCredits/create', { body, ...options });
  }

  /**
   * List credits.
   */
  list(body: CreditListParams, options?: Core.RequestOptions): Core.APIPromise<CreditListResponse> {
    return this._client.post('/contracts/customerCredits/list', { body, ...options });
  }

  /**
   * Update the end date of a credit
   */
  updateEndDate(
    body: CreditUpdateEndDateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreditUpdateEndDateResponse> {
    return this._client.post('/contracts/customerCredits/updateEndDate', { body, ...options });
  }
}

export interface CreditCreateResponse {
  data: Shared.ID;
}

export interface CreditListResponse {
  data: Array<CreditListResponse.Data>;

  next_page: string | null;
}

export namespace CreditListResponse {
  export interface Data {
    id: string;

    product: Data.Product;

    type: 'CREDIT';

    /**
     * The schedule that the customer will gain access to the credits.
     */
    access_schedule?: Data.AccessSchedule;

    applicable_contract_ids?: Array<string>;

    applicable_product_ids?: Array<string>;

    applicable_product_tags?: Array<string>;

    contract?: Data.Contract;

    custom_fields?: Record<string, string>;

    description?: string;

    /**
     * A list of ordered events that impact the balance of a credit. For example, an
     * invoice deduction or an expiration.
     */
    ledger?: Array<
      | Data.CreditSegmentStartLedgerEntry
      | Data.CreditAutomatedInvoiceDeductionLedgerEntry
      | Data.CreditExpirationLedgerEntry
      | Data.CreditCanceledLedgerEntry
      | Data.CreditCreditedLedgerEntry
      | Data.CreditManualLedgerEntry
    >;

    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;

    /**
     * If multiple credits or commits are applicable, the one with the lower priority
     * will apply first.
     */
    priority?: number;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    salesforce_opportunity_id?: string;
  }

  export namespace Data {
    export interface Product {
      id: string;

      name: string;
    }

    /**
     * The schedule that the customer will gain access to the credits.
     */
    export interface AccessSchedule {
      schedule_items: Array<AccessSchedule.ScheduleItem>;

      credit_type?: Shared.CreditType;
    }

    export namespace AccessSchedule {
      export interface ScheduleItem {
        id: string;

        amount: number;

        ending_before: string;

        starting_at: string;
      }
    }

    export interface Contract {
      id: string;
    }

    export interface CreditSegmentStartLedgerEntry {
      amount: number;

      segment_id: string;

      timestamp: string;

      type: 'CREDIT_SEGMENT_START';
    }

    export interface CreditAutomatedInvoiceDeductionLedgerEntry {
      amount: number;

      invoice_id: string;

      segment_id: string;

      timestamp: string;

      type: 'CREDIT_AUTOMATED_INVOICE_DEDUCTION';
    }

    export interface CreditExpirationLedgerEntry {
      amount: number;

      segment_id: string;

      timestamp: string;

      type: 'CREDIT_EXPIRATION';
    }

    export interface CreditCanceledLedgerEntry {
      amount: number;

      invoice_id: string;

      segment_id: string;

      timestamp: string;

      type: 'CREDIT_CANCELED';
    }

    export interface CreditCreditedLedgerEntry {
      amount: number;

      invoice_id: string;

      segment_id: string;

      timestamp: string;

      type: 'CREDIT_CREDITED';
    }

    export interface CreditManualLedgerEntry {
      amount: number;

      reason: string;

      timestamp: string;

      type: 'CREDIT_MANUAL';
    }
  }
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

  /**
   * This field's availability is dependent on your client's configuration.
   */
  salesforce_opportunity_id?: string;
}

export namespace CreditCreateParams {
  /**
   * Schedule for distributing the credit to the customer.
   */
  export interface AccessSchedule {
    schedule_items: Array<AccessSchedule.ScheduleItem>;

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
   * Include credits from archived contracts.
   */
  include_archived?: boolean;

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

export namespace Credits {
  export import CreditCreateResponse = CreditsAPI.CreditCreateResponse;
  export import CreditListResponse = CreditsAPI.CreditListResponse;
  export import CreditUpdateEndDateResponse = CreditsAPI.CreditUpdateEndDateResponse;
  export import CreditCreateParams = CreditsAPI.CreditCreateParams;
  export import CreditListParams = CreditsAPI.CreditListParams;
  export import CreditUpdateEndDateParams = CreditsAPI.CreditUpdateEndDateParams;
}