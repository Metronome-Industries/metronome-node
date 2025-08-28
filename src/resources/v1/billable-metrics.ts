// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BillableMetrics extends APIResource {
  /**
   * Create billable metrics programmatically with this endpoint—an essential step in
   * configuring your pricing and packaging in Metronome.
   *
   * A billable metric is a customizable query that filters and aggregates events
   * from your event stream. These metrics are continuously tracked as usage data
   * enters Metronome through the ingestion pipeline. The ingestion process
   * transforms raw usage data into actionable pricing metrics, enabling accurate
   * metering and billing for your products.
   *
   * ### Use this endpoint to:
   *
   * - Create individual or multiple billable metrics as part of a setup workflow.
   * - Automate the entire pricing configuration process, from metric creation to
   *   customer contract setup.
   * - Define metrics using either standard filtering/aggregation or a custom SQL
   *   query.
   *
   * ### Key response fields:
   *
   * - The ID of the billable metric that was created
   * - The created billable metric will be available to be used in Products, usage
   *   endpoints, and alerts.
   *
   * ### Usage guidelines:
   *
   * - Metrics defined using standard filtering and aggregation are Streaming
   *   billable metrics, which have been optimized for ultra low latency and high
   *   throughput workflows.
   * - Use SQL billable metrics if you require more flexible aggregation options.
   *
   * @example
   * ```ts
   * const billableMetric =
   *   await client.v1.billableMetrics.create({
   *     name: 'CPU Hours',
   *     aggregation_key: 'cpu_hours',
   *     aggregation_type: 'SUM',
   *     event_type_filter: { in_values: ['cpu_usage'] },
   *     group_keys: [['region'], ['machine_type']],
   *     property_filters: [
   *       { name: 'cpu_hours', exists: true },
   *       {
   *         name: 'region',
   *         exists: true,
   *         in_values: ['EU', 'NA'],
   *       },
   *       {
   *         name: 'machine_type',
   *         exists: true,
   *         in_values: ['slow', 'fast'],
   *       },
   *     ],
   *   });
   * ```
   */
  create(
    body: BillableMetricCreateParams,
    options?: RequestOptions,
  ): APIPromise<BillableMetricCreateResponse> {
    return this._client.post('/v1/billable-metrics/create', { body, ...options });
  }

  /**
   * Retrieves the complete configuration for a specific billable metric by its ID.
   * Use this to review billable metric setup before associating it with products.
   * Returns the metric's name, event type, properties, aggregation_type,
   * aggregation_key, group_keys, custom fields, and SQL query (if it's a SQL
   * billable metric). Important: Archived billable metrics will include an
   * archived_at timestamp; they no longer process new usage events but remain
   * accessible for historical reference.
   *
   * @example
   * ```ts
   * const billableMetric =
   *   await client.v1.billableMetrics.retrieve({
   *     billable_metric_id:
   *       '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   });
   * ```
   */
  retrieve(
    params: BillableMetricRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BillableMetricRetrieveResponse> {
    const { billable_metric_id } = params;
    return this._client.get(path`/v1/billable-metrics/${billable_metric_id}`, options);
  }

  /**
   * Retrieves all billable metrics with their complete configurations. Use this for
   * programmatic discovery and management of billable metrics, such as associating
   * metrics to products and auditing for orphaned or archived metrics. Important:
   * Archived metrics are excluded by default; use `include_archived=true` parameter
   * to include them.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const billableMetricListResponse of client.v1.billableMetrics.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BillableMetricListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BillableMetricListResponsesCursorPage, BillableMetricListResponse> {
    return this._client.getAPIList('/v1/billable-metrics', CursorPage<BillableMetricListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Use this endpoint to retire billable metrics that are no longer used. After a
   * billable metric is archived, that billable metric can no longer be used in any
   * new Products to define how that product should be metered. If you archive a
   * billable metric that is already associated with a Product, the Product will
   * continue to function as usual, metering based on the definition of the archived
   * billable metric. Archived billable metrics will be returned on the
   * getBillableMetric and listBillableMetrics endpoints with a populated archived_at
   * field.
   *
   * @example
   * ```ts
   * const response = await client.v1.billableMetrics.archive({
   *   id: '8deed800-1b7a-495d-a207-6c52bac54dc9',
   * });
   * ```
   */
  archive(
    body: BillableMetricArchiveParams,
    options?: RequestOptions,
  ): APIPromise<BillableMetricArchiveResponse> {
    return this._client.post('/v1/billable-metrics/archive', { body, ...options });
  }
}

export type BillableMetricListResponsesCursorPage = CursorPage<BillableMetricListResponse>;

export interface BillableMetricCreateResponse {
  data: Shared.ID;
}

export interface BillableMetricRetrieveResponse {
  data: BillableMetricRetrieveResponse.Data;
}

export namespace BillableMetricRetrieveResponse {
  export interface Data {
    /**
     * ID of the billable metric
     */
    id: string;

    /**
     * The display name of the billable metric.
     */
    name: string;

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
}

export interface BillableMetricListResponse {
  /**
   * ID of the billable metric
   */
  id: string;

  /**
   * The display name of the billable metric.
   */
  name: string;

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

export interface BillableMetricArchiveResponse {
  data: Shared.ID;
}

export interface BillableMetricCreateParams {
  /**
   * The display name of the billable metric.
   */
  name: string;

  /**
   * Specifies the type of aggregation performed on matching events. Required if
   * `sql` is not provided.
   */
  aggregation_key?: string;

  /**
   * Specifies the type of aggregation performed on matching events.
   */
  aggregation_type?: 'COUNT' | 'LATEST' | 'MAX' | 'SUM' | 'UNIQUE';

  /**
   * Custom fields to attach to the billable metric.
   */
  custom_fields?: { [key: string]: string };

  /**
   * An optional filtering rule to match the 'event_type' property of an event.
   */
  event_type_filter?: Shared.EventTypeFilter;

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
   * The SQL query associated with the billable metric. This field is mutually
   * exclusive with aggregation_type, event_type_filter, property_filters,
   * aggregation_key, and group_keys. If provided, these other fields must be
   * omitted.
   */
  sql?: string;
}

export interface BillableMetricRetrieveParams {
  billable_metric_id: string;
}

export interface BillableMetricListParams extends CursorPageParams {
  /**
   * If true, the list of returned metrics will include archived metrics
   */
  include_archived?: boolean;
}

export interface BillableMetricArchiveParams {
  id: string;
}

export declare namespace BillableMetrics {
  export {
    type BillableMetricCreateResponse as BillableMetricCreateResponse,
    type BillableMetricRetrieveResponse as BillableMetricRetrieveResponse,
    type BillableMetricListResponse as BillableMetricListResponse,
    type BillableMetricArchiveResponse as BillableMetricArchiveResponse,
    type BillableMetricListResponsesCursorPage as BillableMetricListResponsesCursorPage,
    type BillableMetricCreateParams as BillableMetricCreateParams,
    type BillableMetricRetrieveParams as BillableMetricRetrieveParams,
    type BillableMetricListParams as BillableMetricListParams,
    type BillableMetricArchiveParams as BillableMetricArchiveParams,
  };
}
