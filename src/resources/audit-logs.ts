// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@metronome/sdk/resource';
import { isRequestOptions } from '@metronome/sdk/core';
import * as Core from '@metronome/sdk/core';
import * as AuditLogsAPI from '@metronome/sdk/resources/audit-logs';
import { CursorPage, type CursorPageParams } from '@metronome/sdk/pagination';

export class AuditLogs extends APIResource {
  /**
   * Retrieves a range of audit logs. If no further audit logs are currently
   * available, the data array will be empty. As new audit logs are created,
   * subsequent requests using the same next_page value will be in the returned data
   * array, ensuring a continuous and uninterrupted reading of audit logs.
   */
  list(
    query?: AuditLogListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListResponsesCursorPage, AuditLogListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListResponsesCursorPage, AuditLogListResponse>;
  list(
    query: AuditLogListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListResponsesCursorPage, AuditLogListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/auditLogs', AuditLogListResponsesCursorPage, { query, ...options });
  }
}

export class AuditLogListResponsesCursorPage extends CursorPage<AuditLogListResponse> {}

export interface AuditLogListResponse {
  id: string;

  timestamp: string;

  action?: string;

  actor?: AuditLogListResponse.Actor;

  description?: string;

  resource_id?: string;

  resource_type?: string;

  status?: 'success' | 'failure' | 'pending';
}

export namespace AuditLogListResponse {
  export interface Actor {
    id: string;

    name: string;

    email?: string;
  }
}

export interface AuditLogListParams extends CursorPageParams {
  /**
   * RFC 3339 timestamp (exclusive). Cannot be used with 'next_page'.
   */
  ending_before?: string;

  /**
   * Optional parameter that can be used to filter which audit logs are returned. If
   * you specify resource_id, you must also specify resource_type.
   */
  resource_id?: string;

  /**
   * Optional parameter that can be used to filter which audit logs are returned. If
   * you specify resource_type, you must also specify resource_id.
   */
  resource_type?: string;

  /**
   * Sort order by timestamp, e.g. date_asc or date_desc. Defaults to date_asc.
   */
  sort?: 'date_asc' | 'date_desc';

  /**
   * RFC 3339 timestamp of the earliest audit log to return. Cannot be used with
   * 'next_page'.
   */
  starting_on?: string;
}

export namespace AuditLogs {
  export import AuditLogListResponse = AuditLogsAPI.AuditLogListResponse;
  export import AuditLogListResponsesCursorPage = AuditLogsAPI.AuditLogListResponsesCursorPage;
  export import AuditLogListParams = AuditLogsAPI.AuditLogListParams;
}
