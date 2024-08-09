// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CustomersAPI from './customers';
import * as Shared from '../shared';
import * as AlertsAPI from './alerts';
import * as BillingConfigAPI from './billing-config';
import * as CommitsAPI from './commits';
import * as CreditsAPI from './credits';
import * as InvoicesAPI from './invoices';
import * as NamedSchedulesAPI from './named-schedules';
import * as PlansAPI from './plans';
import { CursorPage, type CursorPageParams } from '../../pagination';

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
   */
  create(body: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomerCreateResponse> {
    return this._client.post('/customers', { body, ...options });
  }

  /**
   * Get a customer by Metronome ID.
   */
  retrieve(customerId: string, options?: Core.RequestOptions): Core.APIPromise<CustomerRetrieveResponse> {
    return this._client.get(`/customers/${customerId}`, options);
  }

  /**
   * List all customers.
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
    return this._client.getAPIList('/customers', CustomerDetailsCursorPage, { query, ...options });
  }

  /**
   * Archive a customer
   */
  archive(
    body: CustomerArchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerArchiveResponse> {
    return this._client.post('/customers/archive', { body, ...options });
  }

  /**
   * Get all billable metrics for a given customer.
   */
  listBillableMetrics(
    customerId: string,
    query?: CustomerListBillableMetricsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListBillableMetricsResponsesCursorPage, CustomerListBillableMetricsResponse>;
  listBillableMetrics(
    customerId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListBillableMetricsResponsesCursorPage, CustomerListBillableMetricsResponse>;
  listBillableMetrics(
    customerId: string,
    query: CustomerListBillableMetricsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListBillableMetricsResponsesCursorPage, CustomerListBillableMetricsResponse> {
    if (isRequestOptions(query)) {
      return this.listBillableMetrics(customerId, {}, query);
    }
    return this._client.getAPIList(
      `/customers/${customerId}/billable-metrics`,
      CustomerListBillableMetricsResponsesCursorPage,
      { query, ...options },
    );
  }

  /**
   * Fetch daily pending costs for the specified customer, broken down by credit type
   * and line items. Note: this is not supported for customers whose plan includes a
   * UNIQUE-type billable metric.
   */
  listCosts(
    customerId: string,
    query: CustomerListCostsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListCostsResponsesCursorPage, CustomerListCostsResponse> {
    return this._client.getAPIList(`/customers/${customerId}/costs`, CustomerListCostsResponsesCursorPage, {
      query,
      ...options,
    });
  }

  /**
   * Sets the ingest aliases for a customer. Ingest aliases can be used in the
   * `customer_id` field when sending usage events to Metronome. This call is
   * idempotent. It fully replaces the set of ingest aliases for the given customer.
   */
  setIngestAliases(
    customerId: string,
    body: CustomerSetIngestAliasesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/customers/${customerId}/setIngestAliases`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Updates the specified customer's name.
   */
  setName(
    customerId: string,
    body: CustomerSetNameParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerSetNameResponse> {
    return this._client.post(`/customers/${customerId}/setName`, { body, ...options });
  }

  /**
   * Updates the specified customer's config.
   */
  updateConfig(
    customerId: string,
    body?: CustomerUpdateConfigParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  updateConfig(customerId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  updateConfig(
    customerId: string,
    body: CustomerUpdateConfigParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.updateConfig(customerId, {}, body);
    }
    return this._client.post(`/customers/${customerId}/updateConfig`, {
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

  custom_fields?: Record<string, string>;
}

export interface CustomerDetail {
  /**
   * the Metronome ID of the customer
   */
  id: string;

  custom_fields: Record<string, string>;

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
  aggregation_type?:
    | 'count'
    | 'Count'
    | 'COUNT'
    | 'latest'
    | 'Latest'
    | 'LATEST'
    | 'max'
    | 'Max'
    | 'MAX'
    | 'sum'
    | 'Sum'
    | 'SUM'
    | 'unique'
    | 'Unique'
    | 'UNIQUE';

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
  data: Customer;
}

export interface CustomerCreateParams {
  /**
   * This will be truncated to 160 characters if the provided name is longer.
   */
  name: string;

  billing_config?: CustomerCreateParams.BillingConfig;

  custom_fields?: Record<string, string>;

  /**
   * (deprecated, use ingest_aliases instead) the first ID (Metronome ID or ingest
   * alias) that can be used in usage events
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
   * Filter the customer list by only archived customers.
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
   * If true, the list of metrics will be filtered to just ones that are on the
   * customer's current plan
   */
  on_current_plan?: boolean;
}

export interface CustomerListCostsParams extends CursorPageParams {
  /**
   * RFC 3339 timestamp (exclusive)
   */
  ending_before: string;

  /**
   * RFC 3339 timestamp (inclusive)
   */
  starting_on: string;
}

export interface CustomerSetIngestAliasesParams {
  ingest_aliases: Array<string>;
}

export interface CustomerSetNameParams {
  /**
   * The new name for the customer. This will be truncated to 160 characters if the
   * provided name is longer.
   */
  name: string;
}

export interface CustomerUpdateConfigParams {
  /**
   * Leave in draft or set to auto-advance on invoices sent to Stripe. Falls back to
   * the client-level config if unset, which defaults to true if unset.
   */
  leave_stripe_invoices_in_draft?: boolean | null;

  /**
   * The Salesforce account ID for the customer
   */
  salesforce_account_id?: string | null;
}

export namespace Customers {
  export import Customer = CustomersAPI.Customer;
  export import CustomerDetail = CustomersAPI.CustomerDetail;
  export import CustomerCreateResponse = CustomersAPI.CustomerCreateResponse;
  export import CustomerRetrieveResponse = CustomersAPI.CustomerRetrieveResponse;
  export import CustomerArchiveResponse = CustomersAPI.CustomerArchiveResponse;
  export import CustomerListBillableMetricsResponse = CustomersAPI.CustomerListBillableMetricsResponse;
  export import CustomerListCostsResponse = CustomersAPI.CustomerListCostsResponse;
  export import CustomerSetNameResponse = CustomersAPI.CustomerSetNameResponse;
  export import CustomerDetailsCursorPage = CustomersAPI.CustomerDetailsCursorPage;
  export import CustomerListBillableMetricsResponsesCursorPage = CustomersAPI.CustomerListBillableMetricsResponsesCursorPage;
  export import CustomerListCostsResponsesCursorPage = CustomersAPI.CustomerListCostsResponsesCursorPage;
  export import CustomerCreateParams = CustomersAPI.CustomerCreateParams;
  export import CustomerListParams = CustomersAPI.CustomerListParams;
  export import CustomerArchiveParams = CustomersAPI.CustomerArchiveParams;
  export import CustomerListBillableMetricsParams = CustomersAPI.CustomerListBillableMetricsParams;
  export import CustomerListCostsParams = CustomersAPI.CustomerListCostsParams;
  export import CustomerSetIngestAliasesParams = CustomersAPI.CustomerSetIngestAliasesParams;
  export import CustomerSetNameParams = CustomersAPI.CustomerSetNameParams;
  export import CustomerUpdateConfigParams = CustomersAPI.CustomerUpdateConfigParams;
  export import Alerts = AlertsAPI.Alerts;
  export import CustomerAlert = AlertsAPI.CustomerAlert;
  export import AlertRetrieveResponse = AlertsAPI.AlertRetrieveResponse;
  export import AlertListResponse = AlertsAPI.AlertListResponse;
  export import AlertRetrieveParams = AlertsAPI.AlertRetrieveParams;
  export import AlertListParams = AlertsAPI.AlertListParams;
  export import AlertResetParams = AlertsAPI.AlertResetParams;
  export import Plans = PlansAPI.Plans;
  export import PlanListResponse = PlansAPI.PlanListResponse;
  export import PlanAddResponse = PlansAPI.PlanAddResponse;
  export import PlanEndResponse = PlansAPI.PlanEndResponse;
  export import PlanListPriceAdjustmentsResponse = PlansAPI.PlanListPriceAdjustmentsResponse;
  export import PlanListResponsesCursorPage = PlansAPI.PlanListResponsesCursorPage;
  export import PlanListPriceAdjustmentsResponsesCursorPage = PlansAPI.PlanListPriceAdjustmentsResponsesCursorPage;
  export import PlanListParams = PlansAPI.PlanListParams;
  export import PlanAddParams = PlansAPI.PlanAddParams;
  export import PlanEndParams = PlansAPI.PlanEndParams;
  export import PlanListPriceAdjustmentsParams = PlansAPI.PlanListPriceAdjustmentsParams;
  export import Invoices = InvoicesAPI.Invoices;
  export import Invoice = InvoicesAPI.Invoice;
  export import InvoiceRetrieveResponse = InvoicesAPI.InvoiceRetrieveResponse;
  export import InvoiceAddChargeResponse = InvoicesAPI.InvoiceAddChargeResponse;
  export import InvoicesCursorPage = InvoicesAPI.InvoicesCursorPage;
  export import InvoiceRetrieveParams = InvoicesAPI.InvoiceRetrieveParams;
  export import InvoiceListParams = InvoicesAPI.InvoiceListParams;
  export import InvoiceAddChargeParams = InvoicesAPI.InvoiceAddChargeParams;
  export import BillingConfig = BillingConfigAPI.BillingConfig;
  export import BillingConfigRetrieveResponse = BillingConfigAPI.BillingConfigRetrieveResponse;
  export import BillingConfigCreateParams = BillingConfigAPI.BillingConfigCreateParams;
  export import Commits = CommitsAPI.Commits;
  export import CommitCreateResponse = CommitsAPI.CommitCreateResponse;
  export import CommitListResponse = CommitsAPI.CommitListResponse;
  export import CommitUpdateEndDateResponse = CommitsAPI.CommitUpdateEndDateResponse;
  export import CommitCreateParams = CommitsAPI.CommitCreateParams;
  export import CommitListParams = CommitsAPI.CommitListParams;
  export import CommitUpdateEndDateParams = CommitsAPI.CommitUpdateEndDateParams;
  export import Credits = CreditsAPI.Credits;
  export import CreditCreateResponse = CreditsAPI.CreditCreateResponse;
  export import CreditListResponse = CreditsAPI.CreditListResponse;
  export import CreditUpdateEndDateResponse = CreditsAPI.CreditUpdateEndDateResponse;
  export import CreditCreateParams = CreditsAPI.CreditCreateParams;
  export import CreditListParams = CreditsAPI.CreditListParams;
  export import CreditUpdateEndDateParams = CreditsAPI.CreditUpdateEndDateParams;
  export import NamedSchedules = NamedSchedulesAPI.NamedSchedules;
  export import NamedScheduleRetrieveResponse = NamedSchedulesAPI.NamedScheduleRetrieveResponse;
  export import NamedScheduleRetrieveParams = NamedSchedulesAPI.NamedScheduleRetrieveParams;
  export import NamedScheduleUpdateParams = NamedSchedulesAPI.NamedScheduleUpdateParams;
}
