// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OffsetAPI from './offset';
import { Offset, OffsetListParams, OffsetListResponse } from './offset';
import * as SystemAPI from './system';
import { System, SystemListResponse } from './system';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Notifications extends APIResource {
  offset: OffsetAPI.Offset = new OffsetAPI.Offset(this._client);
  system: SystemAPI.System = new SystemAPI.System(this._client);

  /**
   * Create an offset lifecycle event notification configuration. The lifecycle event
   * type is inferred from the policy.type field.
   *
   * @example
   * ```ts
   * const notification = await client.notifications.create({
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
   * const notification = await client.notifications.retrieve({
   *   id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   * });
   * ```
   */
  retrieve(
    body: NotificationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<NotificationRetrieveResponse> {
    return this._client.post('/v2/notifications/get', { body, ...options });
  }

  /**
   * Edit an existing offset lifecycle event notification configuration.
   *
   * @example
   * ```ts
   * const notification = await client.notifications.update({
   *   policy: { type: 'contract.start', offset: 'P2D' },
   *   id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   * });
   * ```
   */
  update(body: NotificationUpdateParams, options?: RequestOptions): APIPromise<NotificationUpdateResponse> {
    return this._client.post('/v2/notifications/edit', { body, ...options });
  }

  /**
   * Archive an offset lifecycle event notification configuration. Archived
   * notifications are not processed.
   *
   * @example
   * ```ts
   * const response = await client.notifications.archive({
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
}

export interface NotificationCreateResponse {
  data: NotificationCreateResponse.Data;
}

export namespace NotificationCreateResponse {
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

export interface NotificationRetrieveResponse {
  data: NotificationRetrieveResponse.Data;
}

export namespace NotificationRetrieveResponse {
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

export interface NotificationUpdateResponse {
  data:
    | NotificationUpdateResponse.LifecycleEventSystemNotificationConfig
    | NotificationUpdateResponse.LifecycleEventOffsetNotificationConfig;
}

export namespace NotificationUpdateResponse {
  export interface LifecycleEventSystemNotificationConfig {
    policy: LifecycleEventSystemNotificationConfig.Policy;

    /**
     * Indicates this is a system lifecycle event notification
     */
    type: string;

    /**
     * Whether or not webhook publishing for this lifecycle event is enabled
     */
    is_enabled?: boolean;
  }

  export namespace LifecycleEventSystemNotificationConfig {
    export interface Policy {
      /**
       * The type of lifecycle event (e.g., "contract.create", "contract.start")
       */
      type: string;
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

    policy: LifecycleEventOffsetNotificationConfig.Policy;

    /**
     * Indicates this is an offset lifecycle event notification
     */
    type: string;
  }

  export namespace LifecycleEventOffsetNotificationConfig {
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

export interface NotificationArchiveResponse {
  data: NotificationArchiveResponse.Data;
}

export namespace NotificationArchiveResponse {
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
  policy: NotificationCreateParams.Policy;

  /**
   * Optional uniqueness key to prevent duplicate notification configurations.
   */
  uniqueness_key?: string;
}

export namespace NotificationCreateParams {
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

export interface NotificationRetrieveParams {
  /**
   * The ID of the notification configuration to retrieve
   */
  id: string;
}

export interface NotificationUpdateParams {
  /**
   * Updated policy configuration. The policy.type must match the existing lifecycle
   * event type.
   */
  policy:
    | NotificationUpdateParams.LifecycleEventOffsetPolicy
    | NotificationUpdateParams.LifecycleEventSystemPolicy;

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

export namespace NotificationUpdateParams {
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

export interface NotificationArchiveParams {
  /**
   * The ID of the offset lifecycle event notification configuration to archive.
   */
  id: string;
}

Notifications.Offset = Offset;
Notifications.System = System;

export declare namespace Notifications {
  export {
    type NotificationCreateResponse as NotificationCreateResponse,
    type NotificationRetrieveResponse as NotificationRetrieveResponse,
    type NotificationUpdateResponse as NotificationUpdateResponse,
    type NotificationArchiveResponse as NotificationArchiveResponse,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationRetrieveParams as NotificationRetrieveParams,
    type NotificationUpdateParams as NotificationUpdateParams,
    type NotificationArchiveParams as NotificationArchiveParams,
  };

  export {
    Offset as Offset,
    type OffsetListResponse as OffsetListResponse,
    type OffsetListParams as OffsetListParams,
  };

  export { System as System, type SystemListResponse as SystemListResponse };
}
