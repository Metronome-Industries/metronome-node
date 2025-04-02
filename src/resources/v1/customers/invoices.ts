// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { CursorPage, type CursorPageParams } from '../../../pagination';

export class Invoices extends APIResource {
  /**
   * Fetch a specific invoice for a given customer.
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
   */
  list(
    params: InvoiceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoiceListResponsesCursorPage, InvoiceListResponse> {
    const { customer_id, ...query } = params;
    return this._client.getAPIList(`/v1/customers/${customer_id}/invoices`, InvoiceListResponsesCursorPage, {
      query,
      ...options,
    });
  }

  /**
   * Add a one time charge to the specified invoice
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

export class InvoiceListResponsesCursorPage extends CursorPage<InvoiceListResponse> {}

export class InvoiceListBreakdownsResponsesCursorPage extends CursorPage<InvoiceListBreakdownsResponse> {}

export interface InvoiceRetrieveResponse {
  data: InvoiceRetrieveResponse.Data;
}

export namespace InvoiceRetrieveResponse {
  export interface Data {
    id: string;

    credit_type: Data.CreditType;

    customer_id: string;

    line_items: Array<Data.LineItem>;

    status: string;

    total: number;

    type: string;

    amendment_id?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    billable_status?: 'billable' | 'unbillable';

    contract_custom_fields?: Record<string, string>;

    contract_id?: string;

    correction_record?: Data.CorrectionRecord;

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

    external_invoice?: Data.ExternalInvoice | null;

    invoice_adjustments?: Array<Data.InvoiceAdjustment>;

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
    reseller_royalty?: Data.ResellerRoyalty;

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

  export namespace Data {
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
      applied_commit_or_credit?: LineItem.AppliedCommitOrCredit;

      /**
       * only present for beta contract invoices
       */
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

      /**
       * Only present for contract invoices and when the include_list_prices query
       * parameter is set to true. This will include the list rate for the charge if
       * applicable. Only present for usage and subscription line items.
       */
      list_price?: LineItem.ListPrice;

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

      /**
       * only present for beta contract invoices
       */
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

      tier?: LineItem.Tier;

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
      export interface AppliedCommitOrCredit {
        id: string;

        type: 'PREPAID' | 'POSTPAID' | 'CREDIT';
      }

      /**
       * Only present for contract invoices and when the include_list_prices query
       * parameter is set to true. This will include the list rate for the charge if
       * applicable. Only present for usage and subscription line items.
       */
      export interface ListPrice {
        rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

        credit_type?: ListPrice.CreditType;

        /**
         * Only set for CUSTOM rate_type. This field is interpreted by custom rate
         * processors.
         */
        custom_rate?: Record<string, unknown>;

        /**
         * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
         * set to true.
         */
        is_prorated?: boolean;

        /**
         * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
         * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
         */
        price?: number;

        /**
         * if pricing groups are used, this will contain the values used to calculate the
         * price
         */
        pricing_group_values?: Record<string, string>;

        /**
         * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
         */
        quantity?: number;

        /**
         * Only set for TIERED rate_type.
         */
        tiers?: Array<ListPrice.Tier>;

        /**
         * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
         * using list prices rather than the standard rates for this product on the
         * contract.
         */
        use_list_prices?: boolean;
      }

      export namespace ListPrice {
        export interface CreditType {
          id: string;

          name: string;
        }

        export interface Tier {
          price: number;

          size?: number;
        }
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
      credit_type: InvoiceAdjustment.CreditType;

      name: string;

      total: number;

      credit_grant_custom_fields?: Record<string, string>;

      credit_grant_id?: string;
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
}

export interface InvoiceListResponse {
  id: string;

  credit_type: InvoiceListResponse.CreditType;

  customer_id: string;

  line_items: Array<InvoiceListResponse.LineItem>;

  status: string;

  total: number;

  type: string;

  amendment_id?: string;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  billable_status?: 'billable' | 'unbillable';

  contract_custom_fields?: Record<string, string>;

  contract_id?: string;

  correction_record?: InvoiceListResponse.CorrectionRecord;

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

  external_invoice?: InvoiceListResponse.ExternalInvoice | null;

  invoice_adjustments?: Array<InvoiceListResponse.InvoiceAdjustment>;

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
  reseller_royalty?: InvoiceListResponse.ResellerRoyalty;

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

export namespace InvoiceListResponse {
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
    applied_commit_or_credit?: LineItem.AppliedCommitOrCredit;

    /**
     * only present for beta contract invoices
     */
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

    /**
     * Only present for contract invoices and when the include_list_prices query
     * parameter is set to true. This will include the list rate for the charge if
     * applicable. Only present for usage and subscription line items.
     */
    list_price?: LineItem.ListPrice;

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

    /**
     * only present for beta contract invoices
     */
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

    tier?: LineItem.Tier;

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
    export interface AppliedCommitOrCredit {
      id: string;

      type: 'PREPAID' | 'POSTPAID' | 'CREDIT';
    }

    /**
     * Only present for contract invoices and when the include_list_prices query
     * parameter is set to true. This will include the list rate for the charge if
     * applicable. Only present for usage and subscription line items.
     */
    export interface ListPrice {
      rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

      credit_type?: ListPrice.CreditType;

      /**
       * Only set for CUSTOM rate_type. This field is interpreted by custom rate
       * processors.
       */
      custom_rate?: Record<string, unknown>;

      /**
       * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
       * set to true.
       */
      is_prorated?: boolean;

      /**
       * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
       * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
       */
      price?: number;

      /**
       * if pricing groups are used, this will contain the values used to calculate the
       * price
       */
      pricing_group_values?: Record<string, string>;

      /**
       * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
       */
      quantity?: number;

      /**
       * Only set for TIERED rate_type.
       */
      tiers?: Array<ListPrice.Tier>;

      /**
       * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
       * using list prices rather than the standard rates for this product on the
       * contract.
       */
      use_list_prices?: boolean;
    }

    export namespace ListPrice {
      export interface CreditType {
        id: string;

        name: string;
      }

      export interface Tier {
        price: number;

        size?: number;
      }
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
    credit_type: InvoiceAdjustment.CreditType;

    name: string;

    total: number;

    credit_grant_custom_fields?: Record<string, string>;

    credit_grant_id?: string;
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

export interface InvoiceAddChargeResponse {}

export interface InvoiceListBreakdownsResponse {
  id: string;

  breakdown_end_timestamp: string;

  breakdown_start_timestamp: string;

  credit_type: InvoiceListBreakdownsResponse.CreditType;

  customer_id: string;

  line_items: Array<InvoiceListBreakdownsResponse.LineItem>;

  status: string;

  total: number;

  type: string;

  amendment_id?: string;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  billable_status?: 'billable' | 'unbillable';

  contract_custom_fields?: Record<string, string>;

  contract_id?: string;

  correction_record?: InvoiceListBreakdownsResponse.CorrectionRecord;

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

  external_invoice?: InvoiceListBreakdownsResponse.ExternalInvoice | null;

  invoice_adjustments?: Array<InvoiceListBreakdownsResponse.InvoiceAdjustment>;

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
  reseller_royalty?: InvoiceListBreakdownsResponse.ResellerRoyalty;

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

export namespace InvoiceListBreakdownsResponse {
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
    applied_commit_or_credit?: LineItem.AppliedCommitOrCredit;

    /**
     * only present for beta contract invoices
     */
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

    /**
     * Only present for contract invoices and when the include_list_prices query
     * parameter is set to true. This will include the list rate for the charge if
     * applicable. Only present for usage and subscription line items.
     */
    list_price?: LineItem.ListPrice;

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

    /**
     * only present for beta contract invoices
     */
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

    tier?: LineItem.Tier;

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
    export interface AppliedCommitOrCredit {
      id: string;

      type: 'PREPAID' | 'POSTPAID' | 'CREDIT';
    }

    /**
     * Only present for contract invoices and when the include_list_prices query
     * parameter is set to true. This will include the list rate for the charge if
     * applicable. Only present for usage and subscription line items.
     */
    export interface ListPrice {
      rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

      credit_type?: ListPrice.CreditType;

      /**
       * Only set for CUSTOM rate_type. This field is interpreted by custom rate
       * processors.
       */
      custom_rate?: Record<string, unknown>;

      /**
       * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
       * set to true.
       */
      is_prorated?: boolean;

      /**
       * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
       * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
       */
      price?: number;

      /**
       * if pricing groups are used, this will contain the values used to calculate the
       * price
       */
      pricing_group_values?: Record<string, string>;

      /**
       * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
       */
      quantity?: number;

      /**
       * Only set for TIERED rate_type.
       */
      tiers?: Array<ListPrice.Tier>;

      /**
       * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
       * using list prices rather than the standard rates for this product on the
       * contract.
       */
      use_list_prices?: boolean;
    }

    export namespace ListPrice {
      export interface CreditType {
        id: string;

        name: string;
      }

      export interface Tier {
        price: number;

        size?: number;
      }
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
    credit_type: InvoiceAdjustment.CreditType;

    name: string;

    total: number;

    credit_grant_custom_fields?: Record<string, string>;

    credit_grant_id?: string;
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

Invoices.InvoiceListResponsesCursorPage = InvoiceListResponsesCursorPage;
Invoices.InvoiceListBreakdownsResponsesCursorPage = InvoiceListBreakdownsResponsesCursorPage;

export declare namespace Invoices {
  export {
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceAddChargeResponse as InvoiceAddChargeResponse,
    type InvoiceListBreakdownsResponse as InvoiceListBreakdownsResponse,
    InvoiceListResponsesCursorPage as InvoiceListResponsesCursorPage,
    InvoiceListBreakdownsResponsesCursorPage as InvoiceListBreakdownsResponsesCursorPage,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceAddChargeParams as InvoiceAddChargeParams,
    type InvoiceListBreakdownsParams as InvoiceListBreakdownsParams,
  };
}
