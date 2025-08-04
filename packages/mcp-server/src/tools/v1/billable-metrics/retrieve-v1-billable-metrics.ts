// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.billable_metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/billable-metrics/{billable_metric_id}',
  operationId: 'getBillableMetric-v1',
};

export const tool: Tool = {
  name: 'retrieve_v1_billable_metrics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a billable metric.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'ID of the billable metric'\n        },\n        name: {\n          type: 'string',\n          description: 'The display name of the billable metric.'\n        },\n        aggregation_key: {\n          type: 'string',\n          description: 'A key that specifies which property of the event is used to aggregate data. This key must be one of the property filter names and is not applicable when the aggregation type is \\'count\\'.'\n        },\n        aggregation_type: {\n          type: 'string',\n          description: 'Specifies the type of aggregation performed on matching events.',\n          enum: [            'COUNT',\n            'LATEST',\n            'MAX',\n            'SUM',\n            'UNIQUE'\n          ]\n        },\n        archived_at: {\n          type: 'string',\n          description: 'RFC 3339 timestamp indicating when the billable metric was archived. If not provided, the billable metric is not archived.',\n          format: 'date-time'\n        },\n        custom_fields: {\n          type: 'object'\n        },\n        event_type_filter: {\n          type: 'object',\n          description: 'An optional filtering rule to match the \\'event_type\\' property of an event.',\n          properties: {\n            in_values: {\n              type: 'array',\n              description: 'A list of event types that are explicitly included in the billable metric. If specified, only events of these types will match the billable metric. Must be non-empty if present.',\n              items: {\n                type: 'string'\n              }\n            },\n            not_in_values: {\n              type: 'array',\n              description: 'A list of event types that are explicitly excluded from the billable metric. If specified, events of these types will not match the billable metric. Must be non-empty if present.',\n              items: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        group_keys: {\n          type: 'array',\n          description: 'Property names that are used to group usage costs on an invoice. Each entry represents a set of properties used to slice events into distinct buckets.',\n          items: {\n            type: 'array',\n            items: {\n              type: 'string'\n            }\n          }\n        },\n        property_filters: {\n          type: 'array',\n          description: 'A list of filters to match events to this billable metric. Each filter defines a rule on an event property. All rules must pass for the event to match the billable metric.',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string',\n                description: 'The name of the event property.'\n              },\n              exists: {\n                type: 'boolean',\n                description: 'Determines whether the property must exist in the event. If true, only events with this property will pass the filter. If false, only events without this property will pass the filter. If null or omitted, the existence of the property is optional.'\n              },\n              in_values: {\n                type: 'array',\n                description: 'Specifies the allowed values for the property to match an event. An event will pass the filter only if its property value is included in this list. If undefined, all property values will pass the filter. Must be non-empty if present.',\n                items: {\n                  type: 'string'\n                }\n              },\n              not_in_values: {\n                type: 'array',\n                description: 'Specifies the values that prevent an event from matching the filter. An event will not pass the filter if its property value is included in this list. If null or empty, all property values will pass the filter. Must be non-empty if present.',\n                items: {\n                  type: 'string'\n                }\n              }\n            },\n            required: [              'name'\n            ]\n          }\n        },\n        sql: {\n          type: 'string',\n          description: 'The SQL query associated with the billable metric'\n        }\n      },\n      required: [        'id',\n        'name'\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      billable_metric_id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['billable_metric_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.v1.billableMetrics.retrieve(body)));
};

export default { metadata, tool, handler };
