// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';

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
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

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
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
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

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Metronome {
  export type RequestOptions = Core.RequestOptions;

  export import CursorPage = Pagination.CursorPage;
  export type CursorPageParams = Pagination.CursorPageParams;
  export type CursorPageResponse<T> = Pagination.CursorPageResponse<T>;

  export import Alerts = API.Alerts;
  export type AlertCreateResponse = API.AlertCreateResponse;
  export type AlertArchiveResponse = API.AlertArchiveResponse;
  export type AlertCreateParams = API.AlertCreateParams;
  export type AlertArchiveParams = API.AlertArchiveParams;

  export import Plans = API.Plans;
  export type PlanDetail = API.PlanDetail;
  export type PlanListResponse = API.PlanListResponse;
  export type PlanGetDetailsResponse = API.PlanGetDetailsResponse;
  export type PlanListChargesResponse = API.PlanListChargesResponse;
  export type PlanListCustomersResponse = API.PlanListCustomersResponse;
  export import PlanListResponsesCursorPage = API.PlanListResponsesCursorPage;
  export import PlanListChargesResponsesCursorPage = API.PlanListChargesResponsesCursorPage;
  export import PlanListCustomersResponsesCursorPage = API.PlanListCustomersResponsesCursorPage;
  export type PlanListParams = API.PlanListParams;
  export type PlanGetDetailsParams = API.PlanGetDetailsParams;
  export type PlanListChargesParams = API.PlanListChargesParams;
  export type PlanListCustomersParams = API.PlanListCustomersParams;

  export import CreditGrants = API.CreditGrants;
  export type CreditLedgerEntry = API.CreditLedgerEntry;
  export type RolloverAmountMaxAmount = API.RolloverAmountMaxAmount;
  export type RolloverAmountMaxPercentage = API.RolloverAmountMaxPercentage;
  export type CreditGrantCreateResponse = API.CreditGrantCreateResponse;
  export type CreditGrantListResponse = API.CreditGrantListResponse;
  export type CreditGrantEditResponse = API.CreditGrantEditResponse;
  export type CreditGrantListCreditTypesResponse = API.CreditGrantListCreditTypesResponse;
  export type CreditGrantListEntriesResponse = API.CreditGrantListEntriesResponse;
  export type CreditGrantVoidResponse = API.CreditGrantVoidResponse;
  export import CreditGrantListResponsesCursorPage = API.CreditGrantListResponsesCursorPage;
  export import CreditGrantListCreditTypesResponsesCursorPage = API.CreditGrantListCreditTypesResponsesCursorPage;
  export type CreditGrantCreateParams = API.CreditGrantCreateParams;
  export type CreditGrantListParams = API.CreditGrantListParams;
  export type CreditGrantEditParams = API.CreditGrantEditParams;
  export type CreditGrantListCreditTypesParams = API.CreditGrantListCreditTypesParams;
  export type CreditGrantListEntriesParams = API.CreditGrantListEntriesParams;
  export type CreditGrantVoidParams = API.CreditGrantVoidParams;

  export import Customers = API.Customers;
  export type Customer = API.Customer;
  export type CustomerDetail = API.CustomerDetail;
  export type CustomerCreateResponse = API.CustomerCreateResponse;
  export type CustomerRetrieveResponse = API.CustomerRetrieveResponse;
  export type CustomerArchiveResponse = API.CustomerArchiveResponse;
  export type CustomerListBillableMetricsResponse = API.CustomerListBillableMetricsResponse;
  export type CustomerListCostsResponse = API.CustomerListCostsResponse;
  export type CustomerSetNameResponse = API.CustomerSetNameResponse;
  export import CustomerDetailsCursorPage = API.CustomerDetailsCursorPage;
  export import CustomerListBillableMetricsResponsesCursorPage = API.CustomerListBillableMetricsResponsesCursorPage;
  export import CustomerListCostsResponsesCursorPage = API.CustomerListCostsResponsesCursorPage;
  export type CustomerCreateParams = API.CustomerCreateParams;
  export type CustomerRetrieveParams = API.CustomerRetrieveParams;
  export type CustomerListParams = API.CustomerListParams;
  export type CustomerArchiveParams = API.CustomerArchiveParams;
  export type CustomerListBillableMetricsParams = API.CustomerListBillableMetricsParams;
  export type CustomerListCostsParams = API.CustomerListCostsParams;
  export type CustomerSetIngestAliasesParams = API.CustomerSetIngestAliasesParams;
  export type CustomerSetNameParams = API.CustomerSetNameParams;
  export type CustomerUpdateConfigParams = API.CustomerUpdateConfigParams;

  export import Dashboards = API.Dashboards;
  export type DashboardGetEmbeddableURLResponse = API.DashboardGetEmbeddableURLResponse;
  export type DashboardGetEmbeddableURLParams = API.DashboardGetEmbeddableURLParams;

  export import Webhooks = API.Webhooks;

  export import Usage = API.Usage;
  export type UsageListResponse = API.UsageListResponse;
  export type UsageListWithGroupsResponse = API.UsageListWithGroupsResponse;
  export import UsageListWithGroupsResponsesCursorPage = API.UsageListWithGroupsResponsesCursorPage;
  export type UsageListParams = API.UsageListParams;
  export type UsageIngestParams = API.UsageIngestParams;
  export type UsageListWithGroupsParams = API.UsageListWithGroupsParams;

  export import AuditLogs = API.AuditLogs;
  export type AuditLogListResponse = API.AuditLogListResponse;
  export import AuditLogListResponsesCursorPage = API.AuditLogListResponsesCursorPage;
  export type AuditLogListParams = API.AuditLogListParams;

  export import CustomFields = API.CustomFields;
  export type CustomFieldListKeysResponse = API.CustomFieldListKeysResponse;
  export type CustomFieldAddKeyParams = API.CustomFieldAddKeyParams;
  export type CustomFieldDeleteValuesParams = API.CustomFieldDeleteValuesParams;
  export type CustomFieldListKeysParams = API.CustomFieldListKeysParams;
  export type CustomFieldRemoveKeyParams = API.CustomFieldRemoveKeyParams;
  export type CustomFieldSetValuesParams = API.CustomFieldSetValuesParams;

  export import BillableMetrics = API.BillableMetrics;
  export type BillableMetricCreateResponse = API.BillableMetricCreateResponse;
  export type BillableMetricRetrieveResponse = API.BillableMetricRetrieveResponse;
  export type BillableMetricListResponse = API.BillableMetricListResponse;
  export type BillableMetricArchiveResponse = API.BillableMetricArchiveResponse;
  export import BillableMetricListResponsesCursorPage = API.BillableMetricListResponsesCursorPage;
  export type BillableMetricCreateParams = API.BillableMetricCreateParams;
  export type BillableMetricRetrieveParams = API.BillableMetricRetrieveParams;
  export type BillableMetricListParams = API.BillableMetricListParams;
  export type BillableMetricArchiveParams = API.BillableMetricArchiveParams;

  export import Services = API.Services;
  export type ServiceListResponse = API.ServiceListResponse;

  export import Invoices = API.Invoices;
  export type InvoiceRegenerateResponse = API.InvoiceRegenerateResponse;
  export type InvoiceVoidResponse = API.InvoiceVoidResponse;
  export type InvoiceRegenerateParams = API.InvoiceRegenerateParams;
  export type InvoiceVoidParams = API.InvoiceVoidParams;

  export import Contracts = API.Contracts;
  export type ContractCreateResponse = API.ContractCreateResponse;
  export type ContractRetrieveResponse = API.ContractRetrieveResponse;
  export type ContractListResponse = API.ContractListResponse;
  export type ContractAmendResponse = API.ContractAmendResponse;
  export type ContractArchiveResponse = API.ContractArchiveResponse;
  export type ContractCreateHistoricalInvoicesResponse = API.ContractCreateHistoricalInvoicesResponse;
  export type ContractListBalancesResponse = API.ContractListBalancesResponse;
  export type ContractRetrieveRateScheduleResponse = API.ContractRetrieveRateScheduleResponse;
  export type ContractScheduleProServicesInvoiceResponse = API.ContractScheduleProServicesInvoiceResponse;
  export type ContractUpdateEndDateResponse = API.ContractUpdateEndDateResponse;
  export type ContractCreateParams = API.ContractCreateParams;
  export type ContractRetrieveParams = API.ContractRetrieveParams;
  export type ContractListParams = API.ContractListParams;
  export type ContractAddManualBalanceEntryParams = API.ContractAddManualBalanceEntryParams;
  export type ContractAmendParams = API.ContractAmendParams;
  export type ContractArchiveParams = API.ContractArchiveParams;
  export type ContractCreateHistoricalInvoicesParams = API.ContractCreateHistoricalInvoicesParams;
  export type ContractListBalancesParams = API.ContractListBalancesParams;
  export type ContractRetrieveRateScheduleParams = API.ContractRetrieveRateScheduleParams;
  export type ContractScheduleProServicesInvoiceParams = API.ContractScheduleProServicesInvoiceParams;
  export type ContractSetUsageFilterParams = API.ContractSetUsageFilterParams;
  export type ContractUpdateEndDateParams = API.ContractUpdateEndDateParams;

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

export default Metronome;
