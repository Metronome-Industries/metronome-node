// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.rateCards.named_schedules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/updateNamedSchedule',
  operationId: 'updateContractNamedSchedule-v1',
};

export const tool: Tool = {
  name: 'update_rate_cards_contracts_v1_named_schedules',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a named schedule for the given contract. This endpoint's availability is dependent on your client's configuration.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
        description: 'ID of the contract whose named schedule is to be updated',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose named schedule is to be updated',
      },
      schedule_name: {
        type: 'string',
        description: 'The identifier for the schedule to be updated',
      },
      starting_at: {
        type: 'string',
        format: 'date-time',
      },
      value: {
        type: 'object',
        description:
          'The value to set for the named schedule. The structure of this object is specific to the named schedule.',
      },
      ending_before: {
        type: 'string',
        format: 'date-time',
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
  const response = await client.v1.contracts.rateCards.namedSchedules.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
