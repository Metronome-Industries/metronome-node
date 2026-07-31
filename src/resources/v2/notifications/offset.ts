// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NotificationsAPI from './notifications';
import { LifecycleEventOffsetNotificationConfigsBodyCursorPageCursorField } from './notifications';
import { APIPromise } from '../../../core/api-promise';
import {
  BodyCursorPageCursorField,
  type BodyCursorPageCursorFieldParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class Offset extends APIResource {
  /**
   * Create an offset lifecycle event notification configuration. The lifecycle event
   * type is inferred from the policy.type field.
   *
   * @example
   * ```ts
   * const offset = await client.v2.notifications.offset.create({
   *   name: '+1 day after contract starts',
   *   policy: { type: 'contract.start', offset: 'P1D' },
   *   uniqueness_key: 'contract-start-notification-823j7fqzo1',
   * });
   * ```
   */
  create(body: OffsetCreateParams, options?: RequestOptions): APIPromise<OffsetCreateResponse> {
    return this._client.post('/v2/notifications/create', { body, ...options });
  }

  /**
   * Retrieve a specific offset lifecycle event notification configuration by ID.
   *
   * @example
   * ```ts
   * const offset =
   *   await client.v2.notifications.offset.retrieve({
   *     id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   });
   * ```
   */
  retrieve(body: OffsetRetrieveParams, options?: RequestOptions): APIPromise<OffsetRetrieveResponse> {
    return this._client.post('/v2/notifications/get', { body, ...options });
  }

  /**
   * List offset lifecycle event notification configurations. These are user-created
   * notifications that trigger at a specified time offset relative to lifecycle
   * events. Returns a maximum of 400 results per request.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const lifecycleEventOffsetNotificationConfig of client.v2.notifications.offset.list(
   *   {
   *     archive_filter: 'NOT_ARCHIVED',
   *     cursor: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *     limit: 20,
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    body: OffsetListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<
    LifecycleEventOffsetNotificationConfigsBodyCursorPageCursorField,
    NotificationsAPI.LifecycleEventOffsetNotificationConfig
  > {
    return this._client.getAPIList(
      '/v2/notifications/offset/list',
      BodyCursorPageCursorField<NotificationsAPI.LifecycleEventOffsetNotificationConfig>,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Archive an offset lifecycle event notification configuration. Archived
   * notifications are not processed.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v2.notifications.offset.archive({
   *     id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   });
   * ```
   */
  archive(body: OffsetArchiveParams, options?: RequestOptions): APIPromise<OffsetArchiveResponse> {
    return this._client.post('/v2/notifications/archive', { body, ...options });
  }

  /**
   * Edit an existing offset lifecycle event notification configuration.
   *
   * @example
   * ```ts
   * const response = await client.v2.notifications.offset.edit({
   *   policy: { type: 'contract.start', offset: 'P2D' },
   *   id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   * });
   * ```
   */
  edit(body: OffsetEditParams, options?: RequestOptions): APIPromise<OffsetEditResponse> {
    return this._client.post('/v2/notifications/edit', { body, ...options });
  }
}

export interface OffsetCreateResponse {
  data: NotificationsAPI.LifecycleEventOffsetNotificationConfig;
}

export interface OffsetRetrieveResponse {
  data: NotificationsAPI.LifecycleEventOffsetNotificationConfig;
}

export interface OffsetArchiveResponse {
  data: NotificationsAPI.LifecycleEventOffsetNotificationConfig;
}

export interface OffsetEditResponse {
  data:
    | NotificationsAPI.LifecycleEventSystemNotificationConfig
    | NotificationsAPI.LifecycleEventOffsetNotificationConfig;
}

export interface OffsetCreateParams {
  /**
   * The name for this offset notification configuration.
   */
  name: string;

  /**
   * The offset lifecycle event policy that defines when and how this notification
   * should be triggered. The lifecycle event type is inferred from the policy.type
   * field.
   */
  policy: OffsetCreateParams.Policy;

  /**
   * Optional uniqueness key to prevent duplicate notification configurations.
   */
  uniqueness_key?: string;
}

export namespace OffsetCreateParams {
  /**
   * The offset lifecycle event policy that defines when and how this notification
   * should be triggered. The lifecycle event type is inferred from the policy.type
   * field.
   */
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

export interface OffsetRetrieveParams {
  /**
   * The ID of the notification configuration to retrieve
   */
  id: string;
}

export interface OffsetListParams extends BodyCursorPageCursorFieldParams {
  /**
   * Filter options for the notification configurations. If not provided, defaults to
   * NOT_ARCHIVED.
   */
  archive_filter?: 'ARCHIVED' | 'NOT_ARCHIVED' | 'ALL';
}

export interface OffsetArchiveParams {
  /**
   * The ID of the offset lifecycle event notification configuration to archive.
   */
  id: string;
}

export interface OffsetEditParams {
  /**
   * Updated policy configuration. The policy.type must match the existing lifecycle
   * event type.
   */
  policy: OffsetEditParams.LifecycleEventOffsetPolicy | OffsetEditParams.LifecycleEventSystemPolicy;

  /**
   * The ID of the notification configuration to edit. Not provided when updating the
   * configuration for system events
   */
  id?: string;

  /**
   * Set to true to enable webhook messages for the notification indicated in the
   * policy, false to disable. Only supported by system lifecycle events.
   */
  is_enabled?: boolean;
}

export namespace OffsetEditParams {
  export interface LifecycleEventOffsetPolicy {
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

  export interface LifecycleEventSystemPolicy {
    /**
     * The type of lifecycle event (e.g., "contract.create", "contract.start")
     */
    type: string;
  }
}

export declare namespace Offset {
  export {
    type OffsetCreateResponse as OffsetCreateResponse,
    type OffsetRetrieveResponse as OffsetRetrieveResponse,
    type OffsetArchiveResponse as OffsetArchiveResponse,
    type OffsetEditResponse as OffsetEditResponse,
    type OffsetCreateParams as OffsetCreateParams,
    type OffsetRetrieveParams as OffsetRetrieveParams,
    type OffsetListParams as OffsetListParams,
    type OffsetArchiveParams as OffsetArchiveParams,
    type OffsetEditParams as OffsetEditParams,
  };
}

export { type LifecycleEventOffsetNotificationConfigsBodyCursorPageCursorField };
