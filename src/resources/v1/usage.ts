// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class Usage extends APIResource {
  /**
   * Fetch aggregated usage data for multiple customers and billable-metrics, broken
   * into intervals of the specified length.
   *
   * @example
   * ```ts
   * const usages = await client.v1.usage.list({
   *   ending_before: '2021-01-03T00:00:00Z',
   *   starting_on: '2021-01-01T00:00:00Z',
   *   window_size: 'day',
   * });
   * ```
   */
  list(params: UsageListParams, options?: Core.RequestOptions): Core.APIPromise<UsageListResponse> {
    const { next_page, ...body } = params;
    return this._client.post('/v1/usage', { query: { next_page }, body, ...options });
  }

  /**
   * Send usage events to Metronome. The body of this request is expected to be a
   * JSON array of between 1 and 100 usage events. Compressed request bodies are
   * supported with a `Content-Encoding: gzip` header. See
   * [Getting usage into Metronome](https://docs.metronome.com/connect-metronome/) to
   * learn more about usage events.
   *
   * @example
   * ```ts
   * await client.v1.usage.ingest([
   *   {
   *     customer_id: 'team@example.com',
   *     event_type: 'heartbeat',
   *     timestamp: '2021-01-01T00:00:00Z',
   *     transaction_id: '2021-01-01T00:00:00Z_cluster42',
   *   },
   * ]);
   * ```
   */
  ingest(body?: UsageIngestParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  ingest(options?: Core.RequestOptions): Core.APIPromise<void>;
  ingest(
    body?: UsageIngestParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.ingest(undefined, body);
    }
    return this._client.post('/v1/ingest', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch aggregated usage data for the specified customer, billable-metric, and
   * optional group, broken into intervals of the specified length.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const usageListWithGroupsResponse of client.v1.usage.listWithGroups(
   *   {
   *     billable_metric_id:
   *       '222796fd-d29c-429e-89b2-549fabda4ed6',
   *     customer_id: '04ca7e72-4229-4a6e-ab11-9f7376fccbcb',
   *     window_size: 'day',
   *     ending_before: '2021-01-03T00:00:00Z',
   *     group_by: {
   *       key: 'region',
   *       values: ['US-East', 'US-West', 'EU-Central'],
   *     },
   *     starting_on: '2021-01-01T00:00:00Z',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  listWithGroups(
    params: UsageListWithGroupsParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UsageListWithGroupsResponsesCursorPage, UsageListWithGroupsResponse> {
    const { limit, next_page, ...body } = params;
    return this._client.getAPIList('/v1/usage/groups', UsageListWithGroupsResponsesCursorPage, {
      query: { limit, next_page },
      body,
      method: 'post',
      ...options,
    });
  }
}

export class UsageListWithGroupsResponsesCursorPage extends CursorPage<UsageListWithGroupsResponse> {}

export interface UsageListResponse {
  data: Array<UsageListResponse.Data>;

  next_page: string | null;
}

export namespace UsageListResponse {
  export interface Data {
    billable_metric_id: string;

    billable_metric_name: string;

    customer_id: string;

    end_timestamp: string;

    start_timestamp: string;

    value: number | null;

    /**
     * Values will be either a number or null. Null indicates that there were no
     * matches for the group_by value.
     */
    groups?: Record<string, number | null>;
  }
}

export interface UsageListWithGroupsResponse {
  ending_before: string;

  group_key: string | null;

  group_value: string | null;

  starting_on: string;

  value: number | null;
}

export interface UsageListParams {
  /**
   * Body param:
   */
  ending_before: string;

  /**
   * Body param:
   */
  starting_on: string;

  /**
   * Body param: A window_size of "day" or "hour" will return the usage for the
   * specified period segmented into daily or hourly aggregates. A window_size of
   * "none" will return a single usage aggregate for the entirety of the specified
   * period.
   */
  window_size: 'HOUR' | 'DAY' | 'NONE';

  /**
   * Query param: Cursor that indicates where the next page of results should start.
   */
  next_page?: string;

  /**
   * Body param: A list of billable metrics to fetch usage for. If absent, all
   * billable metrics will be returned.
   */
  billable_metrics?: Array<UsageListParams.BillableMetric>;

  /**
   * Body param: A list of Metronome customer IDs to fetch usage for. If absent,
   * usage for all customers will be returned.
   */
  customer_ids?: Array<string>;
}

export namespace UsageListParams {
  export interface BillableMetric {
    id: string;

    group_by?: BillableMetric.GroupBy;
  }

  export namespace BillableMetric {
    export interface GroupBy {
      /**
       * The name of the group_by key to use
       */
      key: string;

      /**
       * Values of the group_by key to return in the query. If this field is omitted, all
       * available values will be returned, up to a maximum of 200.
       */
      values?: Array<string>;
    }
  }
}

export type UsageIngestParams = Array<UsageIngestParams.Usage>;

export namespace UsageIngestParams {
  export interface Usage {
    customer_id: string;

    event_type: string;

    /**
     * RFC 3339 formatted
     */
    timestamp: string;

    transaction_id: string;

    properties?: Record<string, unknown>;
  }
}

export interface UsageListWithGroupsParams extends CursorPageParams {
  /**
   * Body param:
   */
  billable_metric_id: string;

  /**
   * Body param:
   */
  customer_id: string;

  /**
   * Body param: A window_size of "day" or "hour" will return the usage for the
   * specified period segmented into daily or hourly aggregates. A window_size of
   * "none" will return a single usage aggregate for the entirety of the specified
   * period.
   */
  window_size: 'HOUR' | 'DAY' | 'NONE';

  /**
   * Body param: If true, will return the usage for the current billing period. Will
   * return an error if the customer is currently uncontracted or starting_on and
   * ending_before are specified when this is true.
   */
  current_period?: boolean;

  /**
   * Body param:
   */
  ending_before?: string;

  /**
   * Body param:
   */
  group_by?: UsageListWithGroupsParams.GroupBy;

  /**
   * Body param:
   */
  starting_on?: string;
}

export namespace UsageListWithGroupsParams {
  export interface GroupBy {
    /**
     * The name of the group_by key to use
     */
    key: string;

    /**
     * Values of the group_by key to return in the query. Omit this if you'd like all
     * values for the key returned.
     */
    values?: Array<string>;
  }
}

Usage.UsageListWithGroupsResponsesCursorPage = UsageListWithGroupsResponsesCursorPage;

export declare namespace Usage {
  export {
    type UsageListResponse as UsageListResponse,
    type UsageListWithGroupsResponse as UsageListWithGroupsResponse,
    UsageListWithGroupsResponsesCursorPage as UsageListWithGroupsResponsesCursorPage,
    type UsageListParams as UsageListParams,
    type UsageIngestParams as UsageIngestParams,
    type UsageListWithGroupsParams as UsageListWithGroupsParams,
  };
}
