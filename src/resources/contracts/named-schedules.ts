// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as NamedSchedulesAPI from './named-schedules';

export class NamedSchedules extends APIResource {
  /**
   * Get a named schedule for the given rate card. This endpoint's availability is
   * dependent on your client's configuration.
   */
  retrieve(
    body: NamedScheduleRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamedScheduleRetrieveResponse> {
    return this._client.post('/contract-pricing/rate-cards/getNamedSchedule', { body, ...options });
  }

  /**
   * Update a named schedule for the given rate card. This endpoint's availability is
   * dependent on your client's configuration.
   */
  update(body: NamedScheduleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/contract-pricing/rate-cards/updateNamedSchedule', {
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
   * ID of the rate card whose named schedule is to be retrieved
   */
  rate_card_id: string;

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
   * ID of the rate card whose named schedule is to be updated
   */
  rate_card_id: string;

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

export namespace NamedSchedules {
  export import NamedScheduleRetrieveResponse = NamedSchedulesAPI.NamedScheduleRetrieveResponse;
  export import NamedScheduleRetrieveParams = NamedSchedulesAPI.NamedScheduleRetrieveParams;
  export import NamedScheduleUpdateParams = NamedSchedulesAPI.NamedScheduleUpdateParams;
}
