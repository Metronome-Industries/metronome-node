// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@metronome/mcp/tools/types';

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
    "Preview how a set of events will affect a customer's invoices. Generates draft invoices for a customer using their current contract configuration and the provided events.  This is useful for testing how new events will affect the customer's invoices before they are actually processed. Customers on contracts with SQL billable metrics are not supported.\n",
  inputSchema: {
    type: 'object',
    properties: {
      customer_id: {
        type: 'string',
      },
      events: {
        type: 'array',
        description:
          'Array of usage events to include in the preview calculation. Must contain at least one event in `merge` mode.\n',
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
          "Controls how the provided events are combined with existing usage data. Use `replace` to calculate the preview as if these are the only events for the customer, ignoring all historical usage.  Use `merge` to combine these events with the customer's existing usage.  Defaults to `replace`.",
        enum: ['replace', 'merge'],
      },
      skip_zero_qty_line_items: {
        type: 'boolean',
        description: 'When `true`, line items with zero quantity are excluded from the response.',
      },
    },
    required: ['customer_id', 'events'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.v1.customers.previewEvents(body));
  } catch (error) {
    if (error instanceof Metronome.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
