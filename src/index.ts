// File generated from our OpenAPI spec by Stainless.

import * as Core from './core';
import * as Pagination from './pagination';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as qs from 'qs';
import * as API from 'metronome/resources/index';
import * as TopLevelAPI from 'metronome/resources/top-level';

export interface ClientOptions {
  /**
   * Defaults to process.env['METRONOME_BEARER_TOKEN'].
   */
  bearerToken?: string;

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

/** API Client for interfacing with the Metronome API. */
export class Metronome extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Metronome API.
   *
   * @param {string} [opts.bearerToken=process.env['METRONOME_BEARER_TOKEN'] ?? undefined]
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
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.MetronomeError(
        "The METRONOME_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Metronome client with an bearerToken option, like new Metronome({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL ?? `https://api.metronome.com/v1`,
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
  }

  alerts: API.Alerts = new API.Alerts(this);
  customerAlerts: API.CustomerAlerts = new API.CustomerAlerts(this);
  plans: API.Plans = new API.Plans(this);
  credits: API.Credits = new API.Credits(this);
  creditTypes: API.CreditTypes = new API.CreditTypes(this);
  customers: API.Customers = new API.Customers(this);
  dashboards: API.Dashboards = new API.Dashboards(this);
  webhooks: API.Webhooks = new API.Webhooks(this);
  usage: API.Usage = new API.Usage(this);
  auditLogs: API.AuditLogs = new API.AuditLogs(this);
  customFields: API.CustomFields = new API.CustomFields(this);

  /**
   * Send usage events to Metronome. The body of this request is expected to be a
   * JSON array of between 1 and 100 usage events. Compressed request bodies are
   * supported with a `Content-Encoding: gzip` header. See
   * [Getting usage into Metronome](https://docs.metronome.com/getting-usage-data-into-metronome/overview)
   * to learn more about usage events.
   */
  ingest(body: TopLevelAPI.IngestParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this.post('/ingest', { body, ...options, headers: { Accept: '', ...options?.headers } });
  }

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
  // Helper functions
  export import toFile = Uploads.toFile;
  export import fileFromPath = Uploads.fileFromPath;

  export import RequestOptions = Core.RequestOptions;

  export import Page = Pagination.Page;
  export import PageParams = Pagination.PageParams;
  export import PageResponse = Pagination.PageResponse;

  export import IngestParams = API.IngestParams;

  export import Alerts = API.Alerts;
  export import AlertCreateResponse = API.AlertCreateResponse;
  export import AlertArchiveResponse = API.AlertArchiveResponse;
  export import AlertCreateParams = API.AlertCreateParams;
  export import AlertArchiveParams = API.AlertArchiveParams;

  export import CustomerAlerts = API.CustomerAlerts;
  export import CustomerAlert = API.CustomerAlert;
  export import CustomerAlertRetrieveResponse = API.CustomerAlertRetrieveResponse;
  export import CustomerAlertsPage = API.CustomerAlertsPage;
  export import CustomerAlertRetrieveParams = API.CustomerAlertRetrieveParams;
  export import CustomerAlertListParams = API.CustomerAlertListParams;

  export import Plans = API.Plans;
  export import PlanDetail = API.PlanDetail;
  export import PlanListResponse = API.PlanListResponse;
  export import PlanGetDetailsResponse = API.PlanGetDetailsResponse;
  export import PlanListChargesResponse = API.PlanListChargesResponse;
  export import PlanListCustomersResponse = API.PlanListCustomersResponse;
  export import PlanListResponsesPage = API.PlanListResponsesPage;
  export import PlanListChargesResponsesPage = API.PlanListChargesResponsesPage;
  export import PlanListCustomersResponsesPage = API.PlanListCustomersResponsesPage;
  export import PlanListParams = API.PlanListParams;
  export import PlanListChargesParams = API.PlanListChargesParams;
  export import PlanListCustomersParams = API.PlanListCustomersParams;

  export import Credits = API.Credits;
  export import CreditCreateGrantResponse = API.CreditCreateGrantResponse;
  export import CreditEditGrantResponse = API.CreditEditGrantResponse;
  export import CreditListEntriesResponse = API.CreditListEntriesResponse;
  export import CreditListGrantsResponse = API.CreditListGrantsResponse;
  export import CreditVoidGrantResponse = API.CreditVoidGrantResponse;
  export import CreditListEntriesResponsesPage = API.CreditListEntriesResponsesPage;
  export import CreditListGrantsResponsesPage = API.CreditListGrantsResponsesPage;
  export import CreditCreateGrantParams = API.CreditCreateGrantParams;
  export import CreditEditGrantParams = API.CreditEditGrantParams;
  export import CreditListEntriesParams = API.CreditListEntriesParams;
  export import CreditListGrantsParams = API.CreditListGrantsParams;
  export import CreditVoidGrantParams = API.CreditVoidGrantParams;

  export import CreditTypes = API.CreditTypes;
  export import CreditTypeListResponse = API.CreditTypeListResponse;
  export import CreditTypeListResponsesPage = API.CreditTypeListResponsesPage;
  export import CreditTypeListParams = API.CreditTypeListParams;

  export import Customers = API.Customers;
  export import Customer = API.Customer;
  export import CustomerDetail = API.CustomerDetail;
  export import CustomerCreateResponse = API.CustomerCreateResponse;
  export import CustomerRetrieveResponse = API.CustomerRetrieveResponse;
  export import CustomerArchiveResponse = API.CustomerArchiveResponse;
  export import CustomerListBillableMetricsResponse = API.CustomerListBillableMetricsResponse;
  export import CustomerListCostsResponse = API.CustomerListCostsResponse;
  export import CustomerSetNameResponse = API.CustomerSetNameResponse;
  export import CustomerDetailsPage = API.CustomerDetailsPage;
  export import CustomerListBillableMetricsResponsesPage = API.CustomerListBillableMetricsResponsesPage;
  export import CustomerListCostsResponsesPage = API.CustomerListCostsResponsesPage;
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
  export import UsageListResponsesPage = API.UsageListResponsesPage;
  export import UsageListWithGroupsResponsesPage = API.UsageListWithGroupsResponsesPage;
  export import UsageListParams = API.UsageListParams;
  export import UsageListWithGroupsParams = API.UsageListWithGroupsParams;

  export import AuditLogs = API.AuditLogs;
  export import AuditLogListResponse = API.AuditLogListResponse;
  export import AuditLogListResponsesPage = API.AuditLogListResponsesPage;
  export import AuditLogListParams = API.AuditLogListParams;

  export import CustomFields = API.CustomFields;
  export import CustomFieldListKeysResponse = API.CustomFieldListKeysResponse;
  export import CustomFieldListKeysResponsesPage = API.CustomFieldListKeysResponsesPage;
  export import CustomFieldAddKeyParams = API.CustomFieldAddKeyParams;
  export import CustomFieldDeleteValuesParams = API.CustomFieldDeleteValuesParams;
  export import CustomFieldListKeysParams = API.CustomFieldListKeysParams;
  export import CustomFieldRemoveKeyParams = API.CustomFieldRemoveKeyParams;
  export import CustomFieldSetValuesParams = API.CustomFieldSetValuesParams;

  export import Commit = API.Commit;
  export import ContractWithoutAmendments = API.ContractWithoutAmendments;
  export import Discount = API.Discount;
  export import ID = API.ID;
  export import Override = API.Override;
  export import Rate = API.Rate;
  export import SchedulePointInTime = API.SchedulePointInTime;
  export import ScheduledCharge = API.ScheduledCharge;
}

export default Metronome;
