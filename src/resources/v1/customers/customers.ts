// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as AlertsAPI from './alerts';
import {
  AlertListParams,
  AlertListResponse,
  AlertResetParams,
  AlertRetrieveParams,
  AlertRetrieveResponse,
  Alerts,
} from './alerts';
import * as BillingConfigAPI from './billing-config';
import {
  BillingConfig as BillingConfigAPIBillingConfig,
  BillingConfigCreateParams,
  BillingConfigDeleteParams,
  BillingConfigRetrieveParams,
  BillingConfigRetrieveResponse,
} from './billing-config';
import * as CommitsAPI from './commits';
import {
  CommitCreateParams,
  CommitCreateResponse,
  CommitListParams,
  CommitListResponse,
  CommitUpdateEndDateParams,
  CommitUpdateEndDateResponse,
  Commits,
} from './commits';
import * as CreditsAPI from './credits';
import {
  CreditCreateParams,
  CreditCreateResponse,
  CreditListParams,
  CreditListResponse,
  CreditUpdateEndDateParams,
  CreditUpdateEndDateResponse,
  Credits,
} from './credits';
import * as InvoicesAPI from './invoices';
import {
  InvoiceAddChargeParams,
  InvoiceAddChargeResponse,
  InvoiceListBreakdownsParams,
  InvoiceListBreakdownsResponse,
  InvoiceListBreakdownsResponsesCursorPage,
  InvoiceListParams,
  InvoiceListResponse,
  InvoiceListResponsesCursorPage,
  InvoiceRetrieveParams,
  InvoiceRetrieveResponse,
  Invoices,
} from './invoices';
import * as NamedSchedulesAPI from './named-schedules';
import {
  NamedScheduleRetrieveParams,
  NamedScheduleRetrieveResponse,
  NamedScheduleUpdateParams,
  NamedSchedules,
} from './named-schedules';
import * as PlansAPI from './plans';
import {
  PlanAddParams,
  PlanAddResponse,
  PlanEndParams,
  PlanEndResponse,
  PlanListParams,
  PlanListPriceAdjustmentsParams,
  PlanListPriceAdjustmentsResponse,
  PlanListPriceAdjustmentsResponsesCursorPage,
  PlanListResponse,
  PlanListResponsesCursorPage,
  Plans,
} from './plans';
import { CursorPage, type CursorPageParams } from '../../../pagination';

