// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Offset extends APIResource {
  /**
   * List offset lifecycle event notification configurations. These are user-created
   * notifications that trigger at a specified time offset relative to lifecycle
   * events.
   *
   * @example
   * ```ts
   * const offsets = await client.notifications.offset.list({
   *   cursor: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   limit: 20,
   * });
   * ```
   */
  list(
    body: OffsetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OffsetListResponse> {
    return this._client.post('/v2/notifications/offset/list', { body, ...options });
  }
}

export interface OffsetListResponse {
  data: Array<OffsetListResponse.Data>;

  cursor?: string | null;
}

export namespace OffsetListResponse {
  export interface Data {
    /**
     * ID for this offset notification configuration
     */
    id: string;

    /**
     * When this notification configuration was archived
     */
    archived_at: string | null;

    /**
     * RFC 3339 timestamp when this notification configuration was created.
     */
    created_at: string;

    /**
     * Who created this notification configuration
     */
    created_by: string;

    /**
     * The environment type where this notification configuration was created.
     */
    environment_type: string;

    /**
     * The name for this offset notification configuration.
     */
    name: string;

    policy: Data.Policy;

    /**
     * Indicates this is an offset lifecycle event notification
     */
    type: string;
  }

  export namespace Data {
    export interface Policy {
      /**
       * ISO-8601 duration string indicating how much time before or after the base event
       * this notification should be sent. Positive values indicate notifications after
       * the event, negative values indicate notifications before the event. Examples:
       * "P1D" (1 day after), "-PT2H" (2 hours before)
       */
      offset: string;

      /**
       * The type of lifecycle event that this offset is based on.
       */
      type: string;
    }
  }
}

export interface OffsetListParams {
  cursor?: string;

  limit?: number;
}

export declare namespace Offset {
  export { type OffsetListResponse as OffsetListResponse, type OffsetListParams as OffsetListParams };
}
