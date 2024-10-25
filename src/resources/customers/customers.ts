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
  retrieve(
    params: CustomerRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerRetrieveResponse> {
    const { customer_id } = params;
    return this._client.get(`/customers/${customer_id}`, options);
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
    params: CustomerListBillableMetricsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListBillableMetricsResponsesCursorPage, CustomerListBillableMetricsResponse> {
    const { customer_id, ...query } = params;
    return this._client.getAPIList(
      `/customers/${customer_id}/billable-metrics`,
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
    params: CustomerListCostsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListCostsResponsesCursorPage, CustomerListCostsResponse> {
    const { customer_id, ...query } = params;
    return this._client.getAPIList(`/customers/${customer_id}/costs`, CustomerListCostsResponsesCursorPage, {
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
    params: CustomerSetIngestAliasesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { customer_id, ...body } = params;
    return this._client.post(`/customers/${customer_id}/setIngestAliases`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Updates the specified customer's name.
   */
  setName(
    params: CustomerSetNameParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerSetNameResponse> {
    const { customer_id, ...body } = params;
    return this._client.post(`/customers/${customer_id}/setName`, { body, ...options });
  }

  /**
   * Updates the specified customer's config.
   */
  updateConfig(params: CustomerUpdateConfigParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { customer_id, ...body } = params;
    return this._client.post(`/customers/${customer_id}/updateConfig`, {
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
  aggregation_type?: 'COUNT' | 'LATEST' | 'MAX' | 'SUM' | 'UNIQUE';

  custom_fields?: Record<string, string>;

  /**
   * An optional filtering rule to match the 'event_type' property of an event.
   */
  event_type_filter?: Shared.EventTypeFilter;

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
  property_filters?: Array<Shared.PropertyFilter>;

  /**
   * The SQL query associated with the billable metric
   */
  sql?: string;
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
   * Path param:
   */
  customer_id: string;

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

export namespace Customers {
  export type Customer = CustomersAPI.Customer;
  export type CustomerDetail = CustomersAPI.CustomerDetail;
  export type CustomerCreateResponse = CustomersAPI.CustomerCreateResponse;
  export type CustomerRetrieveResponse = CustomersAPI.CustomerRetrieveResponse;
  export type CustomerArchiveResponse = CustomersAPI.CustomerArchiveResponse;
  export type CustomerListBillableMetricsResponse = CustomersAPI.CustomerListBillableMetricsResponse;
  export type CustomerListCostsResponse = CustomersAPI.CustomerListCostsResponse;
  export type CustomerSetNameResponse = CustomersAPI.CustomerSetNameResponse;
  export import CustomerDetailsCursorPage = CustomersAPI.CustomerDetailsCursorPage;
  export import CustomerListBillableMetricsResponsesCursorPage = CustomersAPI.CustomerListBillableMetricsResponsesCursorPage;
  export import CustomerListCostsResponsesCursorPage = CustomersAPI.CustomerListCostsResponsesCursorPage;
  export type CustomerCreateParams = CustomersAPI.CustomerCreateParams;
  export type CustomerRetrieveParams = CustomersAPI.CustomerRetrieveParams;
  export type CustomerListParams = CustomersAPI.CustomerListParams;
  export type CustomerArchiveParams = CustomersAPI.CustomerArchiveParams;
  export type CustomerListBillableMetricsParams = CustomersAPI.CustomerListBillableMetricsParams;
  export type CustomerListCostsParams = CustomersAPI.CustomerListCostsParams;
  export type CustomerSetIngestAliasesParams = CustomersAPI.CustomerSetIngestAliasesParams;
  export type CustomerSetNameParams = CustomersAPI.CustomerSetNameParams;
  export type CustomerUpdateConfigParams = CustomersAPI.CustomerUpdateConfigParams;
  export import Alerts = AlertsAPI.Alerts;
  export type CustomerAlert = AlertsAPI.CustomerAlert;
  export type AlertRetrieveResponse = AlertsAPI.AlertRetrieveResponse;
  export type AlertListResponse = AlertsAPI.AlertListResponse;
  export type AlertRetrieveParams = AlertsAPI.AlertRetrieveParams;
  export type AlertListParams = AlertsAPI.AlertListParams;
  export type AlertResetParams = AlertsAPI.AlertResetParams;
  export import Plans = PlansAPI.Plans;
  export type PlanListResponse = PlansAPI.PlanListResponse;
  export type PlanAddResponse = PlansAPI.PlanAddResponse;
  export type PlanEndResponse = PlansAPI.PlanEndResponse;
  export type PlanListPriceAdjustmentsResponse = PlansAPI.PlanListPriceAdjustmentsResponse;
  export import PlanListResponsesCursorPage = PlansAPI.PlanListResponsesCursorPage;
  export import PlanListPriceAdjustmentsResponsesCursorPage = PlansAPI.PlanListPriceAdjustmentsResponsesCursorPage;
  export type PlanListParams = PlansAPI.PlanListParams;
  export type PlanAddParams = PlansAPI.PlanAddParams;
  export type PlanEndParams = PlansAPI.PlanEndParams;
  export type PlanListPriceAdjustmentsParams = PlansAPI.PlanListPriceAdjustmentsParams;
  export import Invoices = InvoicesAPI.Invoices;
  export type Invoice = InvoicesAPI.Invoice;
  export type InvoiceRetrieveResponse = InvoicesAPI.InvoiceRetrieveResponse;
  export type InvoiceAddChargeResponse = InvoicesAPI.InvoiceAddChargeResponse;
  export type InvoiceListBreakdownsResponse = InvoicesAPI.InvoiceListBreakdownsResponse;
  export import InvoicesCursorPage = InvoicesAPI.InvoicesCursorPage;
  export import InvoiceListBreakdownsResponsesCursorPage = InvoicesAPI.InvoiceListBreakdownsResponsesCursorPage;
  export type InvoiceRetrieveParams = InvoicesAPI.InvoiceRetrieveParams;
  export type InvoiceListParams = InvoicesAPI.InvoiceListParams;
  export type InvoiceAddChargeParams = InvoicesAPI.InvoiceAddChargeParams;
  export type InvoiceListBreakdownsParams = InvoicesAPI.InvoiceListBreakdownsParams;
  export import BillingConfig = BillingConfigAPI.BillingConfig;
  export type BillingConfigRetrieveResponse = BillingConfigAPI.BillingConfigRetrieveResponse;
  export type BillingConfigCreateParams = BillingConfigAPI.BillingConfigCreateParams;
  export type BillingConfigRetrieveParams = BillingConfigAPI.BillingConfigRetrieveParams;
  export type BillingConfigDeleteParams = BillingConfigAPI.BillingConfigDeleteParams;
  export import Commits = CommitsAPI.Commits;
  export type CommitCreateResponse = CommitsAPI.CommitCreateResponse;
  export type CommitListResponse = CommitsAPI.CommitListResponse;
  export type CommitUpdateEndDateResponse = CommitsAPI.CommitUpdateEndDateResponse;
  export type CommitCreateParams = CommitsAPI.CommitCreateParams;
  export type CommitListParams = CommitsAPI.CommitListParams;
  export type CommitUpdateEndDateParams = CommitsAPI.CommitUpdateEndDateParams;
  export import Credits = CreditsAPI.Credits;
  export type CreditCreateResponse = CreditsAPI.CreditCreateResponse;
  export type CreditListResponse = CreditsAPI.CreditListResponse;
  export type CreditUpdateEndDateResponse = CreditsAPI.CreditUpdateEndDateResponse;
  export type CreditCreateParams = CreditsAPI.CreditCreateParams;
  export type CreditListParams = CreditsAPI.CreditListParams;
  export type CreditUpdateEndDateParams = CreditsAPI.CreditUpdateEndDateParams;
  export import NamedSchedules = NamedSchedulesAPI.NamedSchedules;
  export type NamedScheduleRetrieveResponse = NamedSchedulesAPI.NamedScheduleRetrieveResponse;
  export type NamedScheduleRetrieveParams = NamedSchedulesAPI.NamedScheduleRetrieveParams;
  export type NamedScheduleUpdateParams = NamedSchedulesAPI.NamedScheduleUpdateParams;
}
