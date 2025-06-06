// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@metronome/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Metronome from '@metronome/sdk';

export const metadata: Metadata = {
  resource: 'v1.contracts.rateCards.named_schedules',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/contracts/getNamedSchedule',
  operationId: 'getContractNamedSchedule-v1',
};

export const tool: Tool = {
  name: 'retrieve_rate_cards_contracts_v1_named_schedules',
  description:
    "Get a named schedule for the given contract. This endpoint's availability is dependent on your client's configuration.",
  inputSchema: {
    type: 'object',
    properties: {
      contract_id: {
        type: 'string',
        description: 'ID of the contract whose named schedule is to be retrieved',
      },
      customer_id: {
        type: 'string',
        description: 'ID of the customer whose named schedule is to be retrieved',
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
    },
  },
};

export const handler = async (client: Metronome, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.v1.contracts.rateCards.namedSchedules.retrieve(body));
};

export default { metadata, tool, handler };
