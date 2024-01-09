// File generated from our OpenAPI spec by Stainless.

import * as Core from 'metronome/core';
import { APIResource } from 'metronome/resource';
import { isRequestOptions } from 'metronome/core';
import * as AuditLogsAPI from 'metronome/resources/audit-logs';
import { Page, type PageParams } from 'metronome/pagination';

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

export interface AuditLogListParams extends PageParams {
  /**
   * Max number of results that should be returned
   */
  limit?: number;

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
