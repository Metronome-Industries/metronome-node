// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/customers/{customer_id}/previewEvents',
  operationId: 'previewCustomerEvents-v1',
};

export const tool: Tool = {
  name: 'preview_events_v1_customers',
  description:
    "Preview how a set of events will affect a customer's invoice. Generates a draft invoice for a customer using their current contract configuration and the provided events. This is useful for testing how new events will affect the customer's invoice before they are actually processed.",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      events: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            event_type: {
              type: 'string',
            },
            customer_id: {
              type: 'string',
              description:
                "This has no effect for preview events, but may be set for consistency with Event objects. They will be processed even if they do not match the customer's ID or ingest aliases.",
            },
            properties: {
              type: 'object',
            },
            timestamp: {
              type: 'string',
              description: 'RFC 3339 formatted. If not provided, the current time will be used.',
            },
            transaction_id: {
              type: 'string',
              description:
                'This has no effect for preview events, but may be set for consistency with Event objects. Duplicate transaction_ids are NOT filtered out, even within the same request.',
            },
          },
          required: ['event_type'],
        },
      },
      mode: {
        type: 'string',
        description:
          'If set to "replace", the preview will be generated as if those were the only events for the specified customer. If set to "merge", the events will be merged with any existing events for the specified customer. Defaults to "replace".',
        enum: ['replace', 'merge'],
      },
      skip_zero_qty_line_items: {
        type: 'boolean',
        description: 'If set, all zero quantity line items will be filtered out of the response.',
      },
    },
    required: ['customer_id', 'events'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.customers.previewEvents(body));
};

export default { metadata, tool, handler };
