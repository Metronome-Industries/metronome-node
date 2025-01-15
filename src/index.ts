// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type CursorPageParams, CursorPageResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AlertArchiveParams,
  AlertArchiveResponse,
  AlertCreateParams,
  AlertCreateResponse,
  Alerts,
} from './resources/alerts';
import {
  AuditLogListParams,
  AuditLogListResponse,
  AuditLogListResponsesCursorPage,
  AuditLogs,
} from './resources/audit-logs';
import {
  BillableMetricArchiveParams,
  BillableMetricArchiveResponse,
  BillableMetricCreateParams,
  BillableMetricCreateResponse,
  BillableMetricListParams,
  BillableMetricListResponse,
  BillableMetricListResponsesCursorPage,
  BillableMetricRetrieveParams,
  BillableMetricRetrieveResponse,
  BillableMetrics,
} from './resources/billable-metrics';
import {
  CreditGrantCreateParams,
  CreditGrantCreateResponse,
  CreditGrantEditParams,
  CreditGrantEditResponse,
  CreditGrantListCreditTypesParams,
  CreditGrantListCreditTypesResponse,
  CreditGrantListCreditTypesResponsesCursorPage,
  CreditGrantListEntriesParams,
  CreditGrantListEntriesResponse,
  CreditGrantListParams,
  CreditGrantListResponse,
  CreditGrantListResponsesCursorPage,
  CreditGrantVoidParams,
  CreditGrantVoidResponse,
  CreditGrants,
  CreditLedgerEntry,
  RolloverAmountMaxAmount,
  RolloverAmountMaxPercentage,
} from './resources/credit-grants';
import {
  CustomFieldAddKeyParams,
  CustomFieldDeleteValuesParams,
  CustomFieldListKeysParams,
  CustomFieldListKeysResponse,
  CustomFieldRemoveKeyParams,
  CustomFieldSetValuesParams,
  CustomFields,
} from './resources/custom-fields';
import {
  DashboardGetEmbeddableURLParams,
  DashboardGetEmbeddableURLResponse,
  Dashboards,
} from './resources/dashboards';
import {
  InvoiceRegenerateParams,
  InvoiceRegenerateResponse,
  InvoiceVoidParams,
  InvoiceVoidResponse,
  Invoices,
} from './resources/invoices';
import {
  PlanDetail,
  PlanGetDetailsParams,
  PlanGetDetailsResponse,
  PlanListChargesParams,
  PlanListChargesResponse,
  PlanListChargesResponsesCursorPage,
  PlanListCustomersParams,
  PlanListCustomersResponse,
  PlanListCustomersResponsesCursorPage,
  PlanListParams,
  PlanListResponse,
  PlanListResponsesCursorPage,
  Plans,
} from './resources/plans';
import { ServiceListResponse, Services } from './resources/services';
import {
  Usage,
  UsageIngestParams,
  UsageListParams,
  UsageListResponse,
  UsageListWithGroupsParams,
  UsageListWithGroupsResponse,
  UsageListWithGroupsResponsesCursorPage,
} from './resources/usage';
import {
  ContractAddManualBalanceEntryParams,
  ContractAmendParams,
  ContractAmendResponse,
  ContractArchiveParams,
  ContractArchiveResponse,
  ContractCreateHistoricalInvoicesParams,
  ContractCreateHistoricalInvoicesResponse,
  ContractCreateParams,
  ContractCreateResponse,
  ContractListBalancesParams,
  ContractListBalancesResponse,
  ContractListParams,
  ContractListResponse,
  ContractRetrieveParams,
  ContractRetrieveRateScheduleParams,
  ContractRetrieveRateScheduleResponse,
  ContractRetrieveResponse,
  ContractScheduleProServicesInvoiceParams,
  ContractScheduleProServicesInvoiceResponse,
  ContractSetUsageFilterParams,
  ContractUpdateEndDateParams,
  ContractUpdateEndDateResponse,
  Contracts,
} from './resources/contracts/contracts';
import {
  Customer,
  CustomerArchiveParams,
  CustomerArchiveResponse,
  CustomerCreateParams,
  CustomerCreateResponse,
  CustomerDetail,
  CustomerDetailsCursorPage,
  CustomerListBillableMetricsParams,
  CustomerListBillableMetricsResponse,
  CustomerListBillableMetricsResponsesCursorPage,
  CustomerListCostsParams,
  CustomerListCostsResponse,
  CustomerListCostsResponsesCursorPage,
  CustomerListParams,
  CustomerRetrieveParams,
  CustomerRetrieveResponse,
  CustomerSetIngestAliasesParams,
  CustomerSetNameParams,
  CustomerSetNameResponse,
  CustomerUpdateConfigParams,
  Customers,
} from './resources/customers/customers';

