// File generated from our OpenAPI spec by Stainless.

import * as Core from '@metronome-industries/metronome/core';
import { APIResource } from '@metronome-industries/metronome/resource';
import { isRequestOptions } from '@metronome-industries/metronome/core';
import * as CustomersAPI from '@metronome-industries/metronome/resources/customers/customers';
import * as Shared from '@metronome-industries/metronome/resources/shared';
import * as BillingConfigAPI from '@metronome-industries/metronome/resources/customers/billing-config';
import * as InvoicesAPI from '@metronome-industries/metronome/resources/customers/invoices';
import * as PlansAPI from '@metronome-industries/metronome/resources/customers/plans';
import { Page, type PageParams } from '@metronome-industries/metronome/pagination';

export class Customers extends APIResource {
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  billingConfig: BillingConfigAPI.BillingConfig = new BillingConfigAPI.BillingConfig(this._client);

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
  ): Core.PagePromise<CustomerDetailsPage, CustomerDetail>;
  list(options?: Core.RequestOptions): Core.PagePromise<CustomerDetailsPage, CustomerDetail>;
  list(
    query: CustomerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerDetailsPage, CustomerDetail> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/customers', CustomerDetailsPage, { query, ...options });
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
   * List all billable metrics.
   */
  listBillableMetrics(
    customerId: string,
    query?: CustomerListBillableMetricsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListBillableMetricsResponsesPage, CustomerListBillableMetricsResponse>;
  listBillableMetrics(
    customerId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListBillableMetricsResponsesPage, CustomerListBillableMetricsResponse>;
  listBillableMetrics(
    customerId: string,
    query: CustomerListBillableMetricsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomerListBillableMetricsResponsesPage, CustomerListBillableMetricsResponse> {
    if (isRequestOptions(query)) {
      return this.listBillableMetrics(customerId, {}, query);
    }
    return this._client.getAPIList(
      `/customers/${customerId}/billable-metrics`,
      CustomerListBillableMetricsResponsesPage,
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
  ): Core.PagePromise<CustomerListCostsResponsesPage, CustomerListCostsResponse> {
    return this._client.getAPIList(`/customers/${customerId}/costs`, CustomerListCostsResponsesPage, {
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
      headers: { Accept: '', ...options?.headers },
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
      headers: { Accept: '', ...options?.headers },
    });
  }
}

export class CustomerDetailsPage extends Page<CustomerDetail> {}

export class CustomerListBillableMetricsResponsesPage extends Page<CustomerListBillableMetricsResponse> {}

export class CustomerListCostsResponsesPage extends Page<CustomerListCostsResponse> {}

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
}

export namespace CustomerDetail {
  export interface CustomerConfig {
    /**
     * The Salesforce account ID for the customer
     */
    salesforce_account_id: string | null;
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

  group_by?: Array<string>;
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
      | 'quickbooks_online';

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

export interface CustomerListParams extends PageParams {
  /**
   * Filter the customer list by customer_id. Up to 100 ids can be provided.
   */
  customer_ids?: Array<string>;

  /**
   * Filter the customer list by ingest_alias
   */
  ingest_alias?: string;

  /**
   * Max number of results that should be returned
   */
  limit?: number;

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

export interface CustomerListBillableMetricsParams extends PageParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;

  /**
   * If true, the list of metrics will be filtered to just ones that are on the
   * customer's current plan
   */
  on_current_plan?: boolean;
}

export interface CustomerListCostsParams extends PageParams {
  /**
   * RFC 3339 timestamp (exclusive)
   */
  ending_before: string;

  /**
   * RFC 3339 timestamp (inclusive)
   */
  starting_on: string;

  /**
   * Max number of results that should be returned
   */
  limit?: number;
}

export interface CustomerSetIngestAliasesParams {
  ingest_aliases: Array<string>;
}

export interface CustomerSetNameParams {
  /**
   * The new name for the customer
   */
  name: string;
}

export interface CustomerUpdateConfigParams {
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
  export import CustomerDetailsPage = CustomersAPI.CustomerDetailsPage;
  export import CustomerListBillableMetricsResponsesPage = CustomersAPI.CustomerListBillableMetricsResponsesPage;
  export import CustomerListCostsResponsesPage = CustomersAPI.CustomerListCostsResponsesPage;
  export import CustomerCreateParams = CustomersAPI.CustomerCreateParams;
  export import CustomerListParams = CustomersAPI.CustomerListParams;
  export import CustomerArchiveParams = CustomersAPI.CustomerArchiveParams;
  export import CustomerListBillableMetricsParams = CustomersAPI.CustomerListBillableMetricsParams;
  export import CustomerListCostsParams = CustomersAPI.CustomerListCostsParams;
  export import CustomerSetIngestAliasesParams = CustomersAPI.CustomerSetIngestAliasesParams;
  export import CustomerSetNameParams = CustomersAPI.CustomerSetNameParams;
  export import CustomerUpdateConfigParams = CustomersAPI.CustomerUpdateConfigParams;
  export import Plans = PlansAPI.Plans;
  export import PlanListResponse = PlansAPI.PlanListResponse;
  export import PlanAddResponse = PlansAPI.PlanAddResponse;
  export import PlanEndResponse = PlansAPI.PlanEndResponse;
  export import PlanListPriceAdjustmentsResponse = PlansAPI.PlanListPriceAdjustmentsResponse;
  export import PlanListResponsesPage = PlansAPI.PlanListResponsesPage;
  export import PlanListPriceAdjustmentsResponsesPage = PlansAPI.PlanListPriceAdjustmentsResponsesPage;
  export import PlanListParams = PlansAPI.PlanListParams;
  export import PlanAddParams = PlansAPI.PlanAddParams;
  export import PlanEndParams = PlansAPI.PlanEndParams;
  export import PlanListPriceAdjustmentsParams = PlansAPI.PlanListPriceAdjustmentsParams;
  export import Invoices = InvoicesAPI.Invoices;
  export import Invoice = InvoicesAPI.Invoice;
  export import InvoiceRetrieveResponse = InvoicesAPI.InvoiceRetrieveResponse;
  export import InvoicesPage = InvoicesAPI.InvoicesPage;
  export import InvoiceListParams = InvoicesAPI.InvoiceListParams;
  export import BillingConfig = BillingConfigAPI.BillingConfig;
  export import BillingConfigRetrieveResponse = BillingConfigAPI.BillingConfigRetrieveResponse;
  export import BillingConfigCreateParams = BillingConfigAPI.BillingConfigCreateParams;
}
