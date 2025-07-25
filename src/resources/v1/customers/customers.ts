// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as AlertsAPI from './alerts';
import {
  AlertListParams,
  AlertListResponse,
  AlertResetParams,
  AlertRetrieveParams,
  AlertRetrieveResponse,
  Alerts,
  CustomerAlert,
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
  Invoice,
  InvoiceAddChargeParams,
  InvoiceAddChargeResponse,
  InvoiceListBreakdownsParams,
  InvoiceListBreakdownsResponse,
  InvoiceListBreakdownsResponsesCursorPage,
  InvoiceListParams,
  InvoiceRetrieveParams,
  InvoiceRetrieveResponse,
  Invoices,
  InvoicesCursorPage,
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
   * for await (const customerDetail of client.v1.customers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query?: CustomerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerDetailsCursorPage, CustomerDetail>;
  list(options?: Core.RequestOptions): Core.PagePromise<CustomerDetailsCursorPage, CustomerDetail>;
  list(
    query: CustomerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerDetailsCursorPage, CustomerDetail> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/v1/customers', CustomerDetailsCursorPage, { query, ...options });
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

export class CustomerDetailsCursorPage extends CursorPage<CustomerDetail> {}

export class CustomerListBillableMetricsResponsesCursorPage extends CursorPage<CustomerListBillableMetricsResponse> {}

export class CustomerListCostsResponsesCursorPage extends CursorPage<CustomerListCostsResponse> {}

export interface Customer {
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

export interface CustomerDetail {
  /**
   * the Metronome ID of the customer
   */
  id: string;

  /**
   * RFC 3339 timestamp indicating when the customer was created.
   */
  created_at: string;

  custom_fields: { [key: string]: string };

  customer_config: CustomerDetail.CustomerConfig;

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
  current_billable_status?: CustomerDetail.CurrentBillableStatus;
}

export namespace CustomerDetail {
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

export interface CustomerCreateResponse {
  data: Customer;
}

export interface CustomerRetrieveResponse {
  data: CustomerDetail;
}

export interface CustomerArchiveResponse {
  data: Shared.ID;
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
  event_type_filter?: Shared.EventTypeFilter;

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
  property_filters?: Array<Shared.PropertyFilter>;

  /**
   * The SQL query associated with the billable metric
   */
  sql?: string;
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
  data: InvoicesAPI.Invoice;
}

export interface CustomerSetNameResponse {
  data: Customer;
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

Customers.CustomerDetailsCursorPage = CustomerDetailsCursorPage;
Customers.CustomerListBillableMetricsResponsesCursorPage = CustomerListBillableMetricsResponsesCursorPage;
Customers.CustomerListCostsResponsesCursorPage = CustomerListCostsResponsesCursorPage;
Customers.Alerts = Alerts;
Customers.Plans = Plans;
Customers.PlanListResponsesCursorPage = PlanListResponsesCursorPage;
Customers.PlanListPriceAdjustmentsResponsesCursorPage = PlanListPriceAdjustmentsResponsesCursorPage;
Customers.Invoices = Invoices;
Customers.InvoicesCursorPage = InvoicesCursorPage;
Customers.InvoiceListBreakdownsResponsesCursorPage = InvoiceListBreakdownsResponsesCursorPage;
Customers.BillingConfig = BillingConfigAPIBillingConfig;
Customers.Commits = Commits;
Customers.Credits = Credits;
Customers.NamedSchedules = NamedSchedules;

export declare namespace Customers {
  export {
    type Customer as Customer,
    type CustomerDetail as CustomerDetail,
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerArchiveResponse as CustomerArchiveResponse,
    type CustomerListBillableMetricsResponse as CustomerListBillableMetricsResponse,
    type CustomerListCostsResponse as CustomerListCostsResponse,
    type CustomerPreviewEventsResponse as CustomerPreviewEventsResponse,
    type CustomerSetNameResponse as CustomerSetNameResponse,
    CustomerDetailsCursorPage as CustomerDetailsCursorPage,
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
    type CustomerAlert as CustomerAlert,
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
