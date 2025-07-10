// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.billable_metrics',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/billable-metrics/create',
  operationId: 'createBillableMetricV1-v1',
};

export const tool: Tool = {
  name: 'create_v1_billable_metrics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new Billable Metric.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      $ref: '#/$defs/id'\n    }\n  },\n  required: [    'data'\n  ],\n  $defs: {\n    id: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The display name of the billable metric.',
      },
      aggregation_key: {
        type: 'string',
        description:
          'Specifies the type of aggregation performed on matching events. Required if `sql` is not provided.',
      },
      aggregation_type: {
        type: 'string',
        description: 'Specifies the type of aggregation performed on matching events.',
        enum: ['COUNT', 'LATEST', 'MAX', 'SUM', 'UNIQUE'],
      },
      custom_fields: {
        type: 'object',
        description: 'Custom fields to attach to the billable metric.',
      },
      event_type_filter: {
        $ref: '#/$defs/event_type_filter',
      },
      group_keys: {
        type: 'array',
        description:
          'Property names that are used to group usage costs on an invoice. Each entry represents a set of properties used to slice events into distinct buckets.',
        items: {
          type: 'array',
          items: {
            type: 'string',
          },
        },
      },
      property_filters: {
        type: 'array',
        description:
          'A list of filters to match events to this billable metric. Each filter defines a rule on an event property. All rules must pass for the event to match the billable metric.',
        items: {
          $ref: '#/$defs/property_filter',
        },
      },
      sql: {
        type: 'string',
        description:
          'The SQL query associated with the billable metric. This field is mutually exclusive with aggregation_type, event_type_filter, property_filters, aggregation_key, and group_keys. If provided, these other fields must be omitted.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      event_type_filter: {
        type: 'object',
        description: "An optional filtering rule to match the 'event_type' property of an event.",
        properties: {
          in_values: {
            type: 'array',
            description:
              'A list of event types that are explicitly included in the billable metric. If specified, only events of these types will match the billable metric. Must be non-empty if present.',
            items: {
              type: 'string',
            },
          },
          not_in_values: {
            type: 'array',
            description:
              'A list of event types that are explicitly excluded from the billable metric. If specified, events of these types will not match the billable metric. Must be non-empty if present.',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
      property_filter: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'The name of the event property.',
          },
          exists: {
            type: 'boolean',
            description:
              'Determines whether the property must exist in the event. If true, only events with this property will pass the filter. If false, only events without this property will pass the filter. If null or omitted, the existence of the property is optional.',
          },
          in_values: {
            type: 'array',
            description:
              'Specifies the allowed values for the property to match an event. An event will pass the filter only if its property value is included in this list. If undefined, all property values will pass the filter. Must be non-empty if present.',
            items: {
              type: 'string',
            },
          },
          not_in_values: {
            type: 'array',
            description:
              'Specifies the values that prevent an event from matching the filter. An event will not pass the filter if its property value is included in this list. If null or empty, all property values will pass the filter. Must be non-empty if present.',
            items: {
              type: 'string',
            },
          },
        },
        required: ['name'],
      },
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.v1.billableMetrics.create(body)));
};

export default { metadata, tool, handler };
