// File generated from our OpenAPI spec by Stainless.

import * as Core from '@metronome-industries/metronome/core';
import { APIResource } from '@metronome-industries/metronome/resource';
import * as UsageAPI from '@metronome-industries/metronome/resources/usage';

export class Usage extends APIResource {
  /**
   * Fetch aggregated usage data for multiple customers and billable-metrics, broken
   * into intervals of the specified length.
   */
  list(params: UsageListParams, options?: Core.RequestOptions): Core.APIPromise<UsageListResponse> {
    const { next_page, ...body } = params;
    return this._client.post('/usage', { query: { next_page }, body, ...options });
  }

  /**
   * Fetch aggregated usage data for the specified customer, billable-metric, and
   * optional group, broken into intervals of the specified length.
   */
  listWithGroups(
    params: UsageListWithGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UsageListWithGroupsResponse> {
    const { limit, next_page, ...body } = params;
    return this._client.post('/usage/groups', { query: { limit, next_page }, body, ...options });
  }
}

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
  data: Array<UsageListWithGroupsResponse.Data>;

  next_page: string | null;
}

export namespace UsageListWithGroupsResponse {
  export interface Data {
    ending_before: string;

    group_key: string | null;

    group_value: string | null;

    starting_on: string;

    value: number | null;
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
  window_size: 'hour' | 'day' | 'none' | 'HOUR' | 'DAY' | 'NONE' | 'Hour' | 'Day' | 'None';

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

export interface UsageListWithGroupsParams {
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
  window_size: 'hour' | 'day' | 'none' | 'HOUR' | 'DAY' | 'NONE' | 'Hour' | 'Day' | 'None';

  /**
   * Query param: Max number of results that should be returned
   */
  limit?: number;

  /**
   * Query param: Cursor that indicates where the next page of results should start.
   */
  next_page?: string;

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

export namespace Usage {
  export import UsageListResponse = UsageAPI.UsageListResponse;
  export import UsageListWithGroupsResponse = UsageAPI.UsageListWithGroupsResponse;
  export import UsageListParams = UsageAPI.UsageListParams;
  export import UsageListWithGroupsParams = UsageAPI.UsageListWithGroupsParams;
}
