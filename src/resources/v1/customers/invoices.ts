// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import { CursorPage, type CursorPageParams } from '../../../pagination';

export class Invoices extends APIResource {
  /**
   * Fetch a specific invoice for a given customer.
   *
   * @example
   * ```ts
   * const invoice = await client.v1.customers.invoices.retrieve(
   *   {
   *     customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *     invoice_id: '6a37bb88-8538-48c5-b37b-a41c836328bd',
   *   },
   * );
   * ```
   */
  retrieve(
    params: InvoiceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceRetrieveResponse> {
    const { customer_id, invoice_id, ...query } = params;
    return this._client.get(`/v1/customers/${customer_id}/invoices/${invoice_id}`, { query, ...options });
  }

  /**
   * List all invoices for a given customer, optionally filtered by status, date
   * range, and/or credit type.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const invoice of client.v1.customers.invoices.list(
   *   { customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: InvoiceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoicesCursorPage, Invoice> {
    const { customer_id, ...query } = params;
    return this._client.getAPIList(`/v1/customers/${customer_id}/invoices`, InvoicesCursorPage, {
      query,
      ...options,
    });
  }

  /**
   * Add a one time charge to the specified invoice
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.customers.invoices.addCharge({
   *     customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *     charge_id: '5ae4b726-1ebe-439c-9190-9831760ba195',
   *     customer_plan_id:
   *       'a23b3cf4-47fb-4c3f-bb3d-9e64f7704015',
   *     description: 'One time charge',
   *     invoice_start_timestamp: '2024-01-01T00:00:00Z',
   *     price: 250,
   *     quantity: 1,
   *   });
   * ```
   */
  addCharge(
    params: InvoiceAddChargeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceAddChargeResponse> {
    const { customer_id, ...body } = params;
    return this._client.post(`/v1/customers/${customer_id}/addCharge`, { body, ...options });
  }

  /**
   * List daily or hourly invoice breakdowns for a given customer, optionally
   * filtered by status, date range, and/or credit type. Important considerations:
   *
   * - If we receive backdated usage after an invoice has been finalized, the
   *   backdated usage will be included in the response and usage numbers may differ.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const invoiceListBreakdownsResponse of client.v1.customers.invoices.listBreakdowns(
   *   {
   *     customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *     ending_before: '2019-12-27T18:11:19.117Z',
   *     starting_on: '2019-12-27T18:11:19.117Z',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listBreakdowns(
    params: InvoiceListBreakdownsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoiceListBreakdownsResponsesCursorPage, InvoiceListBreakdownsResponse> {
    const { customer_id, ...query } = params;
    return this._client.getAPIList(
      `/v1/customers/${customer_id}/invoices/breakdowns`,
      InvoiceListBreakdownsResponsesCursorPage,
      { query, ...options },
    );
  }
}

export class InvoicesCursorPage extends CursorPage<Invoice> {}

export class InvoiceListBreakdownsResponsesCursorPage extends CursorPage<InvoiceListBreakdownsResponse> {}

export interface Invoice {
  id: string;

  credit_type: Shared.CreditTypeData;

  customer_id: string;

  line_items: Array<Invoice.LineItem>;

  status: string;

  total: number;

  type: string;

  amendment_id?: string;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  billable_status?: 'billable' | 'unbillable';

  contract_custom_fields?: { [key: string]: string };

  contract_id?: string;

  correction_record?: Invoice.CorrectionRecord;

  /**
   * When the invoice was created (UTC). This field is present for correction
   * invoices only.
   */
  created_at?: string;

  custom_fields?: { [key: string]: unknown };

  customer_custom_fields?: { [key: string]: string };

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

  plan_custom_fields?: { [key: string]: string };

  plan_id?: string;

  plan_name?: string;

  /**
   * Only present for contract invoices with reseller royalties.
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
    credit_type: Shared.CreditTypeData;

    name: string;

    total: number;

    /**
     * The type of line item.
     *
     * - `scheduled`: Line item is associated with a scheduled charge. View the
     *   scheduled_charge_id on the line item.
     * - `commit_purchase`: Line item is associated with a payment for a prepaid
     *   commit. View the commit_id on the line item.
     * - `usage`: Line item is associated with a usage product or composite product.
     *   View the product_id on the line item to determine which product.
     * - `subscription`: Line item is associated with a subscription. e.g. monthly
     *   recurring payment for an in-advance subscription.
     * - `applied_commit_or_credit`: On metronome invoices, applied commits and credits
     *   are associated with their own line items. These line items have negative
     *   totals. Use the applied_commit_or_credit object on the line item to understand
     *   the id of the applied commit or credit, and its type. Note that the
     *   application of a postpaid commit is associated with a line item, but the total
     *   on the line item is not included in the invoice's total as postpaid commits
     *   are paid in-arrears.
     * - `cpu_conversion`: Line item converting between a custom pricing unit and fiat
     *   currency, using the conversion rate set on the rate card. This line item will
     *   appear when there are products priced in custom pricing units, and there is
     *   insufficient prepaid commit/credit in that custom pricing unit to fully cover
     *   the spend. Then, the outstanding spend in custom pricing units will be
     *   converted to fiat currency using a cpu_conversion line item.
     */
    type: string;

    /**
     * Details about the credit or commit that was applied to this line item. Only
     * present on line items with product of `USAGE`, `SUBSCRIPTION` or `COMPOSITE`
     * types.
     */
    applied_commit_or_credit?: LineItem.AppliedCommitOrCredit;

    commit_custom_fields?: { [key: string]: string };

    /**
     * For line items with product of `USAGE`, `SUBSCRIPTION`, or `COMPOSITE` types,
     * the ID of the credit or commit that was applied to this line item. For line
     * items with product type of `FIXED`, the ID of the prepaid or postpaid commit
     * that is being paid for.
     */
    commit_id?: string;

    commit_netsuite_item_id?: string;

    commit_netsuite_sales_order_id?: string;

    commit_segment_id?: string;

    /**
     * `PrepaidCommit` (for commit types `PREPAID` and `CREDIT`) or `PostpaidCommit`
     * (for commit type `POSTPAID`).
     */
    commit_type?: string;

    custom_fields?: { [key: string]: string };

    discount_custom_fields?: { [key: string]: string };

    /**
     * ID of the discount applied to this line item.
     */
    discount_id?: string;

    /**
     * The line item's end date (exclusive).
     */
    ending_before?: string;

    group_key?: string;

    group_value?: string | null;

    /**
     * Indicates whether the line item is prorated for `SUBSCRIPTION` type product.
     */
    is_prorated?: boolean;

    /**
     * Only present for contract invoices and when the `include_list_prices` query
     * parameter is set to true. This will include the list rate for the charge if
     * applicable. Only present for usage and subscription line items.
     */
    list_price?: Shared.Rate;

    metadata?: string;

    /**
     * The end date for the billing period on the invoice.
     */
    netsuite_invoice_billing_end?: string;

    /**
     * The start date for the billing period on the invoice.
     */
    netsuite_invoice_billing_start?: string;

    netsuite_item_id?: string;

    /**
     * Only present for line items paying for a postpaid commit true-up.
     */
    postpaid_commit?: LineItem.PostpaidCommit;

    /**
     * Includes the presentation group values associated with this line item if
     * presentation group keys are used.
     */
    presentation_group_values?: { [key: string]: string | null };

    /**
     * Includes the pricing group values associated with this line item if dimensional
     * pricing is used.
     */
    pricing_group_values?: { [key: string]: string };

    product_custom_fields?: { [key: string]: string };

    /**
     * ID of the product associated with the line item.
     */
    product_id?: string;

    /**
     * The current product tags associated with the line item's `product_id`.
     */
    product_tags?: Array<string>;

    /**
     * The type of the line item's product. Possible values are `FixedProductListItem`
     * (for `FIXED` type products), `UsageProductListItem` (for `USAGE` type products),
     * `SubscriptionProductListItem` (for `SUBSCRIPTION` type products) or
     * `CompositeProductListItem` (for `COMPOSITE` type products). For scheduled
     * charges, commit and credit payments, the value is `FixedProductListItem`.
     */
    product_type?: string;

    professional_service_custom_fields?: { [key: string]: string };

    professional_service_id?: string;

    /**
     * The quantity associated with the line item.
     */
    quantity?: number;

    reseller_type?: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

    scheduled_charge_custom_fields?: { [key: string]: string };

    /**
     * ID of scheduled charge.
     */
    scheduled_charge_id?: string;

    /**
     * The line item's start date (inclusive).
     */
    starting_at?: string;

    sub_line_items?: Array<LineItem.SubLineItem>;

    subscription_custom_fields?: { [key: string]: string };

    /**
     * Populated if the line item has a tiered price.
     */
    tier?: LineItem.Tier;

    /**
     * The unit price associated with the line item.
     */
    unit_price?: number;
  }

  export namespace LineItem {
    /**
     * Details about the credit or commit that was applied to this line item. Only
     * present on line items with product of `USAGE`, `SUBSCRIPTION` or `COMPOSITE`
     * types.
     */
    export interface AppliedCommitOrCredit {
      id: string;

      type: 'PREPAID' | 'POSTPAID' | 'CREDIT';
    }

    /**
     * Only present for line items paying for a postpaid commit true-up.
     */
    export interface PostpaidCommit {
      id: string;
    }

    export interface SubLineItem {
      custom_fields: { [key: string]: string };

      name: string;

      quantity: number;

      subtotal: number;

      charge_id?: string;

      credit_grant_id?: string;

      /**
       * The end date for the charge (for seats charges only).
       */
      end_date?: string;

      /**
       * the unit price for this charge, present only if the charge is not tiered and the
       * quantity is nonzero
       */
      price?: number;

      /**
       * The start date for the charge (for seats charges only).
       */
      start_date?: string;

      /**
       * when the current tier started and ends (for tiered charges only)
       */
      tier_period?: SubLineItem.TierPeriod;

      tiers?: Array<SubLineItem.Tier>;
    }

    export namespace SubLineItem {
      /**
       * when the current tier started and ends (for tiered charges only)
       */
      export interface TierPeriod {
        starting_at: string;

        ending_before?: string;
      }

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

    /**
     * Populated if the line item has a tiered price.
     */
    export interface Tier {
      level: number;

      starting_at: string;

      size?: string | null;
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
    credit_type: Shared.CreditTypeData;

    name: string;

    total: number;

    credit_grant_custom_fields?: { [key: string]: string };

    credit_grant_id?: string;
  }

  /**
   * Only present for contract invoices with reseller royalties.
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

export interface InvoiceListBreakdownsResponse extends Invoice {
  breakdown_end_timestamp: string;

  breakdown_start_timestamp: string;
}

export interface InvoiceRetrieveParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Path param:
   */
  invoice_id: string;

  /**
   * Query param: If set, all zero quantity line items will be filtered out of the
   * response
   */
  skip_zero_qty_line_items?: boolean;
}

export interface InvoiceListParams extends CursorPageParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Query param: Only return invoices for the specified credit type
   */
  credit_type_id?: string;

  /**
   * Query param: RFC 3339 timestamp (exclusive). Invoices will only be returned for
   * billing periods that end before this time.
   */
  ending_before?: string;

  /**
   * Query param: If set, all zero quantity line items will be filtered out of the
   * response
   */
  skip_zero_qty_line_items?: boolean;

  /**
   * Query param: Invoice sort order by issued_at, e.g. date_asc or date_desc.
   * Defaults to date_asc.
   */
  sort?: 'date_asc' | 'date_desc';

  /**
   * Query param: RFC 3339 timestamp (inclusive). Invoices will only be returned for
   * billing periods that start at or after this time.
   */
  starting_on?: string;

  /**
   * Query param: Invoice status, e.g. DRAFT, FINALIZED, or VOID
   */
  status?: string;
}

export interface InvoiceAddChargeParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Body param: The Metronome ID of the charge to add to the invoice. Note that the
   * charge must be on a product that is not on the current plan, and the product
   * must have only fixed charges.
   */
  charge_id: string;

  /**
   * Body param: The Metronome ID of the customer plan to add the charge to.
   */
  customer_plan_id: string;

  /**
   * Body param:
   */
  description: string;

  /**
   * Body param: The start_timestamp of the invoice to add the charge to.
   */
  invoice_start_timestamp: string;

  /**
   * Body param: The price of the charge. This price will match the currency on the
   * invoice, e.g. USD cents.
   */
  price: number;

  /**
   * Body param:
   */
  quantity: number;
}

export interface InvoiceListBreakdownsParams extends CursorPageParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Query param: RFC 3339 timestamp. Breakdowns will only be returned for time
   * windows that end on or before this time.
   */
  ending_before: string;

