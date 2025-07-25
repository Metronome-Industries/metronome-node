// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@metronome/mcp/filtering';
import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.named_schedules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contract-pricing/rate-cards/getNamedSchedule',
  operationId: 'getRateCardNamedSchedule-v1',
};

export const tool: Tool = {
  name: 'retrieve_contracts_v1_named_schedules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a named schedule for the given rate card. This endpoint's availability is dependent on your client's configuration.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          starting_at: {\n            type: 'string',\n            format: 'date-time'\n          },\n          value: {\n            type: 'object'\n          },\n          ending_before: {\n            type: 'string',\n            format: 'date-time'\n          }\n        },\n        required: [          'starting_at',\n          'value'\n        ]\n      }\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      rate_card_id: {
        type: 'string',
        description: 'ID of the rate card whose named schedule is to be retrieved',
      },
      schedule_name: {
        type: 'string',
        description: 'The identifier for the schedule to be retrieved',
      },
      covering_date: {
        type: 'string',
        description:
          'If provided, at most one schedule segment will be returned (the one that covers this date). If not provided, all segments will be returned.',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['rate_card_id', 'schedule_name'],
  },
  annotations: {},
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.v1.contracts.namedSchedules.retrieve(body)),
  );
};

export default { metadata, tool, handler };
