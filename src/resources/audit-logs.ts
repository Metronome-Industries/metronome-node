// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as AuditLogsAPI from './audit-logs';

export class AuditLogs extends APIResource {
  /**
   * Retrieves a range of audit logs. If no further audit logs are currently
   * available, the data array will be empty. As new audit logs are created,
   * subsequent requests using the same next_page value will be in the returned data
   * array, ensuring a continuous and uninterrupted reading of audit logs.
   */
  list(query?: AuditLogListParams, options?: Core.RequestOptions): Core.APIPromise<AuditLogListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AuditLogListResponse>;
  list(
    query: AuditLogListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditLogListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/auditLogs', { query, ...options });
  }
}

export interface AuditLogListResponse {
  data: Array<AuditLogListResponse.Data>;

  /**
   * The next_page parameter is always returned to support ongoing log retrieval. It
   * enables continuous querying, even when some requests return no new data. Save
   * the next_page token from each response and use it for future requests to ensure
   * no logs are missed. This setup is ideal for regular updates via automated
   * processes, like cron jobs, to fetch logs continuously as they become available.
   * When you receive an empty data array, it indicates a temporary absence of new
   * logs, but subsequent requests might return new data.
   */
  next_page: string | null;
}

export namespace AuditLogListResponse {
  export interface Data {
    id: string;

    timestamp: string;

    action?: string;

    actor?: Data.Actor;

    description?: string;

    resource_id?: string;

    resource_type?: string;

    status?: 'success' | 'failure' | 'pending';
  }

  export namespace Data {
    export interface Actor {
      id: string;

      name: string;

      email?: string;
    }
  }
}

export interface AuditLogListParams {
  /**
   * RFC 3339 timestamp (exclusive). Cannot be used with 'next_page'.
   */
  ending_before?: string;

  /**
   * Max number of results that should be returned
   */
  limit?: number;

  /**
   * Cursor that indicates where the next page of results should start.
   */
  next_page?: string;

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
  export import AuditLogListParams = AuditLogsAPI.AuditLogListParams;
}