  /**
   * Query param: RFC 3339 timestamp. Breakdowns will only be returned for time
   * windows that start on or after this time.
   */
  starting_on: string;

  /**
   * Query param: Only return invoices for the specified credit type
   */
  credit_type_id?: string;

  /**
   * Query param: If set, all zero quantity line items will be filtered out of the
   * response
   */
  skip_zero_qty_line_items?: boolean;

  /**
   * Query param: Invoice sort order by issued_at, e.g. date_asc or date_desc.
   * Defaults to date_asc.
   */
  sort?: 'date_asc' | 'date_desc';

  /**
   * Query param: Invoice status, e.g. DRAFT or FINALIZED
   */
  status?: string;

  /**
   * Query param: The granularity of the breakdowns to return. Defaults to day.
   */
  window_size?: 'HOUR' | 'DAY';
}

Invoices.InvoicesCursorPage = InvoicesCursorPage;
Invoices.InvoiceListBreakdownsResponsesCursorPage = InvoiceListBreakdownsResponsesCursorPage;

export declare namespace Invoices {
  export {
    type Invoice as Invoice,
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceAddChargeResponse as InvoiceAddChargeResponse,
    type InvoiceListBreakdownsResponse as InvoiceListBreakdownsResponse,
    InvoicesCursorPage as InvoicesCursorPage,
    InvoiceListBreakdownsResponsesCursorPage as InvoiceListBreakdownsResponsesCursorPage,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceAddChargeParams as InvoiceAddChargeParams,
    type InvoiceListBreakdownsParams as InvoiceListBreakdownsParams,
  };
}
