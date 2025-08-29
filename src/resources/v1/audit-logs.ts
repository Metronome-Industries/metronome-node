// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import { CursorPage, type CursorPageParams } from '../../pagination';

export class AuditLogs extends APIResource {
  /**
   * Get a comprehensive audit trail of all operations performed in your Metronome
   * account, whether initiated through the API, web interface, or automated
   * processes. This endpoint provides detailed logs of who did what and when,
   * enabling compliance reporting, security monitoring, and operational
   * troubleshooting across all interaction channels.
   *
   * ### Use this endpoint to:
   *
   * - Monitor all account activity for security and compliance purposes
   * - Track configuration changes regardless of source (API, UI, or system)
   * - Investigate issues by reviewing historical operations
   *
   * ### Key response fields:
   *
   * An array of AuditLog objects containing:
   *
   * - id: Unique identifier for the audit log entry
   * - timestamp: When the action occurred (RFC 3339 format)
   * - actor: Information about who performed the action
   * - request: Details including request ID, IP address, and user agent
   * - `resource_type`: The type of resource affected (e.g., customer, contract,
   *   invoice)
   * - `resource_id`: The specific resource identifier
   * - `action`: The operation performed
   * - `next_page`: Cursor for continuous log retrieval
   *
   * ### Usage guidelines:
   *
   * - Continuous retrieval: The next_page token enables uninterrupted log
   *   streaming—save it between requests to ensure no logs are missed
   * - Empty responses: An empty data array means no new logs yet; continue polling
   *   with the same next_page token
   * - Date filtering:
   *   - `starting_on`: Earliest logs to return (inclusive)
   *   - `ending_before`: Latest logs to return (exclusive)
   *   - Cannot be used with `next_page`
   * - Resource filtering: Must specify both `resource_type` and `resource_id`
   *   together
   * - Sort order: Default is `date_asc`; use `date_desc` for newest first
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const auditLogListResponse of client.v1.auditLogs.list()) {
   *   // ...
   * }
   * ```
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
    return this._client.getAPIList('/v1/auditLogs', AuditLogListResponsesCursorPage, { query, ...options });
  }
}

export class AuditLogListResponsesCursorPage extends CursorPage<AuditLogListResponse> {}

export interface AuditLogListResponse {
  id: string;

  request: AuditLogListResponse.Request;

  timestamp: string;

  action?: string;

  actor?: AuditLogListResponse.Actor;

  description?: string;

  resource_id?: string;

  resource_type?: string;

  status?: 'success' | 'failure' | 'pending';
}

export namespace AuditLogListResponse {
  export interface Request {
    id: string;

    ip?: string;

    user_agent?: string;
  }

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

AuditLogs.AuditLogListResponsesCursorPage = AuditLogListResponsesCursorPage;

export declare namespace AuditLogs {
  export {
    type AuditLogListResponse as AuditLogListResponse,
    AuditLogListResponsesCursorPage as AuditLogListResponsesCursorPage,
    type AuditLogListParams as AuditLogListParams,
  };
}
