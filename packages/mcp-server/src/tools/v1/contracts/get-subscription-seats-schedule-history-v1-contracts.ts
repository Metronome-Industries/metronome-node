// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/getSubscriptionSeatsScheduleHistory',
  operationId: 'getSubscriptionSeatsScheduleHistory-v1',
};

export const tool: Tool = {
  name: 'get_subscription_seats_schedule_history_v1_contracts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the history of subscription seats schedule over time for a given `subscription_id`. This endpoint provides information about seat assignments and total quantities for different time periods, allowing you to track how seat assignments have changed over time.\n\n### Use this endpoint to:\n- Track changes to seat assignments over time\n- Get seat schedule for a specific date using the `covering_date` parameter\n- Get seat schedule history with optional date range filtering using `starting_at` and `ending_before`\n\n### Key response fields:\n- data: array of seat schedule entries with time periods, quantity, and assignments\n- next_page: cursor for pagination to retrieve additional results\n\n### Usage guidelines:\n- Use `covering_date` to get the active seats for a specific point in time. `covering_date` cannot be used with `starting_at` or `ending_before`.\n- Use `starting_at` and `ending_before` to filter results by time range. `starting_at` and `ending_before` cannot be used with `covering_date`.\n- Maximum limit is 10 seat schedule entries per request\n- Results are ordered by `starting_at` timestamp\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          assigned_seat_ids: {\n            type: 'array',\n            description: 'Array of seat IDs that are assigned in this period',\n            items: {\n              type: 'string'\n            }\n          },\n          ending_before: {\n            type: 'string',\n            description: 'The end time of this seat schedule period (null if ongoing)',\n            format: 'date-time'\n          },\n          starting_at: {\n            type: 'string',\n            description: 'The start time of this seat schedule period',\n            format: 'date-time'\n          },\n          total_quantity: {\n            type: 'integer',\n            description: 'Total number of assigned and unassigned seats in this period'\n          }\n        },\n        required: [          'assigned_seat_ids',\n          'ending_before',\n          'starting_at',\n          'total_quantity'\n        ]\n      }\n    },\n    next_page: {\n      type: 'string',\n      description: 'Cursor for the next page of results'\n    }\n  },\n  required: [    'data',\n    'next_page'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
      },
      customer_id: {
        type: 'string',
      },
      subscription_id: {
        type: 'string',
      },
      covering_date: {
        type: 'string',
        description:
          'Get the seats history segment for the covering date. Cannot be used with `starting_at` or `ending_before`.',
        format: 'date-time',
      },
      cursor: {
        type: 'string',
        description:
          'Cursor for pagination. Use the value from the `next_page` field of the previous response to retrieve the next page of results.',
      },
      ending_before: {
        type: 'string',
        description:
          "Include seats history segments that are active at or before this timestamp. Use with `starting_at` to get a specific time range. If not set, there's no upper bound.",
        format: 'date-time',
      },
      limit: {
        type: 'integer',
        description:
          'Maximum number of seat schedule entries to return. Defaults to 10. Required range: 1 <= x <= 10.',
      },
      starting_at: {
        type: 'string',
        description:
          "Include seats history segments that are active at or after this timestamp. Use with `ending_before` to get a specific time range. If not set, there's no lower bound.",
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['contract_id', 'customer_id', 'subscription_id'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.v1.contracts.getSubscriptionSeatsScheduleHistory(body)),
  );
};

export default { metadata, tool, handler };
