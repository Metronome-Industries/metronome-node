// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class System extends APIResource {
  /**
   * List available system lifecycle event types for notifications. These are
   * read-only event types that can be used when creating offset notifications.
   *
   * @example
   * ```ts
   * const systems = await client.notifications.system.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SystemListResponse> {
    return this._client.post('/v2/notifications/system/list', options);
  }
}

export interface SystemListResponse {
  data: Array<SystemListResponse.Data>;

  cursor?: string | null;
}

export namespace SystemListResponse {
  export interface Data {
    policy: Data.Policy;

    /**
     * Indicates this is a system lifecycle event notification
     */
    type: string;

    /**
     * Whether or not webhook publishing for this lifecycle event is enabled
     */
    is_enabled?: boolean;
  }

  export namespace Data {
    export interface Policy {
      /**
       * The type of lifecycle event (e.g., "contract.create", "contract.start")
       */
      type: string;
    }
  }
}

export declare namespace System {
  export { type SystemListResponse as SystemListResponse };
}
