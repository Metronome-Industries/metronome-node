// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type CursorPageParams, CursorPageResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { V1 } from './resources/v1/v1';
import { V2 } from './resources/v2/v2';

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
   * @param {string} [opts.baseURL=process.env['METRONOME_BASE_URL'] ?? https://api.metronome.com] - Override the default base URL for the API.
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
      baseURL: baseURL || `https://api.metronome.com`,
    };

    super({
      baseURL: options.baseURL!,
      baseURLOverridden: baseURL ? baseURL !== 'https://api.metronome.com' : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
    this.webhookSecret = webhookSecret;
  }

  v2: API.V2 = new API.V2(this);
  v1: API.V1 = new API.V1(this);
  webhooks: API.Webhooks = new API.Webhooks(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://api.metronome.com';
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

Metronome.V2 = V2;
Metronome.V1 = V1;
export declare namespace Metronome {
  export type RequestOptions = Core.RequestOptions;

  export import CursorPage = Pagination.CursorPage;
  export { type CursorPageParams as CursorPageParams, type CursorPageResponse as CursorPageResponse };

  export { V2 as V2 };

  export { V1 as V1 };

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