export class Customers extends APIResource {
  alerts: AlertsAPI.Alerts = new AlertsAPI.Alerts(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  billingConfig: BillingConfigAPI.BillingConfig = new BillingConfigAPI.BillingConfig(this._client);
  commits: CommitsAPI.Commits = new CommitsAPI.Commits(this._client);
  credits: CreditsAPI.Credits = new CreditsAPI.Credits(this._client);
  namedSchedules: NamedSchedulesAPI.NamedSchedules = new NamedSchedulesAPI.NamedSchedules(this._client);

  /**
   * Create a new customer
   *
   * @example
   * ```ts
   * const customer = await client.v1.customers.create({
   *   name: 'Example, Inc.',
   *   customer_billing_provider_configurations: [
   *     {
   *       billing_provider: 'stripe',
   *       delivery_method: 'direct_to_billing_provider',
   *       configuration: {
   *         stripe_customer_id: 'cus_123',
   *         stripe_collection_method: 'charge_automatically',
   *       },
   *     },
   *   ],
   *   ingest_aliases: ['team@example.com'],
   * });
   * ```
   */
  create(body: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomerCreateResponse> {
    return this._client.post('/v1/customers', { body, ...options });
  }

  /**
   * Get a customer by Metronome ID.
   *
   * @example
   * ```ts
   * const customer = await client.v1.customers.retrieve({
   *   customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   * });
   * ```
   */
  retrieve(
    params: CustomerRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerRetrieveResponse> {
    const { customer_id } = params;
    return this._client.get(`/v1/customers/${customer_id}`, options);
  }

  /**
   * List all customers.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customerListResponse of client.v1.customers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: CustomerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListResponsesCursorPage, CustomerListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListResponsesCursorPage, CustomerListResponse>;
  list(
    query: CustomerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListResponsesCursorPage, CustomerListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/customers', CustomerListResponsesCursorPage, { query, ...options });
  }

  /**
   * Archive a customer Note: any alerts associated with the customer will not be
   * triggered.
   *
   * @example
   * ```ts
   * const response = await client.v1.customers.archive({
   *   id: '8deed800-1b7a-495d-a207-6c52bac54dc9',
   * });
   * ```
   */
  archive(
    body: CustomerArchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerArchiveResponse> {
    return this._client.post('/v1/customers/archive', { body, ...options });
  }

  /**
   * Get all billable metrics for a given customer.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customerListBillableMetricsResponse of client.v1.customers.listBillableMetrics(
   *   { customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listBillableMetrics(
    params: CustomerListBillableMetricsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListBillableMetricsResponsesCursorPage, CustomerListBillableMetricsResponse> {
    const { customer_id, ...query } = params;
    return this._client.getAPIList(
      `/v1/customers/${customer_id}/billable-metrics`,
      CustomerListBillableMetricsResponsesCursorPage,
      { query, ...options },
    );
  }

  /**
   * Fetch daily pending costs for the specified customer, broken down by credit type
   * and line items. Note: this is not supported for customers whose plan includes a
   * UNIQUE-type billable metric.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customerListCostsResponse of client.v1.customers.listCosts(
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
  listCosts(
    params: CustomerListCostsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListCostsResponsesCursorPage, CustomerListCostsResponse> {
    const { customer_id, ...query } = params;
    return this._client.getAPIList(
      `/v1/customers/${customer_id}/costs`,
      CustomerListCostsResponsesCursorPage,
      { query, ...options },
    );
  }

  /**
   * Preview how a set of events will affect a customer's invoice. Generates a draft
   * invoice for a customer using their current contract configuration and the
   * provided events. This is useful for testing how new events will affect the
   * customer's invoice before they are actually processed.
   *
   * @example
   * ```ts
   * const response = await client.v1.customers.previewEvents({
   *   customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   events: [
   *     {
   *       event_type: 'heartbeat',
   *       timestamp: '2021-01-01T00:00:00Z',
   *       properties: { cpu_hours: 100, memory_gb_hours: 200 },
   *     },
   *   ],
   * });
   * ```
   */
  previewEvents(
    params: CustomerPreviewEventsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerPreviewEventsResponse> {
    const { customer_id, ...body } = params;
    return this._client.post(`/v1/customers/${customer_id}/previewEvents`, { body, ...options });
  }

  /**
   * Sets the ingest aliases for a customer. Ingest aliases can be used in the
   * `customer_id` field when sending usage events to Metronome. This call is
   * idempotent. It fully replaces the set of ingest aliases for the given customer.
   *
   * @example
   * ```ts
   * await client.v1.customers.setIngestAliases({
   *   customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   ingest_aliases: ['team@example.com'],
   * });
   * ```
   */
  setIngestAliases(
    params: CustomerSetIngestAliasesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { customer_id, ...body } = params;
    return this._client.post(`/v1/customers/${customer_id}/setIngestAliases`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Updates the specified customer's name.
   *
   * @example
   * ```ts
   * const response = await client.v1.customers.setName({
   *   customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   name: 'Example, Inc.',
   * });
   * ```
   */
  setName(
    params: CustomerSetNameParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerSetNameResponse> {
    const { customer_id, ...body } = params;
    return this._client.post(`/v1/customers/${customer_id}/setName`, { body, ...options });
  }

  /**
   * Updates the specified customer's config.
   *
   * @example
   * ```ts
   * await client.v1.customers.updateConfig({
   *   customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   salesforce_account_id: '0015500001WO1ZiABL',
   * });
   * ```
   */
  updateConfig(params: CustomerUpdateConfigParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { customer_id, ...body } = params;
    return this._client.post(`/v1/customers/${customer_id}/updateConfig`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export class CustomerListResponsesCursorPage extends CursorPage<CustomerListResponse> {}

export class CustomerListBillableMetricsResponsesCursorPage extends CursorPage<CustomerListBillableMetricsResponse> {}

export class CustomerListCostsResponsesCursorPage extends CursorPage<CustomerListCostsResponse> {}

export interface CustomerCreateResponse {
  data: CustomerCreateResponse.Data;
}

export namespace CustomerCreateResponse {
  export interface Data {
    /**
     * the Metronome ID of the customer
     */
    id: string;

    /**
     * (deprecated, use ingest_aliases instead) the first ID (Metronome or ingest
     * alias) that can be used in usage events
     */
    external_id: string;

    /**
     * aliases for this customer that can be used instead of the Metronome customer ID
     * in usage events
     */
    ingest_aliases: Array<string>;

    name: string;

    custom_fields?: { [key: string]: string };
  }
}

export interface CustomerRetrieveResponse {
  data: CustomerRetrieveResponse.Data;
}

export namespace CustomerRetrieveResponse {
  export interface Data {
    /**
     * the Metronome ID of the customer
     */
    id: string;

    /**
     * RFC 3339 timestamp indicating when the customer was created.
     */
    created_at: string;

    custom_fields: { [key: string]: string };

    customer_config: Data.CustomerConfig;

    /**
     * (deprecated, use ingest_aliases instead) the first ID (Metronome or ingest
     * alias) that can be used in usage events
     */
    external_id: string;

    /**
     * aliases for this customer that can be used instead of the Metronome customer ID
     * in usage events
     */
    ingest_aliases: Array<string>;

    name: string;

    /**
     * RFC 3339 timestamp indicating when the customer was archived. Null if the
     * customer is active.
     */
    archived_at?: string | null;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    current_billable_status?: Data.CurrentBillableStatus;
  }

  export namespace Data {
    export interface CustomerConfig {
      /**
       * The Salesforce account ID for the customer
       */
      salesforce_account_id: string | null;
    }

    /**
     * This field's availability is dependent on your client's configuration.
     */
    export interface CurrentBillableStatus {
      value: 'billable' | 'unbillable';

      effective_at?: string | null;
    }
  }
}

export interface CustomerListResponse {
  /**
   * the Metronome ID of the customer
   */
  id: string;

  /**
   * RFC 3339 timestamp indicating when the customer was created.
   */
  created_at: string;

  custom_fields: { [key: string]: string };

  customer_config: CustomerListResponse.CustomerConfig;

  /**
   * (deprecated, use ingest_aliases instead) the first ID (Metronome or ingest
   * alias) that can be used in usage events
   */
  external_id: string;

  /**
   * aliases for this customer that can be used instead of the Metronome customer ID
   * in usage events
   */
  ingest_aliases: Array<string>;

  name: string;

  /**
   * RFC 3339 timestamp indicating when the customer was archived. Null if the
   * customer is active.
   */
  archived_at?: string | null;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  current_billable_status?: CustomerListResponse.CurrentBillableStatus;
}

export namespace CustomerListResponse {
  export interface CustomerConfig {
    /**
     * The Salesforce account ID for the customer
     */
    salesforce_account_id: string | null;
  }

  /**
   * This field's availability is dependent on your client's configuration.
   */
  export interface CurrentBillableStatus {
    value: 'billable' | 'unbillable';

    effective_at?: string | null;
  }
}

export interface CustomerArchiveResponse {
  data: CustomerArchiveResponse.Data;
}

export namespace CustomerArchiveResponse {
  export interface Data {
    id: string;
  }
}

export interface CustomerListBillableMetricsResponse {
  id: string;

  name: string;

  /**
   * (DEPRECATED) use aggregation_type instead
   */
  aggregate?: string;

  /**
   * (DEPRECATED) use aggregation_key instead
   */
  aggregate_keys?: Array<string>;

  /**
   * A key that specifies which property of the event is used to aggregate data. This
   * key must be one of the property filter names and is not applicable when the
   * aggregation type is 'count'.
   */
  aggregation_key?: string;

  /**
   * Specifies the type of aggregation performed on matching events.
   */
  aggregation_type?: 'COUNT' | 'LATEST' | 'MAX' | 'SUM' | 'UNIQUE';

  /**
   * RFC 3339 timestamp indicating when the billable metric was archived. If not
   * provided, the billable metric is not archived.
   */
  archived_at?: string;

  custom_fields?: { [key: string]: string };

  /**
   * An optional filtering rule to match the 'event_type' property of an event.
   */
  event_type_filter?: CustomerListBillableMetricsResponse.EventTypeFilter;

  /**
   * (DEPRECATED) use property_filters & event_type_filter instead
   */
  filter?: { [key: string]: unknown };

  /**
   * (DEPRECATED) use group_keys instead
   */
  group_by?: Array<string>;

  /**
   * Property names that are used to group usage costs on an invoice. Each entry
   * represents a set of properties used to slice events into distinct buckets.
   */
  group_keys?: Array<Array<string>>;

  /**
   * A list of filters to match events to this billable metric. Each filter defines a
   * rule on an event property. All rules must pass for the event to match the
   * billable metric.
   */
  property_filters?: Array<CustomerListBillableMetricsResponse.PropertyFilter>;

  /**
   * The SQL query associated with the billable metric
   */
  sql?: string;
}

export namespace CustomerListBillableMetricsResponse {
  /**
   * An optional filtering rule to match the 'event_type' property of an event.
   */
  export interface EventTypeFilter {
    /**
     * A list of event types that are explicitly included in the billable metric. If
     * specified, only events of these types will match the billable metric. Must be
     * non-empty if present.
     */
    in_values?: Array<string>;

    /**
     * A list of event types that are explicitly excluded from the billable metric. If
     * specified, events of these types will not match the billable metric. Must be
     * non-empty if present.
     */
    not_in_values?: Array<string>;
  }

  export interface PropertyFilter {
    /**
     * The name of the event property.
     */
    name: string;

    /**
     * Determines whether the property must exist in the event. If true, only events
     * with this property will pass the filter. If false, only events without this
     * property will pass the filter. If null or omitted, the existence of the property
     * is optional.
     */
    exists?: boolean;

    /**
     * Specifies the allowed values for the property to match an event. An event will
     * pass the filter only if its property value is included in this list. If
     * undefined, all property values will pass the filter. Must be non-empty if
     * present.
     */
    in_values?: Array<string>;

    /**
     * Specifies the values that prevent an event from matching the filter. An event
     * will not pass the filter if its property value is included in this list. If null
     * or empty, all property values will pass the filter. Must be non-empty if
     * present.
     */
    not_in_values?: Array<string>;
  }
}

export interface CustomerListCostsResponse {
  credit_types: { [key: string]: CustomerListCostsResponse.CreditTypes };

  end_timestamp: string;

  start_timestamp: string;
}

export namespace CustomerListCostsResponse {
  export interface CreditTypes {
    cost?: number;

    line_item_breakdown?: Array<CreditTypes.LineItemBreakdown>;

    name?: string;
  }

  export namespace CreditTypes {
    export interface LineItemBreakdown {
      cost: number;

      name: string;

      group_key?: string;

      group_value?: string | null;
    }
  }
}

export interface CustomerPreviewEventsResponse {
  data: CustomerPreviewEventsResponse.Data;
}

export namespace CustomerPreviewEventsResponse {
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

    contract_custom_fields?: { [key: string]: string };

    contract_id?: string;

    correction_record?: Data.CorrectionRecord;

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

    plan_custom_fields?: { [key: string]: string };

    plan_id?: string;

    plan_name?: string;

    /**
     * Only present for contract invoices with reseller royalties.
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
      export interface CreditType {
        id: string;

        name: string;
      }

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
       * Only present for contract invoices and when the `include_list_prices` query
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
        custom_rate?: { [key: string]: unknown };

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
        pricing_group_values?: { [key: string]: string };

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
      credit_type: InvoiceAdjustment.CreditType;

      name: string;

      total: number;

      credit_grant_custom_fields?: { [key: string]: string };

      credit_grant_id?: string;
    }

    export namespace InvoiceAdjustment {
      export interface CreditType {
        id: string;

        name: string;
      }
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
}

export interface CustomerSetNameResponse {
  data: CustomerSetNameResponse.Data;
}

export namespace CustomerSetNameResponse {
  export interface Data {
    /**
     * the Metronome ID of the customer
     */
    id: string;

    /**
     * (deprecated, use ingest_aliases instead) the first ID (Metronome or ingest
     * alias) that can be used in usage events
     */
    external_id: string;

    /**
     * aliases for this customer that can be used instead of the Metronome customer ID
     * in usage events
     */
    ingest_aliases: Array<string>;

    name: string;

    custom_fields?: { [key: string]: string };
  }
}

export interface CustomerCreateParams {
  /**
   * This will be truncated to 160 characters if the provided name is longer.
   */
  name: string;

  billing_config?: CustomerCreateParams.BillingConfig;

  custom_fields?: { [key: string]: string };

  customer_billing_provider_configurations?: Array<CustomerCreateParams.CustomerBillingProviderConfiguration>;

  /**
   * (deprecated, use ingest_aliases instead) an alias that can be used to refer to
   * this customer in usage events
   */
  external_id?: string;

  /**
   * Aliases that can be used to refer to this customer in usage events
   */
  ingest_aliases?: Array<string>;
}

export namespace CustomerCreateParams {
  export interface BillingConfig {
    billing_provider_customer_id: string;

    billing_provider_type:
      | 'aws_marketplace'
      | 'stripe'
      | 'netsuite'
      | 'custom'
      | 'azure_marketplace'
      | 'quickbooks_online'
      | 'workday'
      | 'gcp_marketplace';

    /**
     * True if the aws_product_code is a SAAS subscription product, false otherwise.
     */
    aws_is_subscription_product?: boolean;

    aws_product_code?: string;

    aws_region?:
      | 'af-south-1'
      | 'ap-east-1'
      | 'ap-northeast-1'
      | 'ap-northeast-2'
      | 'ap-northeast-3'
      | 'ap-south-1'
      | 'ap-southeast-1'
      | 'ap-southeast-2'
      | 'ca-central-1'
      | 'cn-north-1'
      | 'cn-northwest-1'
      | 'eu-central-1'
      | 'eu-north-1'
      | 'eu-south-1'
      | 'eu-west-1'
      | 'eu-west-2'
      | 'eu-west-3'
      | 'me-south-1'
      | 'sa-east-1'
      | 'us-east-1'
      | 'us-east-2'
      | 'us-gov-east-1'
      | 'us-gov-west-1'
      | 'us-west-1'
      | 'us-west-2';

    stripe_collection_method?: 'charge_automatically' | 'send_invoice';
  }

  export interface CustomerBillingProviderConfiguration {
    /**
     * The billing provider set for this configuration.
     */
    billing_provider: 'aws_marketplace' | 'azure_marketplace' | 'gcp_marketplace' | 'stripe' | 'netsuite';

    /**
     * Configuration for the billing provider. The structure of this object is specific
     * to the billing provider and delivery provider combination. Defaults to an empty
     * object, however, for most billing provider + delivery method combinations, it
     * will not be a valid configuration.
     */
    configuration?: { [key: string]: unknown };

    /**
     * The method to use for delivering invoices to this customer. If not provided, the
     * `delivery_method_id` must be provided.
     */
    delivery_method?: 'direct_to_billing_provider' | 'aws_sqs' | 'tackle' | 'aws_sns';

    /**
     * ID of the delivery method to use for this customer. If not provided, the
     * `delivery_method` must be provided.
     */
    delivery_method_id?: string;
  }
}

export interface CustomerRetrieveParams {
  customer_id: string;
}

export interface CustomerListParams extends CursorPageParams {
  /**
   * Filter the customer list by customer_id. Up to 100 ids can be provided.
   */
  customer_ids?: Array<string>;

  /**
   * Filter the customer list by ingest_alias
   */
  ingest_alias?: string;

  /**
   * Filter the customer list to only return archived customers. By default, only
   * active customers are returned.
   */
  only_archived?: boolean;

  /**
   * Filter the customer list by salesforce_account_id. Up to 100 ids can be
   * provided.
   */
  salesforce_account_ids?: Array<string>;
}

export interface CustomerArchiveParams {
  id: string;
}

export interface CustomerListBillableMetricsParams extends CursorPageParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Query param: If true, the list of returned metrics will include archived metrics
   */
  include_archived?: boolean;

  /**
   * Query param: If true, the list of metrics will be filtered to just ones that are
   * on the customer's current plan
   */
  on_current_plan?: boolean;
}

export interface CustomerListCostsParams extends CursorPageParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Query param: RFC 3339 timestamp (exclusive)
   */
  ending_before: string;

  /**
   * Query param: RFC 3339 timestamp (inclusive)
   */
  starting_on: string;
}

export interface CustomerPreviewEventsParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Body param:
   */
  events: Array<CustomerPreviewEventsParams.Event>;

  /**
   * Body param: If set to "replace", the preview will be generated as if those were
   * the only events for the specified customer. If set to "merge", the events will
   * be merged with any existing events for the specified customer. Defaults to
   * "replace".
   */
  mode?: 'replace' | 'merge';

  /**
   * Body param: If set, all zero quantity line items will be filtered out of the
   * response.
   */
  skip_zero_qty_line_items?: boolean;
}

export namespace CustomerPreviewEventsParams {
  export interface Event {
    event_type: string;

    /**
     * This has no effect for preview events, but may be set for consistency with Event
     * objects. They will be processed even if they do not match the customer's ID or
     * ingest aliases.
     */
    customer_id?: string;

    properties?: { [key: string]: unknown };

    /**
     * RFC 3339 formatted. If not provided, the current time will be used.
     */
    timestamp?: string;

    /**
     * This has no effect for preview events, but may be set for consistency with Event
     * objects. Duplicate transaction_ids are NOT filtered out, even within the same
     * request.
     */
    transaction_id?: string;
  }
}

export interface CustomerSetIngestAliasesParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Body param:
   */
  ingest_aliases: Array<string>;
}

export interface CustomerSetNameParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Body param: The new name for the customer. This will be truncated to 160
   * characters if the provided name is longer.
   */
  name: string;
}

export interface CustomerUpdateConfigParams {
  /**
   * Path param:
   */
  customer_id: string;

  /**
   * Body param: Leave in draft or set to auto-advance on invoices sent to Stripe.
   * Falls back to the client-level config if unset, which defaults to true if unset.
   */
  leave_stripe_invoices_in_draft?: boolean | null;

  /**
   * Body param: The Salesforce account ID for the customer
   */
  salesforce_account_id?: string | null;
}

Customers.CustomerListResponsesCursorPage = CustomerListResponsesCursorPage;
Customers.CustomerListBillableMetricsResponsesCursorPage = CustomerListBillableMetricsResponsesCursorPage;
Customers.CustomerListCostsResponsesCursorPage = CustomerListCostsResponsesCursorPage;
Customers.Alerts = Alerts;
Customers.Plans = Plans;
Customers.PlanListResponsesCursorPage = PlanListResponsesCursorPage;
Customers.PlanListPriceAdjustmentsResponsesCursorPage = PlanListPriceAdjustmentsResponsesCursorPage;
Customers.Invoices = Invoices;
Customers.InvoiceListResponsesCursorPage = InvoiceListResponsesCursorPage;
Customers.InvoiceListBreakdownsResponsesCursorPage = InvoiceListBreakdownsResponsesCursorPage;
Customers.BillingConfig = BillingConfigAPIBillingConfig;
Customers.Commits = Commits;
Customers.Credits = Credits;
Customers.NamedSchedules = NamedSchedules;

export declare namespace Customers {
  export {
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerListResponse as CustomerListResponse,
    type CustomerArchiveResponse as CustomerArchiveResponse,
    type CustomerListBillableMetricsResponse as CustomerListBillableMetricsResponse,
    type CustomerListCostsResponse as CustomerListCostsResponse,
    type CustomerPreviewEventsResponse as CustomerPreviewEventsResponse,
    type CustomerSetNameResponse as CustomerSetNameResponse,
    CustomerListResponsesCursorPage as CustomerListResponsesCursorPage,
    CustomerListBillableMetricsResponsesCursorPage as CustomerListBillableMetricsResponsesCursorPage,
    CustomerListCostsResponsesCursorPage as CustomerListCostsResponsesCursorPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerListParams as CustomerListParams,
    type CustomerArchiveParams as CustomerArchiveParams,
    type CustomerListBillableMetricsParams as CustomerListBillableMetricsParams,
    type CustomerListCostsParams as CustomerListCostsParams,
    type CustomerPreviewEventsParams as CustomerPreviewEventsParams,
    type CustomerSetIngestAliasesParams as CustomerSetIngestAliasesParams,
    type CustomerSetNameParams as CustomerSetNameParams,
    type CustomerUpdateConfigParams as CustomerUpdateConfigParams,
  };

  export {
    Alerts as Alerts,
    type AlertRetrieveResponse as AlertRetrieveResponse,
    type AlertListResponse as AlertListResponse,
    type AlertRetrieveParams as AlertRetrieveParams,
    type AlertListParams as AlertListParams,
    type AlertResetParams as AlertResetParams,
  };

  export {
    Plans as Plans,
    type PlanListResponse as PlanListResponse,
    type PlanAddResponse as PlanAddResponse,
    type PlanEndResponse as PlanEndResponse,
    type PlanListPriceAdjustmentsResponse as PlanListPriceAdjustmentsResponse,
    PlanListResponsesCursorPage as PlanListResponsesCursorPage,
    PlanListPriceAdjustmentsResponsesCursorPage as PlanListPriceAdjustmentsResponsesCursorPage,
    type PlanListParams as PlanListParams,
    type PlanAddParams as PlanAddParams,
    type PlanEndParams as PlanEndParams,
    type PlanListPriceAdjustmentsParams as PlanListPriceAdjustmentsParams,
  };

  export {
    Invoices as Invoices,
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

  export {
    BillingConfigAPIBillingConfig as BillingConfig,
    type BillingConfigRetrieveResponse as BillingConfigRetrieveResponse,
    type BillingConfigCreateParams as BillingConfigCreateParams,
    type BillingConfigRetrieveParams as BillingConfigRetrieveParams,
    type BillingConfigDeleteParams as BillingConfigDeleteParams,
  };

  export {
    Commits as Commits,
    type CommitCreateResponse as CommitCreateResponse,
    type CommitListResponse as CommitListResponse,
    type CommitUpdateEndDateResponse as CommitUpdateEndDateResponse,
    type CommitCreateParams as CommitCreateParams,
    type CommitListParams as CommitListParams,
    type CommitUpdateEndDateParams as CommitUpdateEndDateParams,
  };

  export {
    Credits as Credits,
    type CreditCreateResponse as CreditCreateResponse,
    type CreditListResponse as CreditListResponse,
    type CreditUpdateEndDateResponse as CreditUpdateEndDateResponse,
    type CreditCreateParams as CreditCreateParams,
    type CreditListParams as CreditListParams,
    type CreditUpdateEndDateParams as CreditUpdateEndDateParams,
  };

  export {
    NamedSchedules as NamedSchedules,
    type NamedScheduleRetrieveResponse as NamedScheduleRetrieveResponse,
    type NamedScheduleRetrieveParams as NamedScheduleRetrieveParams,
    type NamedScheduleUpdateParams as NamedScheduleUpdateParams,
  };
}
