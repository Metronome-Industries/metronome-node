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
    'Send usage events to Metronome. The body of this request is expected to be a JSON array of between 1 and 100 usage events. Compressed request bodies are supported with a `Content-Encoding: gzip` header. See [Getting usage into Metronome](https://docs.metronome.com/connect-metronome/) to learn more about usage events.\n',
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
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  await client.v1.usage.ingest(body['usage']);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
