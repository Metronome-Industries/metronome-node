// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as BillableMetricsAPI from './billable-metrics';
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
    billableMetricId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillableMetricRetrieveResponse> {
    return this._client.get(`/billable-metrics/${billableMetricId}`, options);
  }

  /**
   * Get all billable metrics for a given customer.
   */
  list(
    customerId: string,
    query?: BillableMetricListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillableMetricListResponsesCursorPage, BillableMetricListResponse>;
  list(
    customerId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillableMetricListResponsesCursorPage, BillableMetricListResponse>;
  list(
    customerId: string,
    query: BillableMetricListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BillableMetricListResponsesCursorPage, BillableMetricListResponse> {
    if (isRequestOptions(query)) {
      return this.list(customerId, {}, query);
    }
    return this._client.getAPIList(
      `/customers/${customerId}/billable-metrics`,
      BillableMetricListResponsesCursorPage,
      { query, ...options },
    );
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

  custom_fields?: Record<string, string>;

  /**
   * An optional filtering rule to match the 'event_type' property of an event.
   */
  event_type_filter?: Shared.EventTypeFilter;

  /**
   * (DEPRECATED) use property_filters & event_type_filter instead
   */
  filter?: Record<string, unknown>;

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

export interface BillableMetricArchiveResponse {
  data: Shared.ID;
}

export interface BillableMetricCreateParams {
  /**
   * Specifies the type of aggregation performed on matching events.
   */
  aggregation_type: 'COUNT' | 'LATEST' | 'MAX' | 'SUM' | 'UNIQUE';

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
}

export interface BillableMetricListParams extends CursorPageParams {
  /**
   * If true, the list of metrics will be filtered to just ones that are on the
   * customer's current plan
   */
  on_current_plan?: boolean;
}

export interface BillableMetricArchiveParams {
  id: string;
}

export namespace BillableMetrics {
  export import BillableMetricCreateResponse = BillableMetricsAPI.BillableMetricCreateResponse;
  export import BillableMetricRetrieveResponse = BillableMetricsAPI.BillableMetricRetrieveResponse;
  export import BillableMetricListResponse = BillableMetricsAPI.BillableMetricListResponse;
  export import BillableMetricArchiveResponse = BillableMetricsAPI.BillableMetricArchiveResponse;
  export import BillableMetricListResponsesCursorPage = BillableMetricsAPI.BillableMetricListResponsesCursorPage;
  export import BillableMetricCreateParams = BillableMetricsAPI.BillableMetricCreateParams;
  export import BillableMetricListParams = BillableMetricsAPI.BillableMetricListParams;
  export import BillableMetricArchiveParams = BillableMetricsAPI.BillableMetricArchiveParams;
}
