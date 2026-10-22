// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { BodyCursorPage, type BodyCursorPageParams, PagePromise } from '../../../../core/pagination';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

/**
 * Named schedules are used for storing custom data that can change over time. Named schedules are often used in custom pricing logic.
 */
export class NamedSchedules extends APIResource {
  /**
   * Get a named schedule for the given contract. This endpoint's availability is
   * dependent on your client's configuration.
   *
   * @example
   * ```ts
   * const namedSchedule =
   *   await client.v1.contracts.rateCards.namedSchedules.retrieve(
   *     {
   *       contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *       customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
   *       schedule_name: 'my-schedule',
   *       covering_date: '2022-02-15T00:00:00Z',
   *     },
   *   );
   * ```
   */
  retrieve(
    body: NamedScheduleRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<NamedScheduleRetrieveResponse> {
    return this._client.post('/v1/contracts/getNamedSchedule', { body, ...options });
  }

  /**
   * Update a named schedule for the given contract. This endpoint's availability is
   * dependent on your client's configuration.
   *
   * @example
   * ```ts
   * await client.v1.contracts.rateCards.namedSchedules.update({
   *   contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
   *   schedule_name: 'my-schedule',
   *   starting_at: '2022-02-01T00:00:00Z',
   *   value: { my_key: 'my_value' },
   *   ending_before: '2022-02-15T00:00:00Z',
   * });
   * ```
   */
  update(body: NamedScheduleUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/contracts/updateNamedSchedule', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List contract-level named schedules for a customer, optionally scoped to a
   * single contract.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const namedScheduleListResponse of client.v1.contracts.rateCards.namedSchedules.list(
   *   {
   *     customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
   *     covering_date: '2026-01-15T00:00:00Z',
   *     limit: 10,
   *     properties: { sku: 'A100' },
   *     schedule_name: 'reserved-instance',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    body: NamedScheduleListParams,
    options?: RequestOptions,
  ): PagePromise<NamedScheduleListResponsesBodyCursorPage, NamedScheduleListResponse> {
    return this._client.getAPIList(
      '/v1/contracts/listNamedSchedules',
      BodyCursorPage<NamedScheduleListResponse>,
      { body, method: 'post', ...options },
    );
  }
}

export type NamedScheduleListResponsesBodyCursorPage = BodyCursorPage<NamedScheduleListResponse>;

export interface NamedScheduleRetrieveResponse {
  data: Array<NamedScheduleRetrieveResponse.Data>;
}

export namespace NamedScheduleRetrieveResponse {
  export interface Data {
    starting_at: string;

    value: unknown;

    ending_before?: string;
  }
}

export interface NamedScheduleListResponse {
  /**
   * ID of the contract this named schedule belongs to.
   */
  contract_id: string;

  /**
   * Name of the schedule.
   */
  schedule_name: string;

  segments: Array<NamedScheduleListResponse.Segment>;

  /**
   * Properties on this named schedule.
   */
  properties?: { [key: string]: string };
}

export namespace NamedScheduleListResponse {
  export interface Segment {
    starting_at: string;

    value: unknown;

    ending_before?: string;
  }
}

export interface NamedScheduleRetrieveParams {
  /**
   * ID of the contract whose named schedule is to be retrieved
   */
  contract_id: string;

  /**
   * ID of the customer whose named schedule is to be retrieved
   */
  customer_id: string;

  /**
   * The identifier for the schedule to be retrieved
   */
  schedule_name: string;

  /**
   * If provided, at most one schedule segment will be returned (the one that covers
   * this date). If not provided, all segments will be returned.
   */
  covering_date?: string;

  /**
   * A set of key-value pairs that qualifies which schedule should be applied when
   * looking up a schedule by name.
   */
  properties?: { [key: string]: string };
}

export interface NamedScheduleUpdateParams {
  /**
   * ID of the contract whose named schedule is to be updated
   */
  contract_id: string;

  /**
   * ID of the customer whose named schedule is to be updated
   */
  customer_id: string;

  /**
   * The identifier for the schedule to be updated
   */
  schedule_name: string;

  starting_at: string;

  /**
   * The value to set for the named schedule. The structure of this object is
   * specific to the named schedule.
   */
  value: unknown;

  ending_before?: string;

  /**
   * A set of key-value pairs that qualifies which schedule should be applied when
   * looking up a schedule by name.
   */
  properties?: { [key: string]: string };
}

export interface NamedScheduleListParams extends BodyCursorPageParams {
  /**
   * ID of the customer to list contract named schedules for
   */
  customer_id: string;

  /**
   * Optional ID of a contract to scope the results to a single contract
   */
  contract_id?: string;

  /**
   * If provided, result contains at most one segment covering this date for each
   * schedule.
   */
  covering_date?: string;

  /**
   * Optional key-value filters. A schedule matches when it contains at least this
   * subset of properties.
   */
  properties?: { [key: string]: string };

  /**
   * Optional filter to scope the results to a single schedule name
   */
  schedule_name?: string;
}

export declare namespace NamedSchedules {
  export {
    type NamedScheduleRetrieveResponse as NamedScheduleRetrieveResponse,
    type NamedScheduleListResponse as NamedScheduleListResponse,
    type NamedScheduleListResponsesBodyCursorPage as NamedScheduleListResponsesBodyCursorPage,
    type NamedScheduleRetrieveParams as NamedScheduleRetrieveParams,
    type NamedScheduleUpdateParams as NamedScheduleUpdateParams,
    type NamedScheduleListParams as NamedScheduleListParams,
  };
}
