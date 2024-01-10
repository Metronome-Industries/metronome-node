// File generated from our OpenAPI spec by Stainless.

import * as Core from '@metronome-industries/metronome/core';
import { APIResource } from '@metronome-industries/metronome/resource';
import { isRequestOptions } from '@metronome-industries/metronome/core';
import * as InvoicesAPI from '@metronome-industries/metronome/resources/customers/invoices';
import { Page, type PageParams } from '@metronome-industries/metronome/pagination';

export class Invoices extends APIResource {
  /**
   * Fetch a specific invoice for a given customer.
   */
  retrieve(
    customerId: string,
    invoiceId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceRetrieveResponse> {
    return this._client.get(`/customers/${customerId}/invoices/${invoiceId}`, options);
  }

  /**
   * List all invoices for a given customer, optionally filtered by status, date
   * range, and/or credit type.
   */
  list(
    customerId: string,
    query?: InvoiceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoicesPage, Invoice>;
  list(customerId: string, options?: Core.RequestOptions): Core.PagePromise<InvoicesPage, Invoice>;
  list(
    customerId: string,
    query: InvoiceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoicesPage, Invoice> {
    if (isRequestOptions(query)) {
      return this.list(customerId, {}, query);
    }
    return this._client.getAPIList(`/customers/${customerId}/invoices`, InvoicesPage, { query, ...options });
  }
}

export class InvoicesPage extends Page<Invoice> {}

export interface Invoice {
  id: string;

  credit_type: Invoice.CreditType;

  customer_id: string;

  line_items: Array<Invoice.LineItem>;

  status: string;

  total: number;

  type: string;

  amendment_id?: string;

  contract_id?: string;

  correction_record?: Invoice.CorrectionRecord;

  custom_fields?: Record<string, unknown>;

  /**
   * End of the usage period this invoice covers (UTC)
   */
  end_timestamp?: string;

  external_invoice?: Invoice.ExternalInvoice | null;

  invoice_adjustments?: Array<Invoice.InvoiceAdjustment>;

  /**
   * When the invoice was issued (UTC)
   */
  issued_at?: string;

  net_payment_terms_days?: number;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  netsuite_sales_order_id?: string;

  plan_custom_fields?: Record<string, string>;

  plan_id?: string;

  plan_name?: string;

  /**
   * only present for beta contract invoices with reseller royalties
   */
  reseller_royalty?: Invoice.ResellerRoyalty;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  salesforce_opportunity_id?: string;

  /**
   * Beginning of the usage period this invoice covers (UTC)
   */
  start_timestamp?: string;

  subtotal?: number;
}

export namespace Invoice {
  export interface CreditType {
    id: string;

    name: string;
  }

  export interface LineItem {
    credit_type: LineItem.CreditType;

    name: string;

    total: number;

    /**
     * only present for beta contract invoices
     */
    commit_id?: string;

    /**
     * only present for beta contract invoices
     */
    commit_segment_id?: string;

    custom_fields?: Record<string, string>;

    /**
     * only present for beta contract invoices
     */
    ending_before?: string;

    group_key?: string;

    group_value?: string;

    /**
     * only present for beta contract invoices
     */
    is_prorated?: boolean;

    /**
     * only present for beta contract invoices. This field's availability is dependent
     * on your client's configuration.
     */
    netsuite_item_id?: string;

    /**
     * only present for beta contract invoices
     */
    postpaid_commit?: LineItem.PostpaidCommit;

    product_id?: string;

    quantity?: number;

    reseller_type?: 'AWS' | 'GCP';

    /**
     * only present for beta contract invoices
     */
    starting_at?: string;

    sub_line_items?: Array<LineItem.SubLineItem>;

    /**
     * only present for beta contract invoices
     */
    unit_price?: number;
  }

  export namespace LineItem {
    export interface CreditType {
      id: string;

      name: string;
    }

    /**
     * only present for beta contract invoices
     */
    export interface PostpaidCommit {
      id: string;
    }

    export interface SubLineItem {
      custom_fields: Record<string, string>;

      name: string;

      quantity: number;

      subtotal: number;

      charge_id?: string;

      credit_grant_id?: string;

      /**
       * the unit price for this charge, present only if the charge is not tiered and the
       * quantity is nonzero
       */
      price?: number;

      tiers?: Array<SubLineItem.Tier>;
    }

    export namespace SubLineItem {
      export interface Tier {
        price: number;

        quantity: number;

        /**
         * at what metric amount this tier begins
         */
        starting_at: number;

        subtotal: number;
      }
    }
  }

  export interface CorrectionRecord {
    corrected_invoice_id: string;

    memo: string;

    reason: string;

    corrected_external_invoice?: CorrectionRecord.CorrectedExternalInvoice;
  }

  export namespace CorrectionRecord {
    export interface CorrectedExternalInvoice {
      billing_provider_type:
        | 'aws_marketplace'
        | 'stripe'
        | 'netsuite'
        | 'custom'
        | 'azure_marketplace'
        | 'quickbooks_online';

      external_status?:
        | 'DRAFT'
        | 'FINALIZED'
        | 'PAID'
        | 'UNCOLLECTIBLE'
        | 'VOID'
        | 'DELETED'
        | 'PAYMENT_FAILED'
        | 'INVALID_REQUEST_ERROR'
        | 'SKIPPED'
        | 'SENT'
        | 'QUEUED';

      invoice_id?: string;

      issued_at_timestamp?: string;
    }
  }

  export interface ExternalInvoice {
    billing_provider_type:
      | 'aws_marketplace'
      | 'stripe'
      | 'netsuite'
      | 'custom'
      | 'azure_marketplace'
      | 'quickbooks_online';

    external_status?:
      | 'DRAFT'
      | 'FINALIZED'
      | 'PAID'
      | 'UNCOLLECTIBLE'
      | 'VOID'
      | 'DELETED'
      | 'PAYMENT_FAILED'
      | 'INVALID_REQUEST_ERROR'
      | 'SKIPPED'
      | 'SENT'
      | 'QUEUED';

    invoice_id?: string;

    issued_at_timestamp?: string;
  }

  export interface InvoiceAdjustment {
    credit_type: InvoiceAdjustment.CreditType;

    name: string;

    total: number;
  }

  export namespace InvoiceAdjustment {
    export interface CreditType {
      id: string;

      name: string;
    }
  }

  /**
   * only present for beta contract invoices with reseller royalties
   */
  export interface ResellerRoyalty {
    fraction: string;

    netsuite_reseller_id: string;

    reseller_type: 'AWS' | 'GCP';

    aws_options?: ResellerRoyalty.AwsOptions;

    gcp_options?: ResellerRoyalty.GcpOptions;
  }

  export namespace ResellerRoyalty {
    export interface AwsOptions {
      aws_account_number?: string;

      aws_offer_id?: string;

      aws_payer_reference_id?: string;
    }

    export interface GcpOptions {
      gcp_account_id?: string;

      gcp_offer_id?: string;
    }
  }
}

export interface InvoiceRetrieveResponse {
  data: Invoice;
}

export interface InvoiceListParams extends PageParams {
  /**
   * Only return invoices for the specified credit type
   */
  credit_type_id?: string;

  /**
   * RFC 3339 timestamp (exclusive). Invoices will only be returned for billing
   * periods that end before this time.
   */
  ending_before?: string;

  /**
   * Max number of results that should be returned
   */
  limit?: number;

  /**
   * Invoice sort order by issued_at, e.g. date_asc or date_desc. Defaults to
   * date_asc.
   */
  sort?: 'date_asc' | 'date_desc';

  /**
   * RFC 3339 timestamp (inclusive). Invoices will only be returned for billing
   * periods that start at or after this time.
   */
  starting_on?: string;

  /**
   * Invoice status, e.g. DRAFT, FINALIZED, or VOID
   */
  status?: string;
}

export namespace Invoices {
  export import Invoice = InvoicesAPI.Invoice;
  export import InvoiceRetrieveResponse = InvoicesAPI.InvoiceRetrieveResponse;
  export import InvoicesPage = InvoicesAPI.InvoicesPage;
  export import InvoiceListParams = InvoicesAPI.InvoiceListParams;
}
