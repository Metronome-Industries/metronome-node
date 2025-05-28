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
   * Archive a customer
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

    custom_fields?: Record<string, string>;
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

    custom_fields: Record<string, string>;

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

  custom_fields: Record<string, string>;

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

  custom_fields?: Record<string, string>;

  /**
   * An optional filtering rule to match the 'event_type' property of an event.
   */
  event_type_filter?: CustomerListBillableMetricsResponse.EventTypeFilter;

  /**
   * (DEPRECATED) use property_filters & event_type_filter instead
   */
  filter?: Record<string, unknown>;

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
  credit_types: Record<string, CustomerListCostsResponse.CreditTypes>;

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

    custom_fields?: Record<string, string>;
  }
}

export interface CustomerCreateParams {
  /**
   * This will be truncated to 160 characters if the provided name is longer.
   */
  name: string;

  billing_config?: CustomerCreateParams.BillingConfig;

  custom_fields?: Record<string, string>;

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
    configuration?: Record<string, unknown>;

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
