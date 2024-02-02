// File generated from our OpenAPI spec by Stainless.

import * as Core from '@metronome-industries/metronome/core';
import { APIResource } from '@metronome-industries/metronome/resource';
import { isRequestOptions } from '@metronome-industries/metronome/core';
import * as AuditLogsAPI from '@metronome-industries/metronome/resources/audit-logs';
import { Page } from '@metronome-industries/metronome/pagination';

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
  ): Core.PagePromise<AuditLogListResponsesPage, AuditLogListResponse>;
  list(options?: Core.RequestOptions): Core.PagePromise<AuditLogListResponsesPage, AuditLogListResponse>;
  list(
    query: AuditLogListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListResponsesPage, AuditLogListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/auditLogs', AuditLogListResponsesPage, { query, ...options });
  }
}

export class AuditLogListResponsesPage extends Page<AuditLogListResponse> {}

export interface AuditLogListResponse {
  id: string;

  timestamp: string;

  action?: string;

  actor?: AuditLogListResponse.Actor;

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

export interface AuditLogListParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;

  /**
   * Cursor that indicates where the next page of results should start.
   */
  next_page?: string;

  /**
   * RFC 3339 timestamp of the earliest audit log to return. Cannot be used with
   * 'next_page'.
   */
  starting_on?: string;
}

export namespace AuditLogs {
  export import AuditLogListResponse = AuditLogsAPI.AuditLogListResponse;
  export import AuditLogListResponsesPage = AuditLogsAPI.AuditLogListResponsesPage;
  export import AuditLogListParams = AuditLogsAPI.AuditLogListParams;
}
