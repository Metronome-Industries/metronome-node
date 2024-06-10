// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@metronome/sdk/core';
import { APIResource } from '@metronome/sdk/resource';
import { isRequestOptions } from '@metronome/sdk/core';
import * as InvoicesAPI from '@metronome/sdk/resources/customers/invoices';
import * as Shared from '@metronome/sdk/resources/shared';
import { CursorPage, type CursorPageParams } from '@metronome/sdk/pagination';

export class Invoices extends APIResource {
  /**
   * Fetch a specific invoice for a given customer.
   */
  retrieve(
    customerId: string,
    invoiceId: string,
    query?: InvoiceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceRetrieveResponse>;
  retrieve(
    customerId: string,
    invoiceId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceRetrieveResponse>;
  retrieve(
    customerId: string,
    invoiceId: string,
    query: InvoiceRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(customerId, invoiceId, {}, query);
    }
    return this._client.get(`/customers/${customerId}/invoices/${invoiceId}`, { query, ...options });
  }

  /**
   * List all invoices for a given customer, optionally filtered by status, date
   * range, and/or credit type.
   */
  list(
    customerId: string,
    query?: InvoiceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoicesCursorPage, Invoice>;
  list(customerId: string, options?: Core.RequestOptions): Core.PagePromise<InvoicesCursorPage, Invoice>;
  list(
    customerId: string,
    query: InvoiceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoicesCursorPage, Invoice> {
    if (isRequestOptions(query)) {
      return this.list(customerId, {}, query);
    }
    return this._client.getAPIList(`/customers/${customerId}/invoices`, InvoicesCursorPage, {
      query,
      ...options,
    });
  }

  /**
   * Add a one time charge to the specified invoice
   */
  addCharge(
    customerId: string,
    body: InvoiceAddChargeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceAddChargeResponse> {
    return this._client.post(`/customers/${customerId}/addCharge`, { body, ...options });
  }
}

export class InvoicesCursorPage extends CursorPage<Invoice> {}

export interface Invoice {
  id: string;

  billable_status: 'billable' | 'unbillable';

  credit_type: Shared.CreditType;

  customer_id: string;

  line_items: Array<Invoice.LineItem>;

  status: string;

  total: number;

  type: string;

  amendment_id?: string;

  contract_custom_fields?: Record<string, string>;

  contract_id?: string;

  correction_record?: Invoice.CorrectionRecord;

  /**
   * When the invoice was created (UTC). This field is present for correction
   * invoices only.
   */
  created_at?: string;

  custom_fields?: Record<string, unknown>;

  customer_custom_fields?: Record<string, string>;

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
  export interface LineItem {
    credit_type: Shared.CreditType;

    name: string;

    total: number;

    commit_custom_fields?: Record<string, string>;

    /**
     * only present for beta contract invoices
     */
    commit_id?: string;

    /**
     * only present for beta contract invoices. This field's availability is dependent
     * on your client's configuration.
     */
    commit_netsuite_item_id?: string;

    /**
     * only present for beta contract invoices. This field's availability is dependent
     * on your client's configuration.
     */
    commit_netsuite_sales_order_id?: string;

    /**
     * only present for beta contract invoices
     */
    commit_segment_id?: string;

    /**
     * only present for beta contract invoices
     */
    commit_type?: string;

    custom_fields?: Record<string, string>;

    /**
     * only present for beta contract invoices
     */
    ending_before?: string;

    group_key?: string;

    group_value?: string | null;

    /**
     * only present for beta contract invoices
     */
    is_prorated?: boolean;

    metadata?: string;

    /**
     * The end date for the billing period on the invoice.
     */
    netsuite_invoice_billing_end?: string;

    /**
     * The start date for the billing period on the invoice.
     */
    netsuite_invoice_billing_start?: string;

    /**
     * only present for beta contract invoices. This field's availability is dependent
     * on your client's configuration.
     */
    netsuite_item_id?: string;

    /**
     * only present for beta contract invoices
     */
    postpaid_commit?: LineItem.PostpaidCommit;

    /**
     * if presentation groups are used, this will contain the values used to break down
     * the line item
     */
    presentation_group_values?: Record<string, string | null>;

    /**
     * if pricing groups are used, this will contain the values used to calculate the
     * price
     */
    pricing_group_values?: Record<string, string>;

    product_custom_fields?: Record<string, string>;

    product_id?: string;

    product_type?: string;

    professional_service_custom_fields?: Record<string, string>;

    /**
     * only present for beta contract invoices
     */
    professional_service_id?: string;

    quantity?: number;

    reseller_type?: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

    scheduled_charge_custom_fields?: Record<string, string>;

    /**
     * only present for beta contract invoices
     */
    scheduled_charge_id?: string;

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
        | 'quickbooks_online'
        | 'workday'
        | 'gcp_marketplace';

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
      | 'quickbooks_online'
      | 'workday'
      | 'gcp_marketplace';

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
    credit_type: Shared.CreditType;

    name: string;

    total: number;

    credit_grant_id?: string;
  }

  /**
   * only present for beta contract invoices with reseller royalties
   */
  export interface ResellerRoyalty {
    fraction: string;

    netsuite_reseller_id: string;

    reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

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

export interface InvoiceAddChargeResponse {}

export interface InvoiceRetrieveParams {
  /**
   * If set, all zero quantity line items will be filtered out of the response
   */
  skip_zero_qty_line_items?: boolean;
}

export interface InvoiceListParams extends CursorPageParams {
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
   * If set, all zero quantity line items will be filtered out of the response
   */
  skip_zero_qty_line_items?: boolean;

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

export interface InvoiceAddChargeParams {
  /**
   * The Metronome ID of the charge to add to the invoice. Note that the charge must
   * be on a product that is not on the current plan, and the product must have only
   * fixed charges.
   */
  charge_id: string;

  /**
   * The Metronome ID of the customer plan to add the charge to.
   */
  customer_plan_id: string;

  description: string;

  /**
   * The start_timestamp of the invoice to add the charge to.
   */
  invoice_start_timestamp: string;

  /**
   * The price of the charge. This price will match the currency on the invoice, e.g.
   * USD cents.
   */
  price: number;

  quantity: number;
}

export namespace Invoices {
  export import Invoice = InvoicesAPI.Invoice;
  export import InvoiceRetrieveResponse = InvoicesAPI.InvoiceRetrieveResponse;
  export import InvoiceAddChargeResponse = InvoicesAPI.InvoiceAddChargeResponse;
  export import InvoicesCursorPage = InvoicesAPI.InvoicesCursorPage;
  export import InvoiceRetrieveParams = InvoicesAPI.InvoiceRetrieveParams;
  export import InvoiceListParams = InvoicesAPI.InvoiceListParams;
  export import InvoiceAddChargeParams = InvoicesAPI.InvoiceAddChargeParams;
}
