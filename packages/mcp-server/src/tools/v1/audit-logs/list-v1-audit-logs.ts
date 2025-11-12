// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a comprehensive audit trail of all operations performed in your Metronome account, whether initiated through the API, web interface, or automated processes. This endpoint provides detailed logs of who did what and when, enabling compliance reporting, security monitoring, and operational troubleshooting across all interaction channels.\n\n### Use this endpoint to:\n- Monitor all account activity for security and compliance purposes\n- Track configuration changes regardless of source (API, UI, or system)\n- Investigate issues by reviewing historical operations\n\n### Key response fields: \nAn array of AuditLog objects containing:\n- id: Unique identifier for the audit log entry\n- timestamp: When the action occurred (RFC 3339 format)\n- actor: Information about who performed the action\n- request: Details including request ID, IP address, and user agent\n- `resource_type`: The type of resource affected (e.g., customer, contract, invoice)\n- `resource_id`: The specific resource identifier\n- `action`: The operation performed\n- `next_page`: Cursor for continuous log retrieval\n\n### Usage guidelines:\n- Continuous retrieval: The next_page token enables uninterrupted log streaming—save it between requests to ensure no logs are missed\n- Empty responses: An empty data array means no new logs yet; continue polling with the same next_page token\n- Date filtering:\n    - `starting_on`: Earliest logs to return (inclusive)\n    - `ending_before`: Latest logs to return (exclusive)\n    - Cannot be used with `next_page`\n- Resource filtering: Must specify both `resource_type` and `resource_id` together\n- Sort order: Default is `date_asc`; use `date_desc` for newest first\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/audit_log_list_response'\n      }\n    },\n    next_page: {\n      type: 'string',\n      description: 'The next_page parameter is always returned to support ongoing log retrieval. It enables continuous querying, even when some requests return no new data. Save the next_page token from each response and use it for future requests to ensure no logs are missed. This setup is ideal for regular updates via automated processes, like cron jobs, to fetch logs continuously as they become available. When you receive an empty data array, it indicates a temporary absence of new logs, but subsequent requests might return new data.'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ],\n  $defs: {\n    audit_log_list_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        request: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            ip: {\n              type: 'string'\n            },\n            user_agent: {\n              type: 'string'\n            }\n          },\n          required: [            'id'\n          ]\n        },\n        timestamp: {\n          type: 'string',\n          format: 'date-time'\n        },\n        action: {\n          type: 'string'\n        },\n        actor: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            email: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'name'\n          ]\n        },\n        description: {\n          type: 'string'\n        },\n        resource_id: {\n          type: 'string'\n        },\n        resource_type: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'success',\n            'failure',\n            'pending'\n          ]\n        }\n      },\n      required: [        'id',\n        'request',\n        'timestamp'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.v1.auditLogs.list(body).asResponse();
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
