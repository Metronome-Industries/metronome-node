// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.usage',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/ingest',
  operationId: 'ingest-v1',
};

export const tool: Tool = {
  name: 'ingest_v1_usage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSend usage events to Metronome. The body of this request is expected to be a JSON array of between 1 and 100 usage events. Compressed request bodies are supported with a `Content-Encoding: gzip` header. See [Getting usage into Metronome](https://docs.metronome.com/connect-metronome/) to learn more about usage events.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      usage: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            customer_id: {
              type: 'string',
            },
            event_type: {
              type: 'string',
            },
            timestamp: {
              type: 'string',
              description: 'RFC 3339 formatted',
            },
            transaction_id: {
              type: 'string',
            },
            properties: {
              type: 'object',
            },
          },
          required: ['customer_id', 'event_type', 'timestamp', 'transaction_id'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.v1.usage.ingest(body['usage']).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
