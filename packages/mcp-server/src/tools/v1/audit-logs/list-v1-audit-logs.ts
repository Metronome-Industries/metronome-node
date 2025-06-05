// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.audit_logs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/auditLogs',
  operationId: 'getAuditLogs-v1',
};

export const tool: Tool = {
  name: 'list_v1_audit_logs',
  description:
    'Retrieves a range of audit logs. If no further audit logs are currently available, the data array will be empty. As new audit logs are created, subsequent requests using the same next_page value will be in the returned data array, ensuring a continuous and uninterrupted reading of audit logs.\n',
  inputSchema: {
    type: 'object',
    properties: {
      ending_before: {
        type: 'string',
        description: "RFC 3339 timestamp (exclusive). Cannot be used with 'next_page'.",
        format: 'date-time',
      },
      limit: {
        type: 'integer',
        description: 'Max number of results that should be returned',
      },
      next_page: {
        type: 'string',
        description: 'Cursor that indicates where the next page of results should start.',
      },
      resource_id: {
        type: 'string',
        description:
          'Optional parameter that can be used to filter which audit logs are returned. If you specify resource_id, you must also specify resource_type.',
      },
      resource_type: {
        type: 'string',
        description:
          'Optional parameter that can be used to filter which audit logs are returned. If you specify resource_type, you must also specify resource_id.',
      },
      sort: {
        type: 'string',
        description: 'Sort order by timestamp, e.g. date_asc or date_desc. Defaults to date_asc.',
        enum: ['date_asc', 'date_desc'],
      },
      starting_on: {
        type: 'string',
        description:
          "RFC 3339 timestamp of the earliest audit log to return. Cannot be used with 'next_page'.",
        format: 'date-time',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.auditLogs.list(body));
};

export default { metadata, tool, handler };
