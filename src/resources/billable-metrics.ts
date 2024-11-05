// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import { CursorPage, type CursorPageParams } from '../pagination';

export class BillableMetrics extends APIResource {
  /**
   * Creates a new Billable Metric.
   */
  create(
    body: BillableMetricCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillableMetricCreateResponse> {
    return this._client.post('/billable-metrics/create', { body, ...options });
  }

  /**
   * Get a billable metric.
   */
  retrieve(
    params: BillableMetricRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillableMetricRetrieveResponse> {
    const { billable_metric_id } = params;
    return this._client.get(`/billable-metrics/${billable_metric_id}`, options);
  }

  /**
   * List all billable metrics.
   */
  list(
    query?: BillableMetricListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillableMetricListResponsesCursorPage, BillableMetricListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillableMetricListResponsesCursorPage, BillableMetricListResponse>;
  list(
    query: BillableMetricListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillableMetricListResponsesCursorPage, BillableMetricListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/billable-metrics', BillableMetricListResponsesCursorPage, {
      query,
      ...options,
    });
  }

  /**
   * Archive an existing billable metric.
   */
  archive(
    body: BillableMetricArchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillableMetricArchiveResponse> {
    return this._client.post('/billable-metrics/archive', { body, ...options });
  }
}

export class BillableMetricListResponsesCursorPage extends CursorPage<BillableMetricListResponse> {}

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

    custom_fields?: Record<string, string>;

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

  custom_fields?: Record<string, string>;

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
  custom_fields?: Record<string, string>;

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

BillableMetrics.BillableMetricListResponsesCursorPage = BillableMetricListResponsesCursorPage;

export declare namespace BillableMetrics {
  export {
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
}
