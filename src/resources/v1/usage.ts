// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import {
  CursorPage,
  type CursorPageParams,
  CursorPageWithoutLimit,
  type CursorPageWithoutLimitParams,
  PagePromise,
} from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Usage extends APIResource {
  /**
   * Retrieve aggregated usage data across multiple customers and billable metrics in
   * a single query. This batch endpoint enables you to fetch usage patterns at
   * scale, broken down by time windows, making it ideal for building analytics
   * dashboards, generating reports, and monitoring platform-wide usage trends.
   *
   * ### Use this endpoint to:
   *
   * - Generate platform-wide usage reports for internal teams
   * - Monitor aggregate usage trends across your entire customer base
   * - Create comparative usage analyses between customers or time periods
   * - Support capacity planning with historical usage patterns
   *
   * ### Key response fields:
   *
   * An array of `UsageBatchAggregate` objects containing:
   *
   * - `customer_id`: The customer this usage belongs to
   * - `billable_metric_id` and `billable_metric_name`: What was measured
   * - `start_timestamp` and `end_timestamp`: Time window for this data point
   * - `value`: Aggregated usage amount for the period
   * - `groups` (optional): Usage broken down by group keys with values
   * - `next_page`: Pagination cursor for large result sets
   *
   * ### Usage guidelines:
   *
   * - Time windows: Set `window_size` to `hour`, `day`, or `none` (entire period)
   * - Required parameters: Must specify `starting_on`, `ending_before`, and
   *   `window_size`
   * - Filtering options:
   *   - `customer_ids`: Limit to specific customers (omit for all customers)
   *   - `billable_metrics`: Limit to specific metrics (omit for all metrics)
   * - Pagination: Use `next_page` cursor to retrieve large datasets
   * - Null values: Group values may be null when no usage matches that group
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const usageListResponse of client.v1.usage.list({
   *   ending_before: '2021-01-03T00:00:00Z',
   *   starting_on: '2021-01-01T00:00:00Z',
   *   window_size: 'day',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    params: UsageListParams,
    options?: RequestOptions,
  ): PagePromise<UsageListResponsesCursorPageWithoutLimit, UsageListResponse> {
    const { next_page, ...body } = params;
    return this._client.getAPIList('/v1/usage', CursorPageWithoutLimit<UsageListResponse>, {
      query: { next_page },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * The ingest endpoint is the primary method for sending usage events to Metronome,
   * serving as the foundation for all billing calculations in your usage-based
   * pricing model. This high-throughput endpoint is designed for real-time streaming
   * ingestion, supports backdating 34 days, and is built to handle mission-critical
   * usage data with enterprise-grade reliability. Metronome supports 100,000 events
   * per second without requiring pre-aggregation or rollups and can scale up from
   * there. See the [Send usage events](/guides/events/send-usage-events) guide to
   * learn more about usage events.
   *
   * ### Use this endpoint to:
   *
   * Create a customer usage pipeline into Metronome that drives billable metrics,
   * credit drawdown, and invoicing. Track customer behavior, resource consumption,
   * and feature usage
   *
   * ### What happens when you send events:
   *
   * - Events are validated and processed in real-time
   * - Events are matched to customers using customer IDs or customer ingest aliases
   * - Events are matched to billable metrics and are immediately available for usage
   *   and spend calculations
   *
   * ### Usage guidelines:
   *
   * - Historical events can be backdated up to 34 days and will immediately impact
   *   live customer spend
   * - Duplicate events are automatically detected and ignored (34-day deduplication
   *   window)
   *
   * #### Event structure:
   *
   * Usage events are simple JSON objects designed for flexibility and ease of
   * integration:
   *
   * ```json
   * {
   *   "transaction_id": "2021-01-01T00:00:00Z_cluster42",
   *   "customer_id": "team@example.com",
   *   "event_type": "api_request",
   *   "timestamp": "2021-01-01T00:00:00Z",
   *   "properties": {
   *     "endpoint": "/v1/users",
   *     "method": "POST",
   *     "response_time_ms": 45,
   *     "region": "us-west-2"
   *   }
   * }
   * ```
   *
   * Learn more about
   * [usage event structure definitions](/guides/events/design-usage-events).
   *
   * #### Transaction ID
   *
   * The transaction_id serves as your idempotency key, ensuring events are processed
   * exactly once. Metronome maintains a 34-day deduplication window - significantly
   * longer than typical 12-hour windows - enabling robust backfill scenarios without
   * duplicate billing.
   *
   * - Best Practices:
   *   - Use UUIDs for one-time events: uuid4()
   *   - For heartbeat events, use deterministic IDs
   *   - Include enough context to avoid collisions across different event sources
   *
   * #### Customer ID
   *
   * Identifies which customer should be billed for this usage. Supports two
   * identification methods:
   *
   * - Metronome Customer ID: The UUID returned when creating a customer
   * - Ingest Alias: Your system's identifier (email, account number, etc.)
   *
   * Ingest aliases enable seamless integration without requiring ID mapping, and
   * customers can have multiple aliases for flexibility.
   *
   * #### Event Type:
   *
   * Categorizes the event type for billable metric matching. Choose descriptive
   * names that aligns with the product surface area.
   *
   * #### Properties:
   *
   * Flexible metadata also used to match billable metrics or to be used to serve as
   * group keys to create multiple pricing dimensions or breakdown costs by novel
   * properties for end customers or internal finance teams measuring underlying
   * COGs.
   *
   * @example
   * ```ts
   * await client.v1.usage.ingest();
   * ```
   */
  ingest(
    params: UsageIngestParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { usage } = params ?? {};
    return this._client.post('/v1/ingest', {
      body: usage,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve granular usage data for a specific customer and billable metric, with
   * the ability to break down usage by custom grouping dimensions. This endpoint
   * enables deep usage analytics by segmenting data across attributes like region,
   * user, model type, or any custom dimension defined in your billable metrics.
   *
   * ### Use this endpoint to:
   *
   * - Analyze usage patterns broken down by specific attributes (region, user,
   *   department, etc.)
   * - Build detailed usage dashboards with dimensional filtering
   * - Identify high-usage segments for optimization opportunities
   *
   * ### Key response fields:
   *
   * An array of `PagedUsageAggregate` objects containing:
   *
   * - `starting_on` and `ending_before`: Time window boundaries
   * - `group_key`: The dimension being grouped by (e.g., "region")
   * - `group_value`: The specific value for this group (e.g., "US-East")
   * - `value`: Aggregated usage for this group and time window
   * - `next_page`: Pagination cursor for large datasets
   *
   * ### Usage guidelines:
   *
   * - Required parameters: Must specify `customer_id`, `billable_metric_id`, and
   *   `window_size`
   * - Time windows: Set `window_size` to hour, day, or none for different
   *   granularities
   * - Group filtering: Use `group_by` to specify:
   *   - key: The dimension to group by (must be set on the billable metric as a
   *     group key)
   *   - values: Optional array to filter to specific values only
   * - Pagination: Use limit and `next_page` for large result sets
   * - Null handling: `group_value` may be null for unmatched data
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
    options?: RequestOptions,
  ): PagePromise<UsageListWithGroupsResponsesCursorPage, UsageListWithGroupsResponse> {
    const { limit, next_page, ...body } = params;
    return this._client.getAPIList('/v1/usage/groups', CursorPage<UsageListWithGroupsResponse>, {
      query: { limit, next_page },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * This endpoint retrieves events by transaction ID for events that occurred within
   * the last 34 days. It is specifically designed for sampling-based testing
   * workflows to detect revenue leakage. The Event Search API provides a critical
   * observability tool that validates the integrity of your usage pipeline by
   * allowing you to sample raw events and verify their matching against active
   * billable metrics.
   *
   * Why event observability matters for revenue leakage: Silent revenue loss occurs
   * when events are dropped, delayed, or fail to match billable metrics due to:
   *
   * - Upstream system failures
   * - Event format changes
   * - Misconfigured billable metrics
   *
   * ### Use this endpoint to:
   *
   * - Sample raw events and validate they match the expected billable metrics
   * - Build custom leakage detection alerts to prevent silent revenue loss
   * - Verify event processing accuracy during system changes or metric updates
   * - Debug event matching issues in real-time
   *
   * ### Key response fields:
   *
   * - Complete event details including transaction ID, customer ID, and properties
   * - Matched Metronome customer (if any)
   * - Matched billable metric information (if any)
   * - Processing status and duplicate detection flags
   *
   * ### Usage guidelines:
   *
   * ⚠️ Important: This endpoint is heavily rate limited and designed for sampling
   * workflows only. Do not use this endpoint to check every event in your system.
   * Instead, implement a sampling strategy to randomly validate a subset of events
   * for observability purposes.
   *
   * @example
   * ```ts
   * const response = await client.v1.usage.search({
   *   transactionIds: ['2021-01-01T00:00:00Z_cluster42'],
   * });
   * ```
   */
  search(body: UsageSearchParams, options?: RequestOptions): APIPromise<UsageSearchResponse> {
    return this._client.post('/v1/events/search', { body, ...options });
  }
}

export type UsageListResponsesCursorPageWithoutLimit = CursorPageWithoutLimit<UsageListResponse>;

export type UsageListWithGroupsResponsesCursorPage = CursorPage<UsageListWithGroupsResponse>;

export interface UsageListResponse {
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

      /**
       * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
       */
      custom_fields?: { [key: string]: string };

      /**
       * An optional filtering rule to match the 'event_type' property of an event.
       */
      event_type_filter?: Shared.EventTypeFilter;

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
      property_filters?: Array<Shared.PropertyFilter>;

      /**
       * The SQL query associated with the billable metric
       */
      sql?: string;
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

export interface UsageListParams extends CursorPageWithoutLimitParams {
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

export interface UsageIngestParams {
  usage?: Array<UsageIngestParams.Usage>;
}

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

export declare namespace Usage {
  export {
    type UsageListResponse as UsageListResponse,
    type UsageListWithGroupsResponse as UsageListWithGroupsResponse,
    type UsageSearchResponse as UsageSearchResponse,
    type UsageListResponsesCursorPageWithoutLimit as UsageListResponsesCursorPageWithoutLimit,
    type UsageListWithGroupsResponsesCursorPage as UsageListWithGroupsResponsesCursorPage,
    type UsageListParams as UsageListParams,
    type UsageIngestParams as UsageIngestParams,
    type UsageListWithGroupsParams as UsageListWithGroupsParams,
    type UsageSearchParams as UsageSearchParams,
  };
}
