// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

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
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamedScheduleRetrieveResponse> {
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
  update(body: NamedScheduleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/contracts/updateNamedSchedule', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

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
}

export declare namespace NamedSchedules {
  export {
    type NamedScheduleRetrieveResponse as NamedScheduleRetrieveResponse,
    type NamedScheduleRetrieveParams as NamedScheduleRetrieveParams,
    type NamedScheduleUpdateParams as NamedScheduleUpdateParams,
  };
}