import { Webhooks } from './resources/webhooks';

export interface ClientOptions {
  /**
   * Defaults to process.env['METRONOME_BEARER_TOKEN'].
   */
  bearerToken?: string | undefined;

  /**
   * Defaults to process.env['METRONOME_WEBHOOK_SECRET'].
   */
  webhookSecret?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['METRONOME_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Metronome API.
 */
export class Metronome extends Core.APIClient {
  bearerToken: string;
  webhookSecret: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Metronome API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['METRONOME_BEARER_TOKEN'] ?? undefined]
   * @param {string | null | undefined} [opts.webhookSecret=process.env['METRONOME_WEBHOOK_SECRET'] ?? null]
   * @param {string} [opts.baseURL=process.env['METRONOME_BASE_URL'] ?? https://api.metronome.com/v1] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('METRONOME_BASE_URL'),
    bearerToken = Core.readEnv('METRONOME_BEARER_TOKEN'),
    webhookSecret = Core.readEnv('METRONOME_WEBHOOK_SECRET') ?? null,
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.MetronomeError(
        "The METRONOME_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Metronome client with an bearerToken option, like new Metronome({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      webhookSecret,
      ...opts,
      baseURL: baseURL || `https://api.metronome.com/v1`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
    this.webhookSecret = webhookSecret;
  }

  alerts: API.Alerts = new API.Alerts(this);
  plans: API.Plans = new API.Plans(this);
  creditGrants: API.CreditGrants = new API.CreditGrants(this);
  customers: API.Customers = new API.Customers(this);
  dashboards: API.Dashboards = new API.Dashboards(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  usage: API.Usage = new API.Usage(this);
  auditLogs: API.AuditLogs = new API.AuditLogs(this);
  customFields: API.CustomFields = new API.CustomFields(this);
  billableMetrics: API.BillableMetrics = new API.BillableMetrics(this);
  services: API.Services = new API.Services(this);
  invoices: API.Invoices = new API.Invoices(this);
  contracts: API.Contracts = new API.Contracts(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Metronome = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static MetronomeError = Errors.MetronomeError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Metronome.Alerts = Alerts;
Metronome.Plans = Plans;
Metronome.PlanListResponsesCursorPage = PlanListResponsesCursorPage;
Metronome.PlanListChargesResponsesCursorPage = PlanListChargesResponsesCursorPage;
Metronome.PlanListCustomersResponsesCursorPage = PlanListCustomersResponsesCursorPage;
Metronome.CreditGrants = CreditGrants;
Metronome.CreditGrantListResponsesCursorPage = CreditGrantListResponsesCursorPage;
Metronome.CreditGrantListCreditTypesResponsesCursorPage = CreditGrantListCreditTypesResponsesCursorPage;
Metronome.Customers = Customers;
Metronome.CustomerDetailsCursorPage = CustomerDetailsCursorPage;
Metronome.CustomerListBillableMetricsResponsesCursorPage = CustomerListBillableMetricsResponsesCursorPage;
Metronome.CustomerListCostsResponsesCursorPage = CustomerListCostsResponsesCursorPage;
Metronome.Dashboards = Dashboards;
Metronome.Usage = Usage;
Metronome.UsageListWithGroupsResponsesCursorPage = UsageListWithGroupsResponsesCursorPage;
Metronome.AuditLogs = AuditLogs;
Metronome.AuditLogListResponsesCursorPage = AuditLogListResponsesCursorPage;
Metronome.CustomFields = CustomFields;
Metronome.BillableMetrics = BillableMetrics;
Metronome.BillableMetricListResponsesCursorPage = BillableMetricListResponsesCursorPage;
Metronome.Services = Services;
Metronome.Invoices = Invoices;
Metronome.Contracts = Contracts;
export declare namespace Metronome {
  export type RequestOptions = Core.RequestOptions;

  export import CursorPage = Pagination.CursorPage;
  export { type CursorPageParams as CursorPageParams, type CursorPageResponse as CursorPageResponse };

  export {
    Alerts as Alerts,
    type AlertCreateResponse as AlertCreateResponse,
    type AlertArchiveResponse as AlertArchiveResponse,
    type AlertCreateParams as AlertCreateParams,
    type AlertArchiveParams as AlertArchiveParams,
  };

  export {
    Plans as Plans,
    type PlanDetail as PlanDetail,
    type PlanListResponse as PlanListResponse,
    type PlanGetDetailsResponse as PlanGetDetailsResponse,
    type PlanListChargesResponse as PlanListChargesResponse,
    type PlanListCustomersResponse as PlanListCustomersResponse,
    PlanListResponsesCursorPage as PlanListResponsesCursorPage,
    PlanListChargesResponsesCursorPage as PlanListChargesResponsesCursorPage,
    PlanListCustomersResponsesCursorPage as PlanListCustomersResponsesCursorPage,
    type PlanListParams as PlanListParams,
    type PlanGetDetailsParams as PlanGetDetailsParams,
    type PlanListChargesParams as PlanListChargesParams,
    type PlanListCustomersParams as PlanListCustomersParams,
  };

  export {
    CreditGrants as CreditGrants,
    type CreditLedgerEntry as CreditLedgerEntry,
    type RolloverAmountMaxAmount as RolloverAmountMaxAmount,
    type RolloverAmountMaxPercentage as RolloverAmountMaxPercentage,
    type CreditGrantCreateResponse as CreditGrantCreateResponse,
    type CreditGrantListResponse as CreditGrantListResponse,
    type CreditGrantEditResponse as CreditGrantEditResponse,
    type CreditGrantListCreditTypesResponse as CreditGrantListCreditTypesResponse,
    type CreditGrantListEntriesResponse as CreditGrantListEntriesResponse,
    type CreditGrantVoidResponse as CreditGrantVoidResponse,
    CreditGrantListResponsesCursorPage as CreditGrantListResponsesCursorPage,
    CreditGrantListCreditTypesResponsesCursorPage as CreditGrantListCreditTypesResponsesCursorPage,
    type CreditGrantCreateParams as CreditGrantCreateParams,
    type CreditGrantListParams as CreditGrantListParams,
    type CreditGrantEditParams as CreditGrantEditParams,
    type CreditGrantListCreditTypesParams as CreditGrantListCreditTypesParams,
    type CreditGrantListEntriesParams as CreditGrantListEntriesParams,
    type CreditGrantVoidParams as CreditGrantVoidParams,
  };

  export {
    Customers as Customers,
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
    Dashboards as Dashboards,
    type DashboardGetEmbeddableURLResponse as DashboardGetEmbeddableURLResponse,
    type DashboardGetEmbeddableURLParams as DashboardGetEmbeddableURLParams,
  };

  export { Webhooks as Webhooks };

  export {
    Usage as Usage,
    type UsageListResponse as UsageListResponse,
    type UsageListWithGroupsResponse as UsageListWithGroupsResponse,
    UsageListWithGroupsResponsesCursorPage as UsageListWithGroupsResponsesCursorPage,
    type UsageListParams as UsageListParams,
    type UsageIngestParams as UsageIngestParams,
    type UsageListWithGroupsParams as UsageListWithGroupsParams,
  };

  export {
    AuditLogs as AuditLogs,
    type AuditLogListResponse as AuditLogListResponse,
    AuditLogListResponsesCursorPage as AuditLogListResponsesCursorPage,
    type AuditLogListParams as AuditLogListParams,
  };

  export {
    CustomFields as CustomFields,
    type CustomFieldListKeysResponse as CustomFieldListKeysResponse,
    type CustomFieldAddKeyParams as CustomFieldAddKeyParams,
    type CustomFieldDeleteValuesParams as CustomFieldDeleteValuesParams,
    type CustomFieldListKeysParams as CustomFieldListKeysParams,
    type CustomFieldRemoveKeyParams as CustomFieldRemoveKeyParams,
    type CustomFieldSetValuesParams as CustomFieldSetValuesParams,
  };

  export {
    BillableMetrics as BillableMetrics,
    type BillableMetricCreateResponse as BillableMetricCreateResponse,
    type BillableMetricRetrieveResponse as BillableMetricRetrieveResponse,
    type BillableMetricListResponse as BillableMetricListResponse,
    type BillableMetricArchiveResponse as BillableMetricArchiveResponse,
    BillableMetricListResponsesCursorPage as BillableMetricListResponsesCursorPage,
    type BillableMetricCreateParams as BillableMetricCreateParams,
    type BillableMetricRetrieveParams as BillableMetricRetrieveParams,
    type BillableMetricListParams as BillableMetricListParams,
    type BillableMetricArchiveParams as BillableMetricArchiveParams,
  };

  export { Services as Services, type ServiceListResponse as ServiceListResponse };

  export {
    Invoices as Invoices,
    type InvoiceRegenerateResponse as InvoiceRegenerateResponse,
    type InvoiceVoidResponse as InvoiceVoidResponse,
    type InvoiceRegenerateParams as InvoiceRegenerateParams,
    type InvoiceVoidParams as InvoiceVoidParams,
  };

  export {
    Contracts as Contracts,
    type ContractCreateResponse as ContractCreateResponse,
    type ContractRetrieveResponse as ContractRetrieveResponse,
    type ContractListResponse as ContractListResponse,
    type ContractAmendResponse as ContractAmendResponse,
    type ContractArchiveResponse as ContractArchiveResponse,
    type ContractCreateHistoricalInvoicesResponse as ContractCreateHistoricalInvoicesResponse,
    type ContractListBalancesResponse as ContractListBalancesResponse,
    type ContractRetrieveRateScheduleResponse as ContractRetrieveRateScheduleResponse,
    type ContractScheduleProServicesInvoiceResponse as ContractScheduleProServicesInvoiceResponse,
    type ContractUpdateEndDateResponse as ContractUpdateEndDateResponse,
    type ContractCreateParams as ContractCreateParams,
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractListParams as ContractListParams,
    type ContractAddManualBalanceEntryParams as ContractAddManualBalanceEntryParams,
    type ContractAmendParams as ContractAmendParams,
    type ContractArchiveParams as ContractArchiveParams,
    type ContractCreateHistoricalInvoicesParams as ContractCreateHistoricalInvoicesParams,
    type ContractListBalancesParams as ContractListBalancesParams,
    type ContractRetrieveRateScheduleParams as ContractRetrieveRateScheduleParams,
    type ContractScheduleProServicesInvoiceParams as ContractScheduleProServicesInvoiceParams,
    type ContractSetUsageFilterParams as ContractSetUsageFilterParams,
    type ContractUpdateEndDateParams as ContractUpdateEndDateParams,
  };

  export type BaseUsageFilter = API.BaseUsageFilter;
  export type Commit = API.Commit;
  export type ContractWithoutAmendments = API.ContractWithoutAmendments;
  export type Credit = API.Credit;
  export type CreditTypeData = API.CreditTypeData;
  export type Discount = API.Discount;
  export type EventTypeFilter = API.EventTypeFilter;
  export type ID = API.ID;
  export type Override = API.Override;
  export type PropertyFilter = API.PropertyFilter;
  export type ProService = API.ProService;
  export type Rate = API.Rate;
  export type ScheduledCharge = API.ScheduledCharge;
  export type ScheduleDuration = API.ScheduleDuration;
  export type SchedulePointInTime = API.SchedulePointInTime;
  export type Tier = API.Tier;
}

export { toFile, fileFromPath } from './uploads';
export {
  MetronomeError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Metronome;
