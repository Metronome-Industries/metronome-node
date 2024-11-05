// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
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

  /**
   * RFC 3339 timestamp indicating when the billable metric was archived. If not
   * provided, the billable metric is not archived.
   */
  archived_at?: string;

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
