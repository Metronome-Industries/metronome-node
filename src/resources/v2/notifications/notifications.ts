// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NotificationsAPI from './notifications';
import * as OffsetAPI from './offset';
import { Offset, OffsetArchiveParams, OffsetArchiveResponse, OffsetCreateParams, OffsetCreateResponse, OffsetEditParams, OffsetEditResponse, OffsetListParams, OffsetRetrieveParams, OffsetRetrieveResponse } from './offset';
import * as SystemAPI from './system';
import { System, SystemListResponse } from './system';
import { BodyCursorPageCursorField } from '../../../core/pagination';

export class Notifications extends APIResource {
  offset: OffsetAPI.Offset = new OffsetAPI.Offset(this._client);
  system: SystemAPI.System = new SystemAPI.System(this._client);
}

export type LifecycleEventOffsetNotificationConfigsBodyCursorPageCursorField = BodyCursorPageCursorField<LifecycleEventOffsetNotificationConfig>

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

Notifications.Offset = Offset;
Notifications.System = System;

export declare namespace Notifications {
  export {
    type LifecycleEventOffsetNotificationConfig as LifecycleEventOffsetNotificationConfig,
    type LifecycleEventSystemNotificationConfig as LifecycleEventSystemNotificationConfig
  };

  export {
    Offset as Offset,
    type OffsetCreateResponse as OffsetCreateResponse,
    type OffsetRetrieveResponse as OffsetRetrieveResponse,
    type OffsetArchiveResponse as OffsetArchiveResponse,
    type OffsetEditResponse as OffsetEditResponse,
    type OffsetCreateParams as OffsetCreateParams,
    type OffsetRetrieveParams as OffsetRetrieveParams,
    type OffsetListParams as OffsetListParams,
    type OffsetArchiveParams as OffsetArchiveParams,
    type OffsetEditParams as OffsetEditParams
  };

  export {
    System as System,
    type SystemListResponse as SystemListResponse
  };
}
