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

  /**
   * For a set of events, look up matched billable metrics and customers by
   * transaction id. This endpoint looks at transactions that occurred in the last 34
   * days, and is intended for sampling-based testing workflows. It is heavily rate
   * limited.
   *
   * @example
   * ```ts
   * const response = await client.v1.usage.search({
   *   transactionIds: ['2021-01-01T00:00:00Z_cluster42'],
   * });
   * ```
   */
  search(body: UsageSearchParams, options?: Core.RequestOptions): Core.APIPromise<UsageSearchResponse> {
    return this._client.post('/v1/events/search', { body, ...options });
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
    groups?: { [key: string]: number | null };
  }
}

export interface UsageListWithGroupsResponse {
  ending_before: string;

  group_key: string | null;

  group_value: string | null;

  starting_on: string;

  value: number | null;
}

export type UsageSearchResponse = Array<UsageSearchResponse.UsageSearchResponseItem>;

export namespace UsageSearchResponse {
  export interface UsageSearchResponseItem {
    id: string;

    /**
     * The ID of the customer in the ingest event body
     */
    customer_id: string;

    event_type: string;

    timestamp: string;

    transaction_id: string;

    is_duplicate?: boolean;

    matched_billable_metrics?: Array<UsageSearchResponseItem.MatchedBillableMetric>;

    /**
     * The customer the event was matched to if a match was found
     */
    matched_customer?: UsageSearchResponseItem.MatchedCustomer;

    processed_at?: string;

    properties?: { [key: string]: unknown };
  }

  export namespace UsageSearchResponseItem {
    export interface MatchedBillableMetric {
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

      custom_fields?: { [key: string]: string };

      /**
       * An optional filtering rule to match the 'event_type' property of an event.
       */
      event_type_filter?: MatchedBillableMetric.EventTypeFilter;

      /**
       * (DEPRECATED) use property_filters & event_type_filter instead
       */
      filter?: { [key: string]: unknown };

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
      property_filters?: Array<MatchedBillableMetric.PropertyFilter>;

      /**
       * The SQL query associated with the billable metric
       */
      sql?: string;
    }

    export namespace MatchedBillableMetric {
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

    /**
     * The customer the event was matched to if a match was found
     */
    export interface MatchedCustomer {
      id?: string;

      name?: string;
    }
  }
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

    properties?: { [key: string]: unknown };
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

export interface UsageSearchParams {
  /**
   * The transaction IDs of the events to retrieve
   */
  transactionIds: Array<string>;
}

Usage.UsageListWithGroupsResponsesCursorPage = UsageListWithGroupsResponsesCursorPage;

export declare namespace Usage {
  export {
    type UsageListResponse as UsageListResponse,
    type UsageListWithGroupsResponse as UsageListWithGroupsResponse,
    type UsageSearchResponse as UsageSearchResponse,
    UsageListWithGroupsResponsesCursorPage as UsageListWithGroupsResponsesCursorPage,
    type UsageListParams as UsageListParams,
    type UsageIngestParams as UsageIngestParams,
    type UsageListWithGroupsParams as UsageListWithGroupsParams,
    type UsageSearchParams as UsageSearchParams,
  };
}
