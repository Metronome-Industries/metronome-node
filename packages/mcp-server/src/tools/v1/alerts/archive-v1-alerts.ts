// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.alerts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/alerts/archive',
  operationId: 'archiveAlert-v1',
};

export const tool: Tool = {
  name: 'archive_v1_alerts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPermanently disable an alert and remove it from active monitoring across all customers. Archived alerts stop evaluating immediately and can optionally release their uniqueness key for reuse in future alert configurations.\n\n### Use this endpoint to:\n- Decommission alerts that are no longer needed\n- Clean up test or deprecated alert configurations\n- Free up uniqueness keys for reuse with new alerts\n- Stop alert evaluations without losing historical configuration data\n- Disable outdated monitoring rules during pricing model transitions\n\n### Key response fields:\n- data: Object containing the archived alert's ID\n- Alert evaluation stops immediately for all affected customers\n- Historical alert data and configurations remain accessible for audit purposes\n\n### Usage guidelines:\n- Irreversible for evaluation: Archived alerts cannot be re-enabled; create a new alert to resume monitoring\n- Uniqueness key handling: Set `release_uniqueness_key` : `true` to reuse the key in future alerts\n- Immediate effect: Alert evaluation stops instantly across all customers\n- Historical preservation: Archive operation maintains alert history and configuration for compliance and auditing\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/id'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The Metronome ID of the alert',
      },
      release_uniqueness_key: {
        type: 'boolean',
        description: 'If true, resets the uniqueness key on this alert so it can be re-used',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v1.alerts.archive(body)));
};

export default { metadata, tool, handler };
