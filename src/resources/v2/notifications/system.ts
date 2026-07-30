// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SystemAPI from './system';
import * as NotificationsAPI from './notifications';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class System extends APIResource {
  /**
   * List available system lifecycle event types for notifications. These are
   * read-only event types that can be used when creating offset notifications.
   *
   * @example
   * ```ts
   * const systems = await client.v2.notifications.system.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SystemListResponse> {
    return this._client.post('/v2/notifications/system/list', options);
  }
}

export interface SystemListResponse {
  data: Array<NotificationsAPI.LifecycleEventSystemNotificationConfig>;

  cursor?: string | null;
}

export declare namespace System {
  export {
    type SystemListResponse as SystemListResponse
  };
}
