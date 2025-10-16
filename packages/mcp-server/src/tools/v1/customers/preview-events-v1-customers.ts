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
    "Preview how a set of events will affect a customer's invoices. Generates draft invoices for a customer using their current contract configuration and the provided events.  This is useful for testing how new events will affect the customer's invoices before they are actually processed.\n",
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
            properties: {
              type: 'object',
              additionalProperties: true,
            },
            timestamp: {
              type: 'string',
              description: 'RFC 3339 formatted. If not provided, the current time will be used.',
            },
            transaction_id: {
              type: 'string',
              description:
                'Optional unique identifier for event deduplication. When provided, preview events are automatically deduplicated against historical events from the past 34 days.  Duplicate transaction IDs within the same request will return an error.\n',
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
