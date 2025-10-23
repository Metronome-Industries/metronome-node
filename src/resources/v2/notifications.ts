// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Notifications extends APIResource {
  /**
   * Create an offset lifecycle event notification configuration. The lifecycle event
   * type is inferred from the policy.type field.
   *
   * @example
   * ```ts
   * const notification = await client.v2.notifications.create({
   *   name: '+1 day after contract starts',
   *   policy: { type: 'contract.start', offset: 'P1D' },
   *   uniqueness_key: 'contract-start-notification-823j7fqzo1',
   * });
   * ```
   */
  create(body: NotificationCreateParams, options?: RequestOptions): APIPromise<NotificationCreateResponse> {
    return this._client.post('/v2/notifications/create', { body, ...options });
  }

  /**
   * Retrieve a specific offset lifecycle event notification configuration by ID.
   *
   * @example
   * ```ts
   * const notification = await client.v2.notifications.retrieve(
   *   { id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc' },
   * );
   * ```
   */
  retrieve(
    body: NotificationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<NotificationRetrieveResponse> {
    return this._client.post('/v2/notifications/get', { body, ...options });
  }

  /**
   * Archive an offset lifecycle event notification configuration. Archived
   * notifications are not processed.
   *
   * @example
   * ```ts
   * const response = await client.v2.notifications.archive({
   *   id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   * });
   * ```
   */
  archive(
    body: NotificationArchiveParams,
    options?: RequestOptions,
  ): APIPromise<NotificationArchiveResponse> {
    return this._client.post('/v2/notifications/archive', { body, ...options });
  }

  /**
   * Edit an existing offset lifecycle event notification configuration.
   *
   * @example
   * ```ts
   * const response = await client.v2.notifications.edit({
   *   policy: { type: 'contract.start', offset: 'P2D' },
   *   type: 'OFFSET_LIFECYCLE_EVENT',
   * });
   * ```
   */
  edit(body: NotificationEditParams, options?: RequestOptions): APIPromise<NotificationEditResponse> {
    return this._client.post('/v2/notifications/edit', { body, ...options });
  }

  /**
   * List offset lifecycle event notification configurations. These are user-created
   * notifications that trigger at a specified time offset relative to lifecycle
   * events. Returns a maximum of 400 results per request.
   *
   * @example
   * ```ts
   * const response = await client.v2.notifications.listOffset({
   *   archive_filter: 'NOT_ARCHIVED',
   *   cursor: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   limit: 20,
   * });
   * ```
   */
  listOffset(
    body: NotificationListOffsetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NotificationListOffsetResponse> {
    return this._client.post('/v2/notifications/offset/list', { body, ...options });
  }

  /**
   * List available system lifecycle event types for notifications. These are
   * read-only event types that can be used when creating offset notifications.
   *
   * @example
   * ```ts
   * const response = await client.v2.notifications.listSystem();
   * ```
   */
  listSystem(options?: RequestOptions): APIPromise<NotificationListSystemResponse> {
    return this._client.post('/v2/notifications/system/list', options);
  }
}

export interface LifecycleEventOffsetNotificationConfig {
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

  policy: LifecycleEventOffsetPolicy;

  /**
   * Indicates this is an offset lifecycle event notification
   */
  type: 'OFFSET_LIFECYCLE_EVENT';
}

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

export interface LifecycleEventSystemNotificationConfig {
  policy: LifecycleEventSystemPolicy;

  /**
   * Indicates this is a system lifecycle event notification
   */
  type: 'SYSTEM_LIFECYCLE_EVENT';

  /**
   * Whether or not webhook publishing for this lifecycle event is enabled
   */
  is_enabled?: boolean;
}

export interface LifecycleEventSystemPolicy {
  /**
   * The type of lifecycle event (e.g., "contract.create", "contract.start")
   */
  type: string;
}

export interface NotificationCreateResponse {
  data: LifecycleEventOffsetNotificationConfig;
}

export interface NotificationRetrieveResponse {
  data: LifecycleEventOffsetNotificationConfig;
}

export interface NotificationArchiveResponse {
  data: LifecycleEventOffsetNotificationConfig;
}

export interface NotificationEditResponse {
  data: LifecycleEventSystemNotificationConfig | LifecycleEventOffsetNotificationConfig;
}

export interface NotificationListOffsetResponse {
  data: Array<LifecycleEventOffsetNotificationConfig>;

  cursor?: string | null;
}

export interface NotificationListSystemResponse {
  data: Array<LifecycleEventSystemNotificationConfig>;

  cursor?: string | null;
}

export interface NotificationCreateParams {
  /**
   * The name for this offset notification configuration.
   */
  name: string;

  /**
   * The offset lifecycle event policy that defines when and how this notification
   * should be triggered. The lifecycle event type is inferred from the policy.type
   * field.
   */
  policy: LifecycleEventOffsetPolicy;

  /**
   * Optional uniqueness key to prevent duplicate notification configurations.
   */
  uniqueness_key?: string;
}

export interface NotificationRetrieveParams {
  /**
   * The ID of the notification configuration to retrieve
   */
  id: string;
}

export interface NotificationArchiveParams {
  /**
   * The ID of the offset lifecycle event notification configuration to archive.
   */
  id: string;
}

export type NotificationEditParams = NotificationEditParams.Variant0 | NotificationEditParams.Variant1;

export declare namespace NotificationEditParams {
  export interface Variant0 {
    policy: LifecycleEventSystemPolicy;

    /**
     * Indicates this is a system lifecycle event notification
     */
    type: 'SYSTEM_LIFECYCLE_EVENT';

    /**
     * Set to true to enable webhook messages for the notification indicated in the
     * policy, false to disable. Only supported by system lifecycle events.
     */
    is_enabled?: boolean;
  }

  export interface Variant1 {
    /**
     * The ID of the notification configuration to edit.
     */
    id: string;

    policy: LifecycleEventOffsetPolicy;

    /**
     * Indicates this is an offset lifecycle event notification
     */
    type: 'OFFSET_LIFECYCLE_EVENT';

    /**
     * Set to true to enable webhook messages for the notification indicated in the
     * policy, false to disable. Only supported by system lifecycle events.
     */
    is_enabled?: boolean;
  }
}

export interface NotificationListOffsetParams {
  /**
   * Filter options for the notification configurations. If not provided, defaults to
   * NOT_ARCHIVED.
   */
  archive_filter?: 'ARCHIVED' | 'NOT_ARCHIVED' | 'ALL';

  cursor?: string;

  limit?: number;
}

export declare namespace Notifications {
  export {
    type LifecycleEventOffsetNotificationConfig as LifecycleEventOffsetNotificationConfig,
    type LifecycleEventOffsetPolicy as LifecycleEventOffsetPolicy,
    type LifecycleEventSystemNotificationConfig as LifecycleEventSystemNotificationConfig,
    type LifecycleEventSystemPolicy as LifecycleEventSystemPolicy,
    type NotificationCreateResponse as NotificationCreateResponse,
    type NotificationRetrieveResponse as NotificationRetrieveResponse,
    type NotificationArchiveResponse as NotificationArchiveResponse,
    type NotificationEditResponse as NotificationEditResponse,
    type NotificationListOffsetResponse as NotificationListOffsetResponse,
    type NotificationListSystemResponse as NotificationListSystemResponse,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationRetrieveParams as NotificationRetrieveParams,
    type NotificationArchiveParams as NotificationArchiveParams,
    type NotificationEditParams as NotificationEditParams,
    type NotificationListOffsetParams as NotificationListOffsetParams,
  };
}
