// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as qs from 'qs';
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
  export import RequestOptions = Core.RequestOptions;

  export import CursorPage = Pagination.CursorPage;
  export import CursorPageParams = Pagination.CursorPageParams;
  export import CursorPageResponse = Pagination.CursorPageResponse;

  export import Alerts = API.Alerts;
  export import AlertCreateResponse = API.AlertCreateResponse;
  export import AlertArchiveResponse = API.AlertArchiveResponse;
  export import AlertCreateParams = API.AlertCreateParams;
  export import AlertArchiveParams = API.AlertArchiveParams;

  export import Plans = API.Plans;
  export import PlanDetail = API.PlanDetail;
  export import PlanListResponse = API.PlanListResponse;
  export import PlanGetDetailsResponse = API.PlanGetDetailsResponse;
  export import PlanListChargesResponse = API.PlanListChargesResponse;
  export import PlanListCustomersResponse = API.PlanListCustomersResponse;
  export import PlanListResponsesCursorPage = API.PlanListResponsesCursorPage;
  export import PlanListChargesResponsesCursorPage = API.PlanListChargesResponsesCursorPage;
  export import PlanListCustomersResponsesCursorPage = API.PlanListCustomersResponsesCursorPage;
  export import PlanListParams = API.PlanListParams;
  export import PlanListChargesParams = API.PlanListChargesParams;
  export import PlanListCustomersParams = API.PlanListCustomersParams;

  export import CreditGrants = API.CreditGrants;
  export import CreditLedgerEntry = API.CreditLedgerEntry;
  export import RolloverAmountMaxAmount = API.RolloverAmountMaxAmount;
  export import RolloverAmountMaxPercentage = API.RolloverAmountMaxPercentage;
  export import CreditGrantCreateResponse = API.CreditGrantCreateResponse;
  export import CreditGrantListResponse = API.CreditGrantListResponse;
  export import CreditGrantEditResponse = API.CreditGrantEditResponse;
  export import CreditGrantListCreditTypesResponse = API.CreditGrantListCreditTypesResponse;
  export import CreditGrantListEntriesResponse = API.CreditGrantListEntriesResponse;
  export import CreditGrantVoidResponse = API.CreditGrantVoidResponse;
  export import CreditGrantListResponsesCursorPage = API.CreditGrantListResponsesCursorPage;
  export import CreditGrantListCreditTypesResponsesCursorPage = API.CreditGrantListCreditTypesResponsesCursorPage;
  export import CreditGrantCreateParams = API.CreditGrantCreateParams;
  export import CreditGrantListParams = API.CreditGrantListParams;
  export import CreditGrantEditParams = API.CreditGrantEditParams;
  export import CreditGrantListCreditTypesParams = API.CreditGrantListCreditTypesParams;
  export import CreditGrantListEntriesParams = API.CreditGrantListEntriesParams;
  export import CreditGrantVoidParams = API.CreditGrantVoidParams;

  export import Customers = API.Customers;
  export import Customer = API.Customer;
  export import CustomerDetail = API.CustomerDetail;
  export import CustomerCreateResponse = API.CustomerCreateResponse;
  export import CustomerRetrieveResponse = API.CustomerRetrieveResponse;
  export import CustomerArchiveResponse = API.CustomerArchiveResponse;
  export import CustomerListBillableMetricsResponse = API.CustomerListBillableMetricsResponse;
  export import CustomerListCostsResponse = API.CustomerListCostsResponse;
  export import CustomerSetNameResponse = API.CustomerSetNameResponse;
  export import CustomerDetailsCursorPage = API.CustomerDetailsCursorPage;
  export import CustomerListBillableMetricsResponsesCursorPage = API.CustomerListBillableMetricsResponsesCursorPage;
  export import CustomerListCostsResponsesCursorPage = API.CustomerListCostsResponsesCursorPage;
  export import CustomerCreateParams = API.CustomerCreateParams;
  export import CustomerListParams = API.CustomerListParams;
  export import CustomerArchiveParams = API.CustomerArchiveParams;
  export import CustomerListBillableMetricsParams = API.CustomerListBillableMetricsParams;
  export import CustomerListCostsParams = API.CustomerListCostsParams;
  export import CustomerSetIngestAliasesParams = API.CustomerSetIngestAliasesParams;
  export import CustomerSetNameParams = API.CustomerSetNameParams;
  export import CustomerUpdateConfigParams = API.CustomerUpdateConfigParams;

  export import Dashboards = API.Dashboards;
  export import DashboardGetEmbeddableURLResponse = API.DashboardGetEmbeddableURLResponse;
  export import DashboardGetEmbeddableURLParams = API.DashboardGetEmbeddableURLParams;

  export import Webhooks = API.Webhooks;

  export import Usage = API.Usage;
  export import UsageListResponse = API.UsageListResponse;
  export import UsageListWithGroupsResponse = API.UsageListWithGroupsResponse;
  export import UsageListWithGroupsResponsesCursorPage = API.UsageListWithGroupsResponsesCursorPage;
  export import UsageListParams = API.UsageListParams;
  export import UsageIngestParams = API.UsageIngestParams;
  export import UsageListWithGroupsParams = API.UsageListWithGroupsParams;

  export import AuditLogs = API.AuditLogs;
  export import AuditLogListResponse = API.AuditLogListResponse;
  export import AuditLogListResponsesCursorPage = API.AuditLogListResponsesCursorPage;
  export import AuditLogListParams = API.AuditLogListParams;

  export import CustomFields = API.CustomFields;
  export import CustomFieldListKeysResponse = API.CustomFieldListKeysResponse;
  export import CustomFieldAddKeyParams = API.CustomFieldAddKeyParams;
  export import CustomFieldDeleteValuesParams = API.CustomFieldDeleteValuesParams;
  export import CustomFieldListKeysParams = API.CustomFieldListKeysParams;
  export import CustomFieldRemoveKeyParams = API.CustomFieldRemoveKeyParams;
  export import CustomFieldSetValuesParams = API.CustomFieldSetValuesParams;

  export import BillableMetrics = API.BillableMetrics;
  export import BillableMetricCreateResponse = API.BillableMetricCreateResponse;
  export import BillableMetricRetrieveResponse = API.BillableMetricRetrieveResponse;
  export import BillableMetricListResponse = API.BillableMetricListResponse;
  export import BillableMetricArchiveResponse = API.BillableMetricArchiveResponse;
  export import BillableMetricListResponsesCursorPage = API.BillableMetricListResponsesCursorPage;
  export import BillableMetricCreateParams = API.BillableMetricCreateParams;
  export import BillableMetricListParams = API.BillableMetricListParams;
  export import BillableMetricArchiveParams = API.BillableMetricArchiveParams;

  export import Services = API.Services;
  export import ServiceListResponse = API.ServiceListResponse;

  export import Invoices = API.Invoices;
  export import InvoiceRegenerateResponse = API.InvoiceRegenerateResponse;
  export import InvoiceVoidResponse = API.InvoiceVoidResponse;
  export import InvoiceRegenerateParams = API.InvoiceRegenerateParams;
  export import InvoiceVoidParams = API.InvoiceVoidParams;

  export import Contracts = API.Contracts;
  export import ContractCreateResponse = API.ContractCreateResponse;
  export import ContractRetrieveResponse = API.ContractRetrieveResponse;
  export import ContractListResponse = API.ContractListResponse;
  export import ContractAmendResponse = API.ContractAmendResponse;
  export import ContractArchiveResponse = API.ContractArchiveResponse;
  export import ContractListBalancesResponse = API.ContractListBalancesResponse;
  export import ContractRetrieveRateScheduleResponse = API.ContractRetrieveRateScheduleResponse;
  export import ContractScheduleProServicesInvoiceResponse = API.ContractScheduleProServicesInvoiceResponse;
  export import ContractUpdateEndDateResponse = API.ContractUpdateEndDateResponse;
  export import ContractCreateParams = API.ContractCreateParams;
  export import ContractRetrieveParams = API.ContractRetrieveParams;
  export import ContractListParams = API.ContractListParams;
  export import ContractAddManualBalanceEntryParams = API.ContractAddManualBalanceEntryParams;
  export import ContractAmendParams = API.ContractAmendParams;
  export import ContractArchiveParams = API.ContractArchiveParams;
  export import ContractListBalancesParams = API.ContractListBalancesParams;
  export import ContractRetrieveRateScheduleParams = API.ContractRetrieveRateScheduleParams;
  export import ContractScheduleProServicesInvoiceParams = API.ContractScheduleProServicesInvoiceParams;
  export import ContractSetUsageFilterParams = API.ContractSetUsageFilterParams;
  export import ContractUpdateEndDateParams = API.ContractUpdateEndDateParams;

  export import BaseUsageFilter = API.BaseUsageFilter;
  export import Commit = API.Commit;
  export import ContractWithoutAmendments = API.ContractWithoutAmendments;
  export import Credit = API.Credit;
  export import CreditType = API.CreditType;
  export import Discount = API.Discount;
  export import EventTypeFilter = API.EventTypeFilter;
  export import ID = API.ID;
  export import Override = API.Override;
  export import PropertyFilter = API.PropertyFilter;
  export import ProService = API.ProService;
  export import Rate = API.Rate;
  export import ScheduledCharge = API.ScheduledCharge;
  export import ScheduleDuration = API.ScheduleDuration;
  export import SchedulePointInTime = API.SchedulePointInTime;
  export import Tier = API.Tier;
}

export default Metronome;
